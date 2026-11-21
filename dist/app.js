const elements = Object.fromEntries(
  [...document.querySelectorAll("[id]")].map(element => [element.id, element])
);

const storageKey = "between-the-lines-unit-3-collected";
const coverStyles = [
  ["arches", "ocean"], ["stripes", "blue"], ["arc", "red"], ["steps", "gold"], ["petals", "green"], ["orbit", "navy"],
  ["rays", "red"], ["arc", "ocean"], ["checks", "blue"], ["hourglass", "gold"], ["stripes", "red"], ["diagonal", "ocean"], ["arches", "red"], ["triangles", "blue"],
  ["arches", "blue"], ["triangles", "red"], ["stripes", "green"], ["orbit", "gold"], ["petals", "blue"], ["steps", "red"]
];
const cardButtons = [];
const revealed = loadCollectedWords();
let position = null;

function loadCollectedWords() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(storageKey) ?? "[]");
    if (Array.isArray(saved)) {
      return new Set(cards.filter(card => saved.includes(card.word)).map(card => card.word));
    }
  } catch {
    // Progress can still be tracked until reload if storage is unavailable.
  }
  return new Set();
}

function storeProgress() {
  try {
    sessionStorage.setItem(storageKey, JSON.stringify([...revealed]));
  } catch {
    // The in-memory Word Bank stays usable.
  }
}

function makeButton(className, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.textContent = label;
  return button;
}

function buildBank() {
  for (const [groupIndex, chapter] of chapters.entries()) {
    const group = document.createElement("section");
    group.className = "word-group";
    group.dataset.group = String(groupIndex);
    const title = document.createElement("h2");
    title.textContent = chapter.title;

    const row = document.createElement("div");
    row.className = "shelf-grid";
    row.style.setProperty("--columns", chapter.end - chapter.start);
    for (let index = chapter.start; index < chapter.end; index += 1) {
      const button = makeButton("word-cover", "");
      const [pattern, palette] = coverStyles[index];
      button.dataset.pattern = pattern;
      button.dataset.palette = palette;
      const number = document.createElement("span");
      number.className = "cover-number";
      number.textContent = String(index + 1).padStart(2, "0");
      number.setAttribute("aria-hidden", "true");
      const title = document.createElement("span");
      title.className = "cover-title";
      title.style.setProperty("--letters", Math.max(...cards[index].word.split(" ").map(part => part.length)));
      button.append(number, title);
      button.addEventListener("click", () => {
        if (revealed.has(cards[index].word)) openCard(index, { review: true });
        else openClue(index);
      });
      cardButtons.push({ button, number, title });
      row.append(button);
    }
    group.append(title, row);
    elements.groups.append(group);
  }
}

function updateBank() {
  elements["progress-number"].textContent = `${revealed.size} of ${cards.length} discovered`;
  elements["progress-meter"].max = cards.length;
  elements["progress-meter"].value = revealed.size;

  for (const [index, { word }] of cards.entries()) {
    const { button, number, title } = cardButtons[index];
    const isCollected = revealed.has(word);
    button.classList.toggle("is-collected", isCollected);
    button.classList.toggle("is-current", index === position);
    button.setAttribute("aria-label", isCollected ? `Review ${word}, card ${index + 1}` : `Card ${index + 1}, word to discover`);
    number.hidden = isCollected;
    title.textContent = isCollected ? word : "?";
  }
}

function focusView(element) {
  window.scrollTo(0, 0);
  element.focus({ preventScroll: true });
}

function showBank() {
  updateBank();
  elements["card-view"].hidden = true;
  elements["bank-view"].hidden = false;
  focusView(elements["bank-title"]);
}

function openCard(index, { review = false, keepGuess = false } = {}) {
  position = index;
  elements["bank-view"].hidden = true;
  elements["card-view"].hidden = false;
  elements["card-chapter"].textContent = chapters.find(chapter => index < chapter.end).title;
  elements["card-position"].textContent = `Card ${index + 1} of ${cards.length}`;
  elements.previous.disabled = index === 0;
  elements.next.textContent = index === cards.length - 1 ? "Return to Word Bank" : "Next card";

  if (!keepGuess) elements.prediction.value = "";
  if (review) showAnswer();
}

function openClue(index, { keepGuess = false } = {}) {
  openCard(index, { keepGuess });
  const card = cards[index];
  elements["clue-text"].textContent = card.clue;
  elements["vocabulary-card"].setAttribute("aria-labelledby", "clue-title");
  elements["answer-view"].hidden = true;
  elements["clue-view"].hidden = false;
  elements["cover-word"].hidden = true;
  elements.next.className = "secondary";
  elements["hint-text"].hidden = true;
  elements["hint-text"].textContent = "";
  elements["hint-button"].setAttribute("aria-expanded", "false");
  elements["hint-button"].textContent = "Show hint";
  focusView(elements["clue-title"]);
}

function showVisual(visual) {
  const figure = elements["word-visual"];
  figure.setAttribute("aria-label", visual.alt);
  figure.classList.toggle("story-picture", Boolean(visual.sheet));
  if (visual.sheet) {
    figure.dataset.sheet = visual.sheet;
    figure.dataset.tile = visual.tile;
    figure.replaceChildren();
  } else {
    delete figure.dataset.sheet;
    delete figure.dataset.tile;
    figure.replaceChildren(elements[`visual-${visual.diagram}`].content.cloneNode(true));
  }
}

function showAnswer() {
  const card = cards[position];
  const guess = elements.prediction.value.trim();
  elements["answer-word"].textContent = card.word;
  elements["word-type"].textContent = card.type;
  elements.definition.textContent = card.definition;

  const phraseItems = card.phrases.map(phrase => {
    const item = document.createElement("li");
    item.textContent = phrase;
    return item;
  });
  elements.phrases.replaceChildren(...phraseItems);

  const [before, target, after] = card.example.split("*");
  const highlighted = document.createElement("strong");
  highlighted.textContent = target;
  elements.example.replaceChildren(before, highlighted, after);
  showVisual(card.visual);

  const feedback = elements["guess-feedback"];
  feedback.hidden = !guess;
  if (guess) {
    const matches = guess.toLowerCase().replace(/\s+/g, " ") === card.word;
    feedback.textContent = matches ? "You guessed it!" : `Your prediction was “${guess}”.`;
  }

  const isNew = !revealed.has(card.word);
  revealed.add(card.word);
  if (isNew) storeProgress();
  elements["collected-message"].textContent = isNew ? "Added to your Word Bank" : "In your Word Bank";

  elements["vocabulary-card"].setAttribute("aria-labelledby", "answer-word");
  elements["clue-view"].hidden = true;
  elements["answer-view"].hidden = false;
  elements["cover-word"].hidden = false;
  elements.next.className = "primary";
  focusView(elements["answer-word"]);
}

function toggleHint() {
  const hint = elements["hint-text"];
  const button = elements["hint-button"];
  const show = hint.hidden;
  const card = cards[position];
  const initials = card.word.split(" ").map(word => word[0].toUpperCase()).join(" · ");
  hint.hidden = !show;
  hint.textContent = show ? `${card.type} · Starts with ${initials}` : "";
  button.setAttribute("aria-expanded", String(show));
  button.textContent = show ? "Hide hint" : "Show hint";
}

elements["prediction-form"].addEventListener("submit", event => {
  event.preventDefault();
  showAnswer();
});
elements["hint-button"].addEventListener("click", toggleHint);
elements["cover-word"].addEventListener("click", () => openClue(position, { keepGuess: true }));
elements.previous.addEventListener("click", () => openClue(position - 1));
elements.next.addEventListener("click", () => {
  if (position === cards.length - 1) showBank();
  else openClue(position + 1);
});
elements["back-to-bank"].addEventListener("click", showBank);
elements["wordmark"].addEventListener("click", event => {
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  showBank();
});

buildBank();
updateBank();

const chapters = [
  { title: "Reading", start: 0, end: 6 },
  { title: "Stories & Comics", start: 6, end: 14 },
  { title: "Visuals & Data", start: 14, end: 20 }
];

const cards = [
  {
    word: "empathy", type: "noun",
    visual: { sheet: "reading", tile: "top-left", alt: "Two friends share a sad goodbye through a train window." },
    clue: "Mina reads about a girl who has to leave her best friend. Mina can imagine how the girl feels. What do we call this ability?",
    definition: "The ability to imagine and understand what another person is feeling.",
    phrases: ["show empathy", "feel empathy for someone", "put yourself in someone’s shoes"],
    example: "The letters in the novel helped Mina develop *empathy* for the girl who had to leave home."
  },
  {
    word: "escapism", type: "noun",
    visual: { sheet: "reading", tile: "top-right", alt: "A reader imagines a dragon circling a tower in a fantasy world." },
    clue: "Elias reads a book about dragons to forget his worries for a while. What do we call this kind of break from real life?",
    definition: "Using an enjoyable activity or imagined world to take your mind off real-life worries.",
    phrases: ["a form of escapism", "a bit of escapism", "escape into a story"],
    example: "After a week of exams, reading about a kingdom of dragons was a welcome bit of *escapism*."
  },
  {
    word: "concentration", type: "noun",
    visual: { sheet: "reading", tile: "bottom-left", alt: "A student focuses on a tiny note in a book while the library blurs around her." },
    clue: "The library is noisy, but Mina keeps her mind on her book. What do we call this ability to focus?",
    definition: "The ability or effort to keep your attention on one thing.",
    phrases: ["lose concentration", "require concentration", "full concentration"],
    example: "Reading the faded handwriting required Mina’s full *concentration*."
  },
  {
    word: "complexity", type: "noun",
    visual: { sheet: "reading", tile: "bottom-right", alt: "A mystery board connects a letter and several photographs with intertwined strings." },
    clue: "The story has many parts. It is hard to see how they fit together. What word describes how complicated the story is?",
    definition: "The quality of having many connected parts that make something difficult to understand.",
    phrases: ["the complexity of a plot", "add complexity", "a high level of complexity"],
    example: "The second narrator adds *complexity* to a plot that seemed simple at first."
  },
  {
    word: "stimulation", type: "noun",
    visual: { sheet: "story", tile: "top-left", alt: "Three members of a book club lean into a lively discussion." },
    clue: "The book gets the group thinking and talking about new ideas. What word means something that makes your mind more active?",
    definition: "Something that makes the mind, senses, or body more active.",
    phrases: ["mental stimulation", "provide stimulation", "intellectual stimulation"],
    example: "Debating the mystery’s ending gave the reading group plenty of mental *stimulation*."
  },
  {
    word: "knowledge", type: "noun",
    visual: { sheet: "story", tile: "top-right", alt: "A student learns how metal letters were used with an old printing press." },
    clue: "Elias reads about how people printed books long ago. Now he knows how they did it. What word means the things he now knows?",
    definition: "Information and understanding gained through learning or experience.",
    phrases: ["gain knowledge", "knowledge of a subject", "share your knowledge"],
    example: "Elias used his new *knowledge* of printing to make a page for the library exhibition."
  },
  {
    word: "symbolism", type: "noun",
    visual: { sheet: "story", tile: "bottom-left", alt: "An ornate mirror is cracked, like the family’s broken trust in the story." },
    clue: "The book shows a broken mirror. It stands for a family that is falling apart. What do we call using an object to show a bigger idea?",
    definition: "Using details such as objects, colours, or actions to suggest meanings beyond their literal ones.",
    phrases: ["use symbolism", "interpret symbolism", "a recurring symbol"],
    example: "Through *symbolism*, the author turns an ordinary mirror into a sign of the family’s broken trust."
  },
  {
    word: "mood", type: "noun",
    visual: { sheet: "story", tile: "bottom-right", alt: "A dim light and a closed door make an empty library corridor feel eerie." },
    clue: "The hall is dark. A light goes on and off. The reader feels worried. What do we call the feeling a scene creates?",
    definition: "The atmosphere or feeling a scene creates for the reader or viewer.",
    phrases: ["set the mood", "create a tense mood", "a shift in mood"],
    example: "The flickering lights and the empty corridor create an uneasy *mood*."
  },
  {
    word: "perspective", type: "noun",
    visual: { sheet: "comics", tile: "top-left", alt: "Two readers react differently to the same sealed letter on a library table." },
    clue: "Mina thinks hiding the letter was wrong. The librarian thinks it kept someone safe. What word means a person’s way of seeing what happened?",
    definition: "The way a person sees or understands an event or situation, shaped by what they know and experience.",
    phrases: ["from someone’s perspective", "a different perspective", "see things from another point of view"],
    example: "From the librarian’s *perspective*, hiding the letter was the only way to protect its writer."
  },
  {
    word: "panel", type: "noun",
    visual: { sheet: "comics", tile: "top-right", alt: "A single framed comic drawing shows a hand finding an envelope in a drawer." },
    clue: "In a comic, one box shows Mina opening a drawer. Another box shows a letter inside. What is each box called?",
    definition: "One framed unit on a comic page, usually showing a moment or part of the action.",
    phrases: ["a comic panel", "the final panel", "a sequence of panels"],
    example: "In the final *panel*, we see Mina’s hand reaching for the envelope."
  },
  {
    word: "narrative", type: "noun",
    visual: { sheet: "comics", tile: "bottom-left", alt: "A storyboard shows a character entering a library, finding a letter, and opening it." },
    clue: "Mina enters the library, finds a letter, and reads it. The writer tells these events as one story. What is another word for a story like this?",
    definition: "A story that connects events, or the way those events are told.",
    phrases: ["build a narrative", "a first-person narrative", "advance the narrative"],
    example: "The *narrative* jumps back ten years to show who hid the letter."
  },
  {
    word: "imagery", type: "noun",
    visual: { sheet: "comics", tile: "bottom-right", alt: "Fingers turn rough paper beside curled leaves on weathered wood." },
    clue: "The paper sounds like dry leaves. The room smells like wet wood. What do we call language that helps us imagine sounds, smells, and other details?",
    definition: "Descriptive language that helps you imagine what something looks, sounds, smells, tastes, or feels like. Pictures can also create a similar effect.",
    phrases: ["vivid imagery", "sensory imagery", "use imagery to describe a scene"],
    example: "The writer uses sound and smell *imagery* to make the old reading room feel real."
  },
  {
    word: "layout", type: "noun",
    visual: { sheet: "design", tile: "top-left", alt: "One wide comic illustration sits above a row of smaller ones." },
    clue: "A big picture goes at the top of the comic page. Three small pictures go below it. What word means the way things are placed on a page?",
    definition: "The arrangement of text, pictures, and other elements on a page or screen.",
    phrases: ["page layout", "a clear layout", "change the layout"],
    example: "The new *layout* leaves a whole row for the scene in which Mina finds the letter."
  },
  {
    word: "text bubble", type: "noun phrase",
    visual: { sheet: "design", tile: "top-right", alt: "A comic character’s words appear in a rounded speech shape with a tail pointing towards him." },
    clue: "In a comic, Elias says, ‘Did you hear that?’ His words are inside a round shape with a little tail. What is that shape called?",
    definition: "A shape in a comic that holds a character’s words, often with a pointed tail showing who is speaking.",
    phrases: ["add a text bubble", "read a text bubble", "speech bubble"],
    example: "The tiny *text bubble* above Elias’s head shows that he is whispering."
  },
  {
    word: "infographic", type: "noun",
    visual: { sheet: "design", tile: "bottom-left", alt: "A library exhibition poster uses icons and a chart to explain information at a glance." },
    clue: "Mina makes a poster about the books students read. She uses pictures, numbers, and a few words to explain the results. What kind of poster is this?",
    definition: "A graphic that uses visuals and short text to explain information or numbers quickly.",
    phrases: ["design an infographic", "an infographic on reading habits", "present findings in an infographic"],
    example: "Mina designed an *infographic* to show how students chose their next book."
  },
  {
    word: "statistic", type: "noun",
    visual: { diagram: "statistic", alt: "The reading survey found that 62 out of 100 students chose a mystery novel." },
    clue: "The class asks 100 students about their reading. 62 say they picked a mystery book. What do we call one fact given as a number?",
    definition: "A single number or numerical fact that summarises information, often from a study or survey.",
    phrases: ["a surprising statistic", "quote a statistic", "a statistic from a survey"],
    example: "The most surprising *statistic* was that 62 out of 100 students had chosen a mystery novel."
  },
  {
    word: "pie chart", type: "noun phrase",
    visual: { diagram: "pie-chart", alt: "The circle shows 62 percent for mystery, 24 percent for fantasy, and 14 percent for biography." },
    clue: "The chart is a circle cut into slices. The biggest slice shows the most popular kind of book. What kind of chart is this?",
    definition: "A circular chart divided into slices to show how much each category makes up of the whole.",
    phrases: ["a slice of a pie chart", "read a pie chart", "show proportions in a pie chart"],
    example: "The biggest slice of the *pie chart* represents students who prefer mysteries."
  },
  {
    word: "bar graph", type: "noun phrase",
    visual: { diagram: "bar-graph", alt: "Three bars show 24 mystery loans, 18 fantasy loans, and 12 biography loans." },
    clue: "Each kind of book has a rectangle. A taller rectangle means more books were borrowed. What kind of graph is this?",
    definition: "A graph that compares amounts using rectangular bars. The length or height of each bar shows its value.",
    phrases: ["read a bar graph", "compare values in a bar graph", "a horizontal bar graph"],
    example: "The *bar graph* shows that the library lent twice as many mysteries as biographies."
  },
  {
    word: "typography", type: "noun",
    visual: { sheet: "design", tile: "bottom-right", alt: "Three large letters use contrasting type styles on a cream page." },
    clue: "The poster uses big, bold letters for the title and small, thin letters for the book names. What word means the style and size of letters on a page?",
    definition: "The style and arrangement of printed or digital lettering, including font, size, and spacing.",
    phrases: ["bold typography", "use clear typography", "choose a readable font"],
    example: "The poster uses bold *typography* so visitors can read the heading from across the room."
  },
  {
    word: "data", type: "plural or uncountable noun",
    visual: { diagram: "data", alt: "The reading log lists 24 minutes for mystery, 18 for fantasy, and 31 for biography." },
    clue: "Mina makes a list of the books students read and how long they read for. What word means the facts and numbers she collected?",
    definition: "Facts, answers, or measurements collected so they can be studied or used.",
    phrases: ["collect data", "analyse data", "survey data"],
    example: "The team collected *data* on library loans before deciding which books to display."
  }
];

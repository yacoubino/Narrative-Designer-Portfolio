const projects = {
  room: {
    number:"01", title:"A Room Once Shared", type:"PERSONAL PROJECT", genre:"Psychological narrative experience",
    status:"Case study — initial draft", cover:"cover-room",
    logline:"A dinner prepared for someone who never arrives. A familiar home that begins to change. A memory the player cannot quite leave behind.",
    story:"The player prepares for a girl who is supposed to come over for dinner. As the evening unfolds, doors lead into unsettling repetitions of the house, where fragments of the past surface. Objects begin to disappear, and the player gradually understands that the experience is not simply about waiting for someone — it is about being held in place by memories of a relationship that has already ended.",
    role:"Personal project. Narrative concept and story direction, with the intention of making the emotional idea something the player discovers by exploring and interacting with the space. The exact production responsibilities and implementation details should be confirmed before publication.",
    design:"The house acts as the main storytelling device. Repeated spaces and altered details let the player notice change rather than receive an explanation. The disappearing objects turn an abstract feeling — losing the traces of a shared life — into something the player can witness while playing.",
    learn:"A strong emotional premise is not enough on its own. Players need meaningful things to do, and the gameplay must carry the story rather than simply pause it. This project sharpened my interest in environmental storytelling, repetition, and using small changes in familiar spaces to communicate emotional progression.",
    questions:["What actions does the player perform from beginning to end?","Which puzzles or interactions were implemented?","What was your exact role, and what tools/engine did you use?","Was the game released, presented, or playtested? What feedback did you receive?"],
    note:"The project description above uses the premise previously discussed. Confirm the exact mechanics and your production role so the portfolio does not overstate your contribution."
  },
  butcher: {
    number:"02", title:"Butcher Mirror's", type:"GAME PROJECT", genre:"Genre / format to confirm",
    status:"Project details needed", cover:"cover-butcher",
    logline:"A short introduction to the central idea of the game will go here.",
    story:"Add the story in a concise, spoiler-aware form: who the player is, where they are, what disrupts their world, and what question drives the experience.",
    role:"Describe what you personally handled: premise, story structure, characters, dialogue, quest design, level flow, mechanics, documentation, implementation, or collaboration.",
    design:"Explain how the story becomes playable. Focus on player goals, mechanics, interactions, exploration, puzzles, choices, progression, and how the level or quest structure delivers information.",
    learn:"Describe one real design lesson: what worked, what did not, what changed after testing, and what you would do differently next time.",
    questions:["What is the correct title spelling?","What is the game about?","What does the player do moment to moment?","What exactly did you design or implement?","What engine/tools, team size, and project status?"]
  },
  behind: {
    number:"03", title:"Behind the Screen", type:"GAME PROJECT", genre:"Genre / format to confirm",
    status:"Project details needed", cover:"cover-behind",
    logline:"A short introduction to the central idea of the game will go here.",
    story:"Add the player-facing premise and the main narrative conflict.",
    role:"List your personal contributions and distinguish your work from the team's work.",
    design:"Show how narrative information, objectives, interactions, and progression are delivered through gameplay.",
    learn:"Share a specific lesson from making or testing the game.",
    questions:["What is the story and setting?","What does the player do?","What was your role?","What mechanics or narrative systems did you design?","Was it a team project, and what was the outcome?"]
  },
  bubble: {
    number:"04", title:"Livin in Bubble", type:"GAME JAM", genre:"Game jam project",
    status:"Project details needed", cover:"cover-bubble",
    logline:"A short hook describing the game jam idea will go here.",
    story:"Explain the premise and the theme or prompt that inspired the game.",
    role:"Mention your role, teammates, time limit, and what you personally contributed.",
    design:"Describe the core loop and the key mechanic. Explain how the idea was kept achievable within the jam constraints.",
    learn:"Reflect on scope, rapid prototyping, collaboration, communication, or testing — using a concrete example.",
    questions:["What was the game jam theme and duration?","What is the game about?","What is the main gameplay loop?","What did you personally do?","Can you share the game page or screenshots?"]
  },
  perception: {
    number:"05", title:"Perception", type:"GAME JAM", genre:"Game jam project",
    status:"Project details needed", cover:"cover-perception",
    logline:"A short hook describing the game jam idea will go here.",
    story:"Explain the premise and the player's situation without revealing every twist.",
    role:"Mention your role, teammates, time limit, and what you personally contributed.",
    design:"Describe how the central idea is expressed through mechanics, level design, feedback, and player interaction.",
    learn:"Explain what this project taught you about designing for clarity, emotion, or player understanding.",
    questions:["What was the game jam theme and duration?","What is the story/premise?","What does the player do?","What did you personally design or implement?","Can you share the game page or screenshots?"]
  }
};

const id = new URLSearchParams(location.search).get("id") || "room";
const p = projects[id] || projects.room;
document.title = `${p.title} — Mohamed Yacoubi`;
const content = document.getElementById("project-content");
content.innerHTML = `
  <a class="back-link" href="index.html#work">← BACK TO SELECTED WORK</a>
  <section class="project-hero">
    <div class="project-hero-meta"><span>${p.number} / ${p.type}</span><span>${p.genre}</span></div>
    <div class="project-cover ${p.cover}"><span class="cover-index">${p.type}</span><div class="project-cover-art"></div><h1>${p.title}</h1></div>
    <div class="project-intro"><span class="eyebrow">THE PREMISE</span><p>${p.logline}</p><span class="project-status">${p.status}</span></div>
  </section>
  <section class="case-study">
    <article class="case-block"><span class="eyebrow">01 / THE STORY</span><div><h2>What is<br><em>the story?</em></h2><p>${p.story}</p></div></article>
    <article class="case-block"><span class="eyebrow">02 / MY CONTRIBUTION</span><div><h2>From idea<br><em>to experience.</em></h2><p>${p.role}</p></div></article>
    <article class="case-block"><span class="eyebrow">03 / NARRATIVE × GAME DESIGN</span><div><h2>How the player<br><em>experiences it.</em></h2><p>${p.design}</p></div></article>
    <article class="case-block learning-block"><span class="eyebrow">04 / REFLECTION</span><div><h2>What I<br><em>learned.</em></h2><p>${p.learn}</p></div></article>
  </section>
  ${p.questions ? `<section class="content-needed"><span class="eyebrow">TO COMPLETE THIS CASE STUDY</span><h2>Details to confirm</h2><p>These are the details I need from you to turn this draft into a precise, convincing portfolio case study:</p><ul>${p.questions.map(q=>`<li>${q}</li>`).join("")}</ul>${p.note ? `<p class="editor-note">${p.note}</p>` : ""}</section>` : ""}
  <div class="next-project"><a href="index.html#work">← All projects</a><a href="mailto:YOUR_EMAIL@example.com">Discuss this project ↗</a></div>
`;

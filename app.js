const laFontaineSource =
  "Adapted excerpt from Jean de La Fontaine, Fables de La Fontaine (Project Gutenberg 56327). Public domain in the USA.";

function laFontaineFable(title, level, sentences) {
  return {
    title,
    type: "Fable",
    level,
    source: laFontaineSource,
    sentences,
  };
}

const articles = [
  {
    title: "Le Corbeau et le Renard",
    type: "Fable",
    level: "A2",
    source: "Adapted excerpt from Jean de La Fontaine. Public domain source text.",
    sentences: [
      {
        parts: [
          ["Maître Corbeau,", "Master Raven,"],
          ["sur un arbre perché,", "perched in a tree,"],
          ["tenait en son bec", "held in his beak"],
          ["un fromage.", "a cheese."],
        ],
      },
      {
        parts: [
          ["Maître Renard,", "Master Fox,"],
          ["par l'odeur alléché,", "tempted by the smell,"],
          ["lui tint à peu près", "said to him roughly"],
          ["ce langage.", "these words."],
        ],
      },
      {
        parts: [
          ["Hé !", "Ah!"],
          ["bonjour,", "good day,"],
          ["Monsieur du Corbeau.", "Mister Raven."],
        ],
      },
      {
        parts: [
          ["Que vous êtes joli !", "How handsome you are!"],
          ["que vous me semblez beau !", "how beautiful you seem to me!"],
        ],
      },
      {
        parts: [
          ["Sans mentir,", "Truly,"],
          ["si votre ramage", "if your song"],
          ["se rapporte à votre plumage...", "matches your feathers..."],
        ],
      },
      {
        parts: [
          ["Vous êtes le Phénix", "You are the Phoenix"],
          ["des hôtes", "among the dwellers"],
          ["de ces bois.", "of these woods."],
        ],
      },
    ],
  },
  laFontaineFable("La Cigale et la Fourmi", "A1", [
    {
      parts: [
        ["La Cigale,", "The cicada,"],
        ["ayant chanté", "having sung"],
        ["tout l'été,", "all summer,"],
      ],
    },
    {
      parts: [
        ["se trouva fort dépourvue", "found herself quite unprepared"],
        ["quand la bise", "when the cold wind"],
        ["fut venue.", "arrived."],
      ],
    },
    {
      parts: [
        ["Pas un seul petit morceau", "Not a single small piece"],
        ["de mouche", "of fly"],
        ["ou de vermisseau.", "or little worm."],
      ],
    },
  ]),
  laFontaineFable("La Grenouille et le Boeuf", "A1", [
    {
      parts: [
        ["Une Grenouille vit", "A frog saw"],
        ["un Boeuf", "an ox"],
        ["qui lui sembla", "that seemed to her"],
        ["de belle taille.", "a fine size."],
      ],
    },
    {
      parts: [
        ["Elle,", "She,"],
        ["qui n'était pas grosse", "who was no bigger"],
        ["en tout", "in all"],
        ["comme un oeuf,", "than an egg,"],
      ],
    },
    {
      parts: [
        ["envieuse,", "jealous,"],
        ["s'étend,", "stretched herself,"],
        ["s'enfle,", "swelled,"],
        ["et se travaille.", "and strained."],
      ],
    },
  ]),
  laFontaineFable("Le Loup et l'Agneau", "A2", [
    {
      parts: [
        ["Un Agneau", "A lamb"],
        ["se désaltérait", "was quenching his thirst"],
        ["dans le courant", "in the current"],
        ["d'une onde pure.", "of a clear stream."],
      ],
    },
    {
      parts: [
        ["Un Loup survient", "A wolf arrived"],
        ["à jeun,", "hungry,"],
        ["qui cherchait aventure,", "looking for adventure,"],
      ],
    },
    {
      parts: [
        ["et que la faim", "and hunger"],
        ["en ces lieux", "to that place"],
        ["attirait.", "drew him."],
      ],
    },
  ]),
  laFontaineFable("Le Rat de ville et le Rat des champs", "A2", [
    {
      parts: [
        ["Autrefois", "Long ago"],
        ["le Rat de ville", "the town rat"],
        ["invita", "invited"],
        ["le Rat des champs.", "the country rat."],
      ],
    },
    {
      parts: [
        ["D'une façon", "In a very"],
        ["fort civile,", "polite way,"],
        ["à des reliefs", "to leftovers"],
        ["d'ortolans.", "of rich food."],
      ],
    },
    {
      parts: [
        ["Sur un tapis", "On a carpet"],
        ["de Turquie", "from Turkey"],
        ["le couvert", "the table"],
        ["se trouva mis.", "was laid."],
      ],
    },
  ]),
  laFontaineFable("Le Lion et le Rat", "A1", [
    {
      parts: [
        ["Il faut,", "One must,"],
        ["autant qu'on peut,", "as much as possible,"],
        ["obliger", "help"],
        ["tout le monde.", "everyone."],
      ],
    },
    {
      parts: [
        ["On a souvent besoin", "We often need"],
        ["d'un plus petit", "someone smaller"],
        ["que soi.", "than ourselves."],
      ],
    },
    {
      parts: [
        ["Un Rat", "A rat"],
        ["sortit de terre", "came out of the ground"],
        ["entre les pattes", "between the paws"],
        ["d'un Lion.", "of a lion."],
      ],
    },
  ]),
  laFontaineFable("La Colombe et la Fourmi", "A1", [
    {
      parts: [
        ["Le long", "Along"],
        ["d'un clair ruisseau", "a clear stream"],
        ["buvait", "was drinking"],
        ["une Colombe.", "a dove."],
      ],
    },
    {
      parts: [
        ["Une Fourmi", "An ant"],
        ["y tombe,", "fell into it,"],
        ["et dans cet océan", "and in that ocean"],
        ["l'on eût vu", "one could have seen"],
      ],
    },
    {
      parts: [
        ["la Fourmi", "the ant"],
        ["s'efforcer,", "struggle,"],
        ["mais en vain,", "but in vain,"],
        ["de regagner la rive.", "to regain the bank."],
      ],
    },
  ]),
  laFontaineFable("Le Lièvre et la Tortue", "A1", [
    {
      parts: [
        ["Rien ne sert", "There is no use"],
        ["de courir;", "in running;"],
        ["il faut partir", "one must leave"],
        ["à point.", "on time."],
      ],
    },
    {
      parts: [
        ["Le Lièvre", "The hare"],
        ["et la Tortue", "and the tortoise"],
        ["en sont", "are"],
        ["un témoignage.", "proof of it."],
      ],
    },
    {
      parts: [
        ["Gageons,", "Let us wager,"],
        ["dit celle-ci,", "said the latter,"],
        ["que vous n'atteindrez point", "that you will not reach"],
        ["sitôt que moi ce but.", "this goal before me."],
      ],
    },
  ]),
  laFontaineFable("Le Chêne et le Roseau", "A2", [
    {
      parts: [
        ["Le Chêne", "The oak"],
        ["un jour", "one day"],
        ["dit au Roseau:", "said to the reed:"],
      ],
    },
    {
      parts: [
        ["Vous avez bien sujet", "You have good reason"],
        ["d'accuser la nature;", "to blame nature;"],
        ["un Roitelet", "a small bird"],
        ["pour vous", "for you"],
        ["est un pesant fardeau.", "is a heavy burden."],
      ],
    },
    {
      parts: [
        ["Le moindre vent", "The slightest wind"],
        ["qui d'aventure", "that by chance"],
        ["fait rider", "wrinkles"],
        ["la face de l'eau", "the face of the water"],
        ["vous oblige à baisser la tête.", "makes you bow your head."],
      ],
    },
  ]),
  laFontaineFable("Le Héron", "A2", [
    {
      parts: [
        ["Un jour,", "One day,"],
        ["sur ses longs pieds,", "on his long feet,"],
        ["allait", "was walking"],
        ["je ne sais où", "I know not where"],
        ["le Héron.", "the heron."],
      ],
    },
    {
      parts: [
        ["Le Héron", "The heron"],
        ["au long bec", "with the long beak"],
        ["emmanché", "set"],
        ["d'un long cou.", "on a long neck."],
      ],
    },
    {
      parts: [
        ["Il côtoyait", "He walked along"],
        ["une rivière.", "a river."],
        ["L'onde était transparente", "The water was clear"],
        ["ainsi qu'aux plus beaux jours.", "as on the finest days."],
      ],
    },
  ]),
  laFontaineFable("La Laitière et le Pot au lait", "A2", [
    {
      parts: [
        ["Perrette,", "Perrette,"],
        ["sur sa tête", "on her head"],
        ["ayant un Pot au lait", "carrying a pot of milk"],
      ],
    },
    {
      parts: [
        ["bien posé", "well placed"],
        ["sur un coussinet,", "on a small cushion,"],
        ["prétendait arriver", "intended to arrive"],
        ["sans encombre", "without trouble"],
        ["à la ville.", "in town."],
      ],
    },
    {
      parts: [
        ["Légère", "Light"],
        ["et court vêtue,", "and lightly dressed,"],
        ["elle allait", "she went"],
        ["à grands pas.", "with long strides."],
      ],
    },
  ]),
  laFontaineFable("Le Savetier et le Financier", "B1", [
    {
      parts: [
        ["Un Savetier", "A cobbler"],
        ["chantait", "sang"],
        ["du matin", "from morning"],
        ["jusqu'au soir.", "until evening."],
      ],
    },
    {
      parts: [
        ["C'était merveilles", "It was a wonder"],
        ["de le voir,", "to see him,"],
        ["merveilles", "a wonder"],
        ["de l'ouïr;", "to hear him;"],
      ],
    },
    {
      parts: [
        ["il faisait", "he made"],
        ["des passages,", "musical passages,"],
        ["plus content", "happier"],
        ["qu'aucun des sept sages.", "than any of the seven sages."],
      ],
    },
  ]),
  laFontaineFable("Les Animaux malades de la peste", "B1", [
    {
      parts: [
        ["Un mal", "An illness"],
        ["qui répand", "that spreads"],
        ["la terreur,", "terror,"],
      ],
    },
    {
      parts: [
        ["mal que le Ciel", "an illness that Heaven"],
        ["en sa fureur", "in its fury"],
        ["inventa", "invented"],
        ["pour punir", "to punish"],
        ["les crimes de la terre,", "the crimes of the earth,"],
      ],
    },
    {
      parts: [
        ["la Peste,", "the plague,"],
        ["puisqu'il faut", "since one must"],
        ["l'appeler par son nom,", "call it by its name,"],
        ["faisait aux animaux", "was making war"],
        ["la guerre.", "on the animals."],
      ],
    },
  ]),
  laFontaineFable("Le Laboureur et ses Enfants", "A2", [
    {
      parts: [
        ["Travaillez,", "Work,"],
        ["prenez de la peine:", "take pains:"],
        ["c'est le fonds", "it is the capital"],
        ["qui manque le moins.", "least likely to fail."],
      ],
    },
    {
      parts: [
        ["Un riche Laboureur,", "A rich farmer,"],
        ["sentant sa mort prochaine,", "feeling death draw near,"],
      ],
    },
    {
      parts: [
        ["fit venir", "called"],
        ["ses enfants,", "his children,"],
        ["leur parla", "spoke to them"],
        ["sans témoins.", "without witnesses."],
      ],
    },
  ]),
  laFontaineFable("Le Cochet, le Chat et le Souriceau", "A2", [
    {
      parts: [
        ["Un Souriceau", "A young mouse"],
        ["tout jeune,", "very young,"],
        ["et qui n'avait rien vu,", "who had seen nothing,"],
      ],
    },
    {
      parts: [
        ["fut presque pris", "was nearly caught"],
        ["au dépourvu.", "unawares."],
      ],
    },
    {
      parts: [
        ["Voici comme", "Here is how"],
        ["il conta l'aventure", "he told the adventure"],
        ["à sa mère.", "to his mother."],
      ],
    },
  ]),
  laFontaineFable("Le Renard et la Cigogne", "A2", [
    {
      parts: [
        ["Compère le Renard", "Master Fox"],
        ["se mit un jour", "one day"],
        ["en frais,", "went to expense,"],
      ],
    },
    {
      parts: [
        ["et retint", "and invited"],
        ["à dîner", "to dine"],
        ["commère la Cigogne.", "his friend the stork."],
      ],
    },
    {
      parts: [
        ["Le régal fut petit", "The meal was small"],
        ["et sans beaucoup", "and without much"],
        ["d'apprêts.", "preparation."],
      ],
    },
  ]),
  laFontaineFable("Le Meunier, son Fils et l'Ane", "B1", [
    {
      parts: [
        ["L'invention des arts", "The invention of arts"],
        ["étant un droit d'aînesse,", "being a birthright,"],
      ],
    },
    {
      parts: [
        ["nous devons", "we owe"],
        ["l'apologue", "the fable"],
        ["à l'ancienne Grèce.", "to ancient Greece."],
      ],
    },
    {
      parts: [
        ["Mais ce champ", "But this field"],
        ["ne se peut tellement moissonner", "cannot be so fully harvested"],
        ["que les derniers venus", "that latecomers"],
        ["n'y trouvent à glaner.", "find nothing to glean."],
      ],
    },
  ]),
  laFontaineFable("Le Lion amoureux", "A2", [
    {
      parts: [
        ["Sévit-on jamais", "Was there ever seen"],
        ["rien de si ridicule", "anything so ridiculous"],
        ["que d'aimer", "as loving"],
        ["un Lion?", "a lion?"],
      ],
    },
    {
      parts: [
        ["Le Lion", "The lion"],
        ["d'une fille", "for a young woman"],
        ["devint amoureux.", "fell in love."],
      ],
    },
    {
      parts: [
        ["Il la demanda", "He asked for her"],
        ["en mariage.", "in marriage."],
      ],
    },
  ]),
  laFontaineFable("Le Coq et le Renard", "A2", [
    {
      parts: [
        ["Sur la branche", "On the branch"],
        ["d'un arbre", "of a tree"],
        ["était en sentinelle", "stood on watch"],
        ["un vieux Coq adroit", "a clever old rooster"],
        ["et matois.", "and sly."],
      ],
    },
    {
      parts: [
        ["Frère,", "Brother,"],
        ["dit un Renard,", "said a fox,"],
        ["adoucissant sa voix,", "softening his voice,"],
      ],
    },
    {
      parts: [
        ["nous ne sommes plus", "we are no longer"],
        ["en querelle:", "at odds:"],
        ["paix générale", "general peace"],
        ["cette fois.", "this time."],
      ],
    },
  ]),
  laFontaineFable("Le Renard et les Raisins", "A1", [
    {
      parts: [
        ["Certain Renard gascon,", "A certain Gascon fox,"],
        ["d'autres disent normand,", "others say Norman,"],
      ],
    },
    {
      parts: [
        ["mourant presque de faim,", "almost dying of hunger,"],
        ["vit au haut", "saw high up"],
        ["d'une treille", "on a vine"],
      ],
    },
    {
      parts: [
        ["des Raisins mûrs", "ripe grapes"],
        ["apparemment,", "apparently,"],
        ["et couverts", "and covered"],
        ["d'une peau vermeille.", "with a rosy skin."],
      ],
    },
  ]),
  laFontaineFable("Le Gland et la Citrouille", "A2", [
    {
      parts: [
        ["Dieu fait bien", "God does well"],
        ["ce qu'il fait.", "what he does."],
        ["Sans en chercher", "Without seeking"],
        ["la preuve", "the proof"],
        ["en tout cet univers,", "in all this universe,"],
      ],
    },
    {
      parts: [
        ["je la trouverais", "I would find it"],
        ["étrange", "strange"],
        ["dans une Citrouille.", "in a pumpkin."],
      ],
    },
    {
      parts: [
        ["Un villageois", "A villager"],
        ["considérant", "considering"],
        ["combien ce fruit", "how that fruit"],
        ["est gros", "is large"],
        ["et sa tige menue,", "and its stem slender,"],
      ],
    },
  ]),
  {
    title: "Une promenade à Paris",
    type: "Essay",
    level: "A2",
    source: "Original practice passage inspired by public-domain travel prose.",
    sentences: [
      {
        parts: [
          ["Ce matin,", "This morning,"],
          ["je marche lentement", "I walk slowly"],
          ["le long de la Seine.", "along the Seine."],
        ],
      },
      {
        parts: [
          ["Les bouquinistes", "The booksellers"],
          ["ouvrent leurs boîtes vertes", "open their green boxes"],
          ["sous un ciel clair.", "under a clear sky."],
        ],
      },
      {
        parts: [
          ["Un café chaud", "A hot coffee"],
          ["m'attend", "waits for me"],
          ["près du pont.", "near the bridge."],
        ],
      },
      {
        parts: [
          ["Je répète les mots", "I repeat the words"],
          ["à voix basse,", "in a low voice,"],
          ["puis je continue.", "then I continue."],
        ],
      },
    ],
  },
  {
    title: "Lettre d'un voyageur",
    type: "Article",
    level: "B1",
    source: "Original practice passage for intermediate reading and shadowing.",
    sentences: [
      {
        parts: [
          ["Chère amie,", "Dear friend,"],
          ["j'écris cette lettre", "I am writing this letter"],
          ["depuis une petite gare.", "from a small station."],
        ],
      },
      {
        parts: [
          ["Le train est en retard,", "The train is late,"],
          ["mais personne", "but no one"],
          ["ne semble pressé.", "seems hurried."],
        ],
      },
      {
        parts: [
          ["J'écoute les annonces", "I listen to the announcements"],
          ["et je regarde", "and I watch"],
          ["les voyageurs passer.", "the travelers pass by."],
        ],
      },
      {
        parts: [
          ["Chaque ville", "Each city"],
          ["m'apprend un accent", "teaches me an accent"],
          ["et une patience nouvelle.", "and a new patience."],
        ],
      },
    ],
  },
];

const savedProgress = readSavedProgress();
const state = {
  articleIndex: savedProgress.articleIndex,
  phraseIndex: savedProgress.phraseIndex,
  speechRun: 0,
  isPlaying: false,
  speechRate: savedProgress.speechRate,
};

let phraseList = buildPhraseList(currentArticle());

const lessonLevel = document.querySelector("#lessonLevel");
const lessonTitle = document.querySelector("#lessonTitle");
const lessonSource = document.querySelector("#lessonSource");
const frenchText = document.querySelector("#frenchText");
const progressCount = document.querySelector("#progressCount");
const progressRing = document.querySelector(".progress-ring");
const statusText = document.querySelector("#statusText");
const meterFill = document.querySelector("#meterFill");
const playButton = document.querySelector("#playButton");
const repeatButton = document.querySelector("#repeatButton");
const restartButton = document.querySelector("#restartButton");
const speedOptions = document.querySelectorAll(".speed-option");
const pauseSlider = document.querySelector("#pauseSlider");
const pauseValue = document.querySelector("#pauseValue");
const themeToggle = document.querySelector("#themeToggle");
const nextArticleContainer = document.querySelector("#nextArticle");

function currentArticle() {
  return articles[state.articleIndex];
}

function nextArticle() {
  return articles[(state.articleIndex + 1) % articles.length];
}

function readSavedProgress() {
  const fallback = { articleIndex: 0, phraseIndex: 0, speechRate: 0.8, pauseSeconds: 3.25 };
  try {
    if (!window.localStorage) return fallback;
    const saved = JSON.parse(window.localStorage.getItem("french-shadow-progress") || "{}");
    return {
      articleIndex: Number.isInteger(saved.articleIndex) ? Math.min(saved.articleIndex, articles.length - 1) : fallback.articleIndex,
      phraseIndex: Number.isInteger(saved.phraseIndex) ? Math.max(saved.phraseIndex, 0) : fallback.phraseIndex,
      speechRate: Number(saved.speechRate) || fallback.speechRate,
      pauseSeconds: Number(saved.pauseSeconds) || fallback.pauseSeconds,
    };
  } catch {
    return fallback;
  }
}

function saveProgress() {
  if (!window.localStorage) return;
  window.localStorage.setItem(
    "french-shadow-progress",
    JSON.stringify({
      articleIndex: state.articleIndex,
      phraseIndex: state.phraseIndex,
      speechRate: state.speechRate,
      pauseSeconds: Number(pauseSlider.value),
    }),
  );
}

function buildPhraseList(article) {
  return article.sentences.flatMap((sentence, sentenceIndex) =>
    sentence.parts.map(([fr, en], partIndex) => ({ fr, en, sentenceIndex, partIndex })),
  );
}

function renderLessonMeta() {
  const article = currentArticle();
  lessonLevel.textContent = `${article.level} · ${article.type}`;
  lessonTitle.textContent = article.title;
  lessonSource.textContent = article.source;
}

function renderPassage() {
  const article = currentArticle();
  frenchText.innerHTML = article.sentences
    .map(
      (sentence, sentenceIndex) => `
        <p class="passage-line">
          ${sentence.parts
            .map(([fr, en], partIndex) => {
              const phraseIndex = phraseList.findIndex(
                (phrase) => phrase.sentenceIndex === sentenceIndex && phrase.partIndex === partIndex,
              );
              return `
                <span class="phrase" data-phrase="${phraseIndex}">
                  <span class="phrase-text">${fr}</span>
                  <span class="phrase-gloss">${en}</span>
                </span>
              `;
            })
            .join(" ")}
        </p>
      `,
    )
    .join("");
  updateProgress();
  highlightPhrase(state.phraseIndex, "repeat");
}

function renderNextArticle() {
  const article = nextArticle();
  const phraseCount = buildPhraseList(article).length;
  nextArticleContainer.innerHTML = `
    <button class="library-item next-article-button" id="nextArticleButton" type="button">
      <div>
        <h3>${article.title}</h3>
        <p>${article.type} · ${phraseCount} phrases</p>
      </div>
      <span class="tag">${article.level}</span>
    </button>
  `;
  document.querySelector("#nextArticleButton").addEventListener("click", loadNextArticle);
}

function renderPlayButton() {
  playButton.classList.toggle("active", state.isPlaying);
  playButton.innerHTML = state.isPlaying
    ? '<span aria-hidden="true">||</span> Pause'
    : '<span aria-hidden="true">▶</span> Listen';
}

function updatePauseLabel() {
  pauseValue.textContent = `${Number(pauseSlider.value).toFixed(2)}s`;
  saveProgress();
}

function updateProgress() {
  state.phraseIndex = Math.min(state.phraseIndex, phraseList.length - 1);
  const current = state.phraseIndex + 1;
  const total = phraseList.length;
  const percent = (current / total) * 100;
  progressCount.textContent = `${current}/${total}`;
  progressRing.style.setProperty("--progress", `${percent}%`);
  meterFill.style.width = `${Math.max(8, percent)}%`;
  saveProgress();
}

function highlightPhrase(index, mode = "speaking") {
  document.querySelectorAll(".phrase").forEach((phrase) => {
    const selected = Number(phrase.dataset.phrase) === index;
    phrase.classList.toggle("speaking", selected && mode === "speaking");
    phrase.classList.toggle("repeat-target", selected && mode === "repeat");
  });
}

function speakPart(text) {
  return new Promise((resolve) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR";
    utterance.rate = state.speechRate;
    utterance.pitch = 1;
    utterance.onend = resolve;
    utterance.onerror = resolve;
    window.speechSynthesis.speak(utterance);
  });
}

function pause(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function speakCurrentPhrase() {
  const run = state.speechRun + 1;
  state.speechRun = run;
  state.isPlaying = false;
  window.speechSynthesis.cancel();
  renderPlayButton();
  highlightPhrase(state.phraseIndex, "speaking");
  statusText.textContent = `Listen: phrase ${state.phraseIndex + 1} of ${phraseList.length}.`;
  await speakPart(phraseList[state.phraseIndex].fr);
  if (state.speechRun !== run) return;
  highlightPhrase(state.phraseIndex, "repeat");
  statusText.textContent = "Repeat the highlighted phrase.";
}

async function speakFrench() {
  if (state.isPlaying) {
    pausePlayback();
    return;
  }

  const run = state.speechRun + 1;
  state.speechRun = run;
  state.isPlaying = true;
  window.speechSynthesis.cancel();
  renderPlayButton();

  for (let index = state.phraseIndex; index < phraseList.length; index += 1) {
    if (state.speechRun !== run) return;
    state.phraseIndex = index;
    updateProgress();
    highlightPhrase(index, "speaking");
    statusText.textContent = `Listen: phrase ${index + 1} of ${phraseList.length}.`;
    await speakPart(phraseList[index].fr);

    if (state.speechRun !== run) return;
    highlightPhrase(index, "repeat");
    statusText.textContent = "Repeat the highlighted phrase.";
    await pause(Number(pauseSlider.value) * 1000);
  }

  if (state.speechRun === run) {
    state.isPlaying = false;
    renderPlayButton();
    statusText.textContent = "Passage complete. Start again or choose a phrase.";
  }
}

function pausePlayback() {
  state.speechRun += 1;
  state.isPlaying = false;
  window.speechSynthesis.cancel();
  renderPlayButton();
  highlightPhrase(state.phraseIndex, "repeat");
  statusText.textContent = "Paused. Repeat the highlighted phrase or continue listening.";
}

function goToPhrase(nextIndex) {
  state.speechRun += 1;
  state.isPlaying = false;
  window.speechSynthesis.cancel();
  state.phraseIndex = Math.min(Math.max(nextIndex, 0), phraseList.length - 1);
  updateProgress();
  highlightPhrase(state.phraseIndex, "repeat");
  renderPlayButton();
  statusText.textContent = "Repeat the highlighted phrase.";
}

function jumpToPhrase(nextIndex, shouldContinue = false) {
  goToPhrase(nextIndex);
  if (shouldContinue) {
    speakFrench();
  }
}

function restartArticle() {
  goToPhrase(0);
  statusText.textContent = "Restarted at the first phrase.";
}

function loadNextArticle() {
  state.speechRun += 1;
  state.isPlaying = false;
  window.speechSynthesis.cancel();
  state.articleIndex = (state.articleIndex + 1) % articles.length;
  state.phraseIndex = 0;
  phraseList = buildPhraseList(currentArticle());
  renderPlayButton();
  renderLessonMeta();
  renderPassage();
  renderNextArticle();
  statusText.textContent = "New article loaded. Start with the highlighted phrase.";
  saveProgress();
}

playButton.addEventListener("click", speakFrench);
frenchText.addEventListener("click", (event) => {
  const phrase = event.target.closest(".phrase");
  if (!phrase) return;
  jumpToPhrase(Number(phrase.dataset.phrase), state.isPlaying);
});
repeatButton.addEventListener("click", speakCurrentPhrase);
restartButton.addEventListener("click", restartArticle);
pauseSlider.addEventListener("input", updatePauseLabel);
speedOptions.forEach((option) => {
  option.addEventListener("click", () => {
    state.speechRate = Number(option.dataset.rate);
    speedOptions.forEach((button) => button.classList.toggle("active", button === option));
    statusText.textContent = `Speech speed set to ${option.textContent}.`;
    saveProgress();
  });
});
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

pauseSlider.value = savedProgress.pauseSeconds;
speedOptions.forEach((button) => {
  button.classList.toggle("active", Number(button.dataset.rate) === state.speechRate);
});
updatePauseLabel();
renderPlayButton();
renderLessonMeta();
renderPassage();
renderNextArticle();

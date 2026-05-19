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
const backButton = document.querySelector("#backButton");
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
  backButton.disabled = state.phraseIndex === 0;
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
backButton.addEventListener("click", () => goToPhrase(state.phraseIndex - 1));
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

const notesAudioIdArray = [
  {
    keyEventHandler: "q",
    noteName: "noteC",
    audioRoute: "./assets/sounds/C.mp3",
  },
  {
    keyEventHandler: "w",
    noteName: "noteD",
    audioRoute: "./assets/sounds/D.mp3",
  },
  {
    keyEventHandler: "e",
    noteName: "noteE",
    audioRoute: "./assets/sounds/E.mp3",
  },
  {
    keyEventHandler: "r",
    noteName: "noteF",
    audioRoute: "./assets/sounds/F.mp3",
  },
  {
    keyEventHandler: "t",
    noteName: "noteG",
    audioRoute: "./assets/sounds/G.mp3",
  },
  {
    keyEventHandler: "y",
    noteName: "noteA",
    audioRoute: "./assets/sounds/A.mp3",
  },
  {
    keyEventHandler: "u",
    noteName: "noteB",
    audioRoute: "./assets/sounds/B.mp3",
  },
  {
    keyEventHandler: "i",
    noteName: "noteC1",
    audioRoute: "./assets/sounds/C1.mp3",
  },
  {
    keyEventHandler: "o",
    noteName: "noteD1",
    audioRoute: "./assets/sounds/D1.mp3",
  },
  {
    keyEventHandler: "p",
    noteName: "noteE1",
    audioRoute: "./assets/sounds/E1.mp3",
  },
];

const instruments = [
  { instrument: "MARIMBA", instrumentImage: "./assets/img/Marimba.svg" },
  { instrument: "PIANO", instrumentImage: "./assets/img/Piano.svg" },
  { instrument: "BATERÍA", instrumentImage: "./assets/img/Drum.svg" },
];

function playNote(index) {
  let noteAudio = document.getElementById(notesAudioIdArray[index].noteName);
  noteAudio.currentTime = 0;

  noteAudio.play();
}

//#region Event Listeners Functions
function createEventListeners(instrument, index) {
  let key = document.getElementById(instrument.id);

  key.addEventListener("click", () => {
    playNote(index);
  });

  createKeyEventListeners(instrument, index);
}

function createKeyEventListeners(key, index) {
  document.addEventListener("keydown", (e) => {
    if (e.key === notesAudioIdArray[index].keyEventHandler) {
      playNote(index);
      key.classList.add("trigger-animation");

      setTimeout(() => {
        key.classList.remove("trigger-animation");
      }, 200);
    }
  });
}
//#endregion

//#region Creation of Elements Functions
function createAudioKey(note) {
  let generatedAudioKey = document.createElement("audio");

  generatedAudioKey.src = note.audioRoute;
  generatedAudioKey.id = note.noteName;

  return generatedAudioKey;
}

function createKey(index) {
  let generatedMarimbaKey = document.createElement("div");

  generatedMarimbaKey.classList.add("key");
  generatedMarimbaKey.id = `k${index + 1}`;

  let generatedTopScrew = document.createElement("div");
  let generatedBottomScrew = document.createElement("div");
  let keyboardKey = document.createElement("p");

  keyboardKey.textContent =
    notesAudioIdArray[index].keyEventHandler.toUpperCase();

  generatedTopScrew.classList.add("top-screw");
  generatedBottomScrew.classList.add("bottom-screw");

  generatedMarimbaKey.appendChild(generatedTopScrew);
  generatedMarimbaKey.appendChild(generatedBottomScrew);

  generatedTopScrew.appendChild(keyboardKey);

  return generatedMarimbaKey;
}

function createTitleSection(title) {
  let titleContainer = document.createElement("div");
  titleContainer.classList.add("section-title");

  let leftImageEffect = document.createElement("img");
  leftImageEffect.src = "./assets/img/LeftLightEffect.svg";

  let titleElement = document.createElement("h2");
  titleElement.textContent = title;

  let rightImageEffect = document.createElement("img");
  rightImageEffect.src = "./assets/img/RightLightEffect.svg";

  titleContainer.appendChild(leftImageEffect);
  titleContainer.appendChild(titleElement);
  titleContainer.appendChild(rightImageEffect);

  return titleContainer;
}

function createInstrumentElement(givenInstrument) {
  let instrumentElement = document.createElement("div");
  instrumentElement.classList.add("instrument");

  let imageContainer = document.createElement("div");
  imageContainer.classList.add("img-container");

  let instrumentImage = document.createElement("img");
  instrumentImage.src = givenInstrument.instrumentImage;
  instrumentImage.classList.add("instrument-image");

  imageContainer.appendChild(instrumentImage);

  let instrumentName = document.createElement("p");
  instrumentName.textContent = givenInstrument.instrument;

  instrumentElement.appendChild(imageContainer);
  instrumentElement.appendChild(instrumentName);

  return instrumentElement;
}

function generateInstrumentsSection() {
  const fatherElement = document.getElementById("instrument-selection-section");

  const sectionTitle = createTitleSection("INSTRUMENTOS");

  // let sectionTitle = document.createElement("h2");
  // sectionTitle.textContent = "INSTRUMENTOS";

  let instrumentContainer = document.createElement("div");
  instrumentContainer.id = "instrument-container";

  fatherElement.appendChild(sectionTitle);

  instruments.map((instrument) => {
    let instrumentResult = createInstrumentElement(instrument);
    instrumentContainer.appendChild(instrumentResult);
  });
  fatherElement.appendChild(instrumentContainer);
}

//#endregion

function generateAudioElements() {
  const fatherElement = document.getElementById("marimba-section");

  let marimbaContainer = document.createElement("div");
  marimbaContainer.id = "marimba-instrument";

  const sectionTitle = createTitleSection("MARIMBA");

  // let sectionTitle = document.createElement("h2");
  // sectionTitle.textContent = instruments[0].instrument;

  fatherElement.appendChild(sectionTitle);
  fatherElement.appendChild(marimbaContainer);

  notesAudioIdArray.map((note, index) => {
    let marimbaKey = createKey(index);
    let audioKey = createAudioKey(note);

    marimbaContainer.appendChild(marimbaKey);
    marimbaContainer.appendChild(audioKey);

    createEventListeners(marimbaKey, index);
  });
}

generateAudioElements();
generateInstrumentsSection();

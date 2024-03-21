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
  { instrument: "BATERÍA", instrumentImage: "./assets/img/Drum.svg" },
  { instrument: "PIANO", instrumentImage: "./assets/img/Piano.svg" },
];

function playNote(index) {
  let noteAudio = document.getElementById(notesAudioIdArray[index].noteName);
  noteAudio.currentTime = 0;

  noteAudio.play();
}

//#region Event Listeners Functions
function createEventListeners(id, index) {
  let key = document.getElementById(id);

  key.addEventListener("click", () => {
    playNote(index);
  });

  createKeyEventListeners(index);
}

function createKeyEventListeners(index) {
  document.addEventListener("keydown", (e) => {
    if (e.key === notesAudioIdArray[index].keyEventHandler) playNote(index);
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
  const fatherElement = document.getElementById("instruments-section");

  let sectionTitle = document.createElement("h2");
  sectionTitle.textContent = "INSTRUMENTOS";

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
  const marimbaSection = document.getElementById("marimba-instrument");

  notesAudioIdArray.map((note, index) => {
    let marimbaKey = createKey(index);
    let audioKey = createAudioKey(note);

    marimbaSection.appendChild(marimbaKey);
    marimbaSection.appendChild(audioKey);

    createEventListeners(marimbaKey.id, index);
  });
}

generateAudioElements();
generateInstrumentsSection();

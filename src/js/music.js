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

function playNote(index) {
  let noteAudio = document.getElementById(notesAudioIdArray[index].noteName);
  noteAudio.currentTime = 0;

  noteAudio.play();
}

function createEventListeners(id, index) {
  let key = document.getElementById(id);

  key.addEventListener("click", () => {
    playNote(index);
  });

  createKeyEventListeners(index)
}

function createKeyEventListeners(index) {
  document.addEventListener("keydown", (e) => {
    if (e.key === notesAudioIdArray[index].keyEventHandler) playNote(index);
  });
}

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

  generatedTopScrew.classList.add("top-screw");
  generatedBottomScrew.classList.add("bottom-screw");

  generatedMarimbaKey.appendChild(generatedTopScrew);
  generatedMarimbaKey.appendChild(generatedBottomScrew);

  return generatedMarimbaKey;
}

function generateAudioElements() {
  const marimbaSection = document.getElementById("marimba-instrument");

  notesAudioIdArray.map((note, index) => {
    // console.log(`note: ${note.noteName}`);
    // console.log(`route: ${note.audioRoute}`);

    let marimbaKey = createKey(index);
    let audioKey = createAudioKey(note);

    marimbaSection.appendChild(marimbaKey);
    marimbaSection.appendChild(audioKey);

    createEventListeners(marimbaKey.id, index);
  });
}

generateAudioElements();

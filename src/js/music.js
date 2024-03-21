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

//#region Event Listeners Functions
function createEventListeners(instrument, index) {
  let key = document.getElementById(instrument.id);

  key.addEventListener("click", () => {
    playNote(index);
  });

  createKeyEventListeners(instrument,index);
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

  keyboardKey.textContent = notesAudioIdArray[index].keyEventHandler.toUpperCase();

  generatedTopScrew.classList.add("top-screw");
  generatedBottomScrew.classList.add("bottom-screw");

  generatedMarimbaKey.appendChild(generatedTopScrew);
  generatedMarimbaKey.appendChild(generatedBottomScrew);
  
  generatedTopScrew.appendChild(keyboardKey);

  return generatedMarimbaKey;
}

//#endregion

function generateAudioElements() {
  const marimbaSection = document.getElementById("marimba-instrument");

  notesAudioIdArray.map((note, index) => {
    let marimbaKey = createKey(index);
    let audioKey = createAudioKey(note);

    marimbaSection.appendChild(marimbaKey);
    marimbaSection.appendChild(audioKey);

    createEventListeners(marimbaKey, index);
  });
}

generateAudioElements();

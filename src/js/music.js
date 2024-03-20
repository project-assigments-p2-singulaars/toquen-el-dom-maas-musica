const notesAudioIdArray = [
  { noteName: "noteC", audioRoute: "./assets/sounds/C.mp3" },
  { noteName: "noteD", audioRoute: "./assets/sounds/D.mp3" },
  { noteName: "noteE", audioRoute: "./assets/sounds/E.mp3" },
  { noteName: "noteF", audioRoute: "./assets/sounds/F.mp3" },
  { noteName: "noteG", audioRoute: "./assets/sounds/G.mp3" },
  { noteName: "noteA", audioRoute: "./assets/sounds/A.mp3" },
  { noteName: "noteB", audioRoute: "./assets/sounds/B.mp3" },
  { noteName: "noteC1", audioRoute: "./assets/sounds/C1.mp3" },
  { noteName: "noteD1", audioRoute: "./assets/sounds/D1.mp3" },
  { noteName: "noteE1", audioRoute: "./assets/sounds/E1.mp3" },
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

  return generatedMarimbaKey;
}

function generateAudioElements() {
  const marimbaSection = document.getElementById("marimba-instrument");

  notesAudioIdArray.map((note, index) => {
    console.log(`note: ${note.noteName}`);
    console.log(`route: ${note.audioRoute}`);

    let marimbaKey = createKey(index);
    let audioKey = createAudioKey(note);

    marimbaSection.appendChild(marimbaKey);
    marimbaSection.appendChild(audioKey);

    createEventListeners(marimbaKey.id, index);
  });
}

generateAudioElements();

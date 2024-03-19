const notesAudioIdArray = ["cNote", "dNote", "eNote"]

let testingC = document.getElementById("testingC");
let testingD = document.getElementById("testingD");
let testingE = document.getElementById("testingE");

function playNote(index) {
    let noteAudio = document.getElementById(notesAudioIdArray[index]);
    console.log(noteAudio)
    noteAudio.play();
}

function generateAudioElements() {
    
}

testingC.addEventListener("click", () => {
    playNote(0);
    console.log("CLICK!")
})

testingD.addEventListener("click", () => {
    playNote(1);
    console.log("CLICK!")
})

testingE.addEventListener("click", () => {
    playNote(2);
    console.log("CLICK!")
})

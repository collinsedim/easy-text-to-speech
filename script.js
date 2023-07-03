let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelection = document.querySelector("#voice-select");
let textToConvert = document.querySelector("#text-to-convert");

window.speechSynthesis.getVoices();

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.map((v, i) => (voiceSelection.options[i] = new Option(v.name, i)));
};

voiceSelection.addEventListener("change", () => {
  speech.voice = voices[voiceSelection.selectedIndex];
});

if ("speechSynthesis" in window) {
  document.querySelector("#btn-convert").addEventListener("click", () => {
    speech.text = textToConvert.value;
    window.speechSynthesis.speak(speech);
  });
} else {
  alert("Your browser is not supported!");
}

let fileToConvert = document.querySelector("#file-to-convert");

fileToConvert.addEventListener("change", function () {
  let reader = new FileReader();
  reader.onload = () => {
    console.log(reader.result);

    // speak content of text
    if ("speechSynthesis" in window) {
      document.querySelector("#btn-convert").addEventListener("click", () => {
        speech.text = reader.result;
        window.speechSynthesis.speak(speech);
      });
    } else {
      alert("Your browser is not supported!");
    }
    // end speak content of text
  };
  reader.readAsText(this.files[0]);
});

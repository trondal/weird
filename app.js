var synth = window.speechSynthesis;
var voices = synth.getVoices();
var utterThis = new SpeechSynthesisUtterance('It is a loverly day tomorrow');
utterThis.voice = voices[0];

synth.speak(utterThis);
var firstBtn = document.querySelector('#first');
var secondBtn = document.querySelector('#second');
var thirdBtn = document.querySelector('#third');
var fourthBtn = document.querySelector('#fourth');
var fifthBtn = document.querySelector('#fifth');
var sixthBtn = document.querySelector('#sixth');

function playSound(url) {
    Audio(url).play();
}
firstBtn.onclick = playSound('sounds/Basic_Rock_Crash_135.mp3');
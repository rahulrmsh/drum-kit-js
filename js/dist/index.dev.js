"use strict";

for (var i = 0; i < document.querySelectorAll(".btn-danger").length; i++) {
  document.querySelectorAll(".btn-danger")[i].addEventListener("click", function () {
    var soundName = this.textContent;

    switch (soundName) {
      case 'Basic Rock Crash':
        audioPlayer('sounds/Basic_Rock_Crash_135.mp3');
        break;

      case 'Big Thwack':
        audioPlayer('sounds/Big_Thwack_120.mp3');
        break;

      case 'Boom Chuk':
        audioPlayer('sounds/Boom_Chuk_130.mp3');
        break;

      case 'Cymbal Groove':
        audioPlayer('sounds/Cymbal_Groove.mp3');
        break;

      case 'Driving Force':
        audioPlayer('sounds/Driving_Force_120.mp3');
        break;

      case 'Pounder':
        audioPlayer('sounds/Pounder_130.mp3');
        break;

      case 'RatAtat':
        audioPlayer('sounds/RatAtat_155.mp3');
        break;

      case 'First Beat':
        audioPlayer('sounds/first_beat.mp3');
        break;

      case 'Tamba':
        audioPlayer('sounds/Tamba_112.mp3');
        break;

      case 'Fill Crash':
        audioPlayer('sounds/Basic_Rock_FillintoCra#19A6.mp3');
        break;

      case 'Boom Chuk':
        audioPlayer('sounds/Boom_Chuk_130.mp3');
        break;

      case 'Basic Fill':
        audioPlayer('sounds/Basic_Rock_FillintoCrash_135.mp3');
        break;

      default:
        break;
    }
  });
}

function audioPlayer(url) {
  var audio = new Audio(url);
  audio.play();
}
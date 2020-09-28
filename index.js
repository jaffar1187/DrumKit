var numberofDrumButtons = document.querySelectorAll('.drum').length;
var currentKey = "";

for (var i = 0; i < numberofDrumButtons; i++) {

  document.querySelectorAll('.drum')[i].addEventListener('click', function() {
    var buttonInnerHTML = this.innerHTML;
    currentKey = buttonInnerHTML;
    switch (buttonInnerHTML) {
      case 'w':
        var audio = new Audio('sounds/tom-1.mp3')
        animation(currentKey);
        audio.play();
        break;

      case 'a':
        var audio = new Audio('sounds/tom-2.mp3')
        animation(currentKey);
        audio.play();
        break;

      case 's':
        var audio = new Audio('sounds/tom-3.mp3')
        animation(currentKey);
        audio.play();
        break;

      case 'd':
        var audio = new Audio('sounds/tom-4.mp3')
        animation(currentKey);
        audio.play();
        break;

      case 'j':
        var audio = new Audio('sounds/snare.mp3')
        animation(currentKey);
        audio.play();
        break;

      case 'k':
        var audio = new Audio('sounds/crash.mp3')
        animation(currentKey);
        audio.play();
        break;


      case 'l':
        var audio = new Audio('sounds/kick-bass.mp3')
        animation(currentKey);
        audio.play();
        break;
    }
  });
}

//KeyBoard


  document.addEventListener('keydown', function(event) {
    var buttonInnerHTML = event.key;
    currentKey = buttonInnerHTML;
    switch (buttonInnerHTML) {
      case 'w':
        var audio = new Audio('sounds/tom-1.mp3')
        animation(currentKey);
        audio.play();
        break;

      case 'a':
        var audio = new Audio('sounds/tom-2.mp3')
        animation(currentKey);
        audio.play();
        break;

      case 's':
        var audio = new Audio('sounds/tom-3.mp3')
        animation(currentKey);
        audio.play();
        break;

      case 'd':
        var audio = new Audio('sounds/tom-4.mp3')
        animation(currentKey);
        audio.play();
        break;

      case 'j':
        var audio = new Audio('sounds/snare.mp3')
        animation(currentKey);
        audio.play();
        break;

      case 'k':
        var audio = new Audio('sounds/crash.mp3')
        animation(currentKey);
        audio.play();
        break;


      case 'l':
        var audio = new Audio('sounds/kick-bass.mp3')
        animation(currentKey);
        audio.play();
        break;
    }
  });

function animation(currentKey){
    document.getElementsByClassName(currentKey)[0].classList.add('pressed');
    setTimeout(function(){
        document.getElementsByClassName(currentKey)[0].classList.remove('pressed');
    },100)
  }

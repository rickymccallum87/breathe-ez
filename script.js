var breathBar = document.querySelector('.breath-bar');
breathBar.classList.add('breathe-in');

var transitionComplete = getTransitionEndEventName();
breathBar.addEventListener(transitionComplete, function () {
  breathBar.classList.toggle('breathe-in');
  breathBar.classList.toggle('breathe-out');
});

function getTransitionEndEventName() {
  var transitions = {
    "transition": "transitionend",
    "OTransition": "oTransitionEnd",
    "MozTransition": "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }
  let bodyStyle = document.body.style;
  for (let transition in transitions) {
    if (bodyStyle[transition] != undefined) {
      return transitions[transition];
    }
  }
}

var breath = document.querySelector('.breath');
var settingsModal = document.querySelector('.settings-modal');
var inInput = document.getElementById('in');
breath.addEventListener('click', function () {
  settingsModal.classList.toggle('d-none');
  inInput.focus();
});

var close = document.querySelector('.close');
close.addEventListener('click', function () {
  settingsModal.classList.toggle('d-none');
});
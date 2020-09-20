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

$('.settings').on('submit', (event) => {
  event.preventDefault();
  console.log(event);
});
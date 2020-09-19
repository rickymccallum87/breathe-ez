var breathBar = document.querySelector('.breath-bar');
breathBar.classList.add('breathe-in');

let transitionEndEventName = getTransitionEndEventName();
breathBar.addEventListener(transitionEndEventName, function () {
  breathBar.classList.toggle('breathe-in');
  breathBar.classList.toggle('breathe-out');
})

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
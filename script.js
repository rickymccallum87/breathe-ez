var transitionComplete = getTransitionEndEventName();
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

// When DOM is ready
$(function () {
  $('.breath-bar')
    // Start by breathing in
    .addClass('breathe-in')
    // Loop breathing
    .on(transitionComplete, function () {
      $('.breath-bar').toggleClass('breathe-in breathe-out');
    });

  // When settings form is submitted
  $('.settings').on('submit', function (event) {
    // Prevent page reload
    event.preventDefault();
    // Hide modal
    $('#settingsModal').modal('hide');
  });
});
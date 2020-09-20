// When DOM is ready
$(function () {
  var breathBar = $('.breath-bar');
  var lungsFull = { height: '100%' };
  var lungsEmpty = { height: '0%' };
  var settings = {};
  var defaultSettings = {
    secondsIn: 4,
    secondsOut: 6,
  };

  $('.settings input').each(function (event) {
    var inputID = $(this).get(0).id;
    var value = $(this).val();
    settings[inputID] = value ? Number(value) : defaultSettings[inputID];
  });

  // Start by breathing in
  breathBar.animate(lungsFull, settings.secondsIn * 1000, breathe);

  function breathe() {
    if (breathBar.height() == 0) {
      // Breathe in
      breathBar.animate(lungsFull, settings.secondsIn * 1000, breathe);
    } else {
      // Breathe out
      breathBar.animate(lungsEmpty, settings.secondsOut * 1000, breathe);
    }
  }

  // When settings modal appears
  $('#settingsModal').on('shown.bs.modal', function () {
    // Focus first input
    $('.settings input').first().select();
  })

  // When a setting value is changed
  $('.settings input').change(function (event) {
    var inputID = $(this).get(0).id;
    var value = $(this).val();
    settings[inputID] = value ? Number(value) : defaultSettings[inputID];
  });

  // When settings form is submitted
  $('.settings').submit(function (event) {
    // Prevent page reload
    event.preventDefault();
    // Hide modal
    $('#settingsModal').modal('hide');
  });
});
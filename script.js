$(function () {
  var breathBar = $('.breath-bar');
  var lungsFull = { height: '100%' };
  var lungsEmpty = { height: '0%' };
  var defaultSettings = {
    secondsIn: 4,
    secondsOut: 6,
  };
  var settings = {};

  // Load settings
  $('.settings input').each(function (event) {
    var inputID = $(this).get(0).id;
    var value = $(this).val();
    settings[inputID] = value ? Number(value) : defaultSettings[inputID];
  });

  // Breathe in
  breathBar.animate(lungsFull, settings.secondsIn * 1000, breathe);

  function breathe() {
    // Are lungs empty?
    if (breathBar.height() == 0) {
      // Breathe in
      breathBar.animate(lungsFull, settings.secondsIn * 1000, breathe);
    } else {
      // Breathe out
      breathBar.animate(lungsEmpty, settings.secondsOut * 1000, breathe);
    }
  }

  // Display settings
  $('#settingsModal').on('shown.bs.modal', function () {
    // Focus first input
    $('.settings input').first().select();
  })

  // Change settings
  $('.settings input').change(function (event) {
    var inputID = $(this).get(0).id;
    var value = $(this).val();
    settings[inputID] = value ? Number(value) : defaultSettings[inputID];
  });

  // Submit settings
  $('.settings').submit(function (event) {
    // Prevent page reload
    event.preventDefault();
    // Hide modal
    $('#settingsModal').modal('hide');
  });
});
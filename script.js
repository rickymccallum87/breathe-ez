$(function () {
  var breath = $('.breath');
  var lungsFull = { height: '100%' };
  var lungsEmpty = { height: '0%' };
  var defaultSettings = {
    secondsIn: 4,
    secondsOut: 6,
  };
  var previousSettings = {};
  var settings = {};

  // Load settings
  $('.settings input').each(function (event) {
    var inputID = $(this).get(0).id;
    var value = $(this).val();
    settings[inputID] = value ? Number(value) : defaultSettings[inputID];
  });

  // Breathe in
  breath.animate(lungsFull, settings.secondsIn * 1000, breathe);

  // Loop breathing
  function breathe() {
    // Are lungs empty?
    if (breath.height() == 0) {
      // Breathe in
      breath.animate(lungsFull, settings.secondsIn * 1000, breathe);
    } else {
      // Breathe out
      breath.animate(lungsEmpty, settings.secondsOut * 1000, breathe);
    }
  }

  // Show settings modal
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

    // Prevent form submission
    event.preventDefault();

    // Hide modal
    $('#settingsModal').modal('hide');

    // Restart breath
    breath.stop();
    breath.height('0%');
    breath.animate(lungsFull, settings.secondsIn * 1000, breathe);
  });
});
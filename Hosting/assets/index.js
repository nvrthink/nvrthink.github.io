$(document).ready(function() {
    var checkBoxes = $("input[name='toggle']");
    toggle();
    $("#toggle").click(function() {
      toggle();
    });
  
    function toggle() {
      if (checkBoxes.prop("checked")) {
        $('#paketwebhost').show('fast');
        $('#paketwordpress').hide('fast');
  
      } else {
        $('#paketwebhost').hide('fast');
        $('#paketwordpress').show('fast');
      }
    }
  });
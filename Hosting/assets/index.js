$(document).ready(function() {
    var checkBoxes = $("input[name='toggle']");
    toggle();
    $("#toggle").click(function() {
      toggle();
    });
  
    function toggle() {
      if (checkBoxes.prop("checked")) {
        $('#paketwordpress').show('fast');
        $('#paketwebhost').hide('fast');
  
      } else {
        $('#paketwordpress').hide('fast');
        $('#paketwebhost').show('fast');
      }
    }
  });
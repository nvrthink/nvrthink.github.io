// Navbar 

$(document).ready(function(){
  $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 100) {
        $(".navbar").css("background-color" , "white");
      }

      else{
          $(".navbar").css("background-color" , "#8ed1fcff");  	
      }
  })
});

// end navbar

// Toggle switch Desktop

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
// end Toggle Switch

// Dropdown Switch
  $(document).ready(function() {
    var checkBoxes = $("input[name='toggledrop']");
    toggle();
    $("#toggledrop").click(function() {
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

// dropdown switch


// Show Password
  function passFunc() {
    var x = document.getElementById("exampleInputPassword1");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

// End show password


// Loading
  $(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

// loading
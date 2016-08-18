/* ==============================================
	Preload
=============================================== */
$(window).load(function() { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow':'visible'});
})
/* ==============================================
	Sticky nav
=============================================== */
$(window).scroll(function(){
    'use strict';
    if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});

/* ==============================================
	Menu
=============================================== */
$('a.open_close').on("click",function() {
	$('.main-menu').toggleClass('show');
	$('.layer').toggleClass('layer-is-visible');
});
$('a.show-submenu').on("click",function() {
	$(this).next().toggleClass("show_normal");
});
$('a.show-submenu-mega').on("click",function() {
	$(this).next().toggleClass("show_mega");
});
if($(window).width() <= 480){
	$('a.open_close').on("click",function() {
	$('.cmn-toggle-switch').removeClass('active')
});
}

/* ==============================================
	Common
=============================================== */

<!-- Tooltip -->	
$('.tooltip-1').tooltip({html:true});
	
 //accordion	
function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('icon_plus_alt2 icon_minus_alt2');
}
$('#accordion').on('hidden.bs.collapse shown.bs.collapse', toggleChevron);


/* ==============================================
	Animation on scroll
=============================================== */
new WOW().init();

/* ==============================================
	Video modal dialog + Parallax + Scroll to top  + Hamburger icon
=============================================== */
$(function () {
'use strict';
$('.video').magnificPopup({type:'iframe'});	/* video modal*/
// Image popups

$('.magnific-gallery').each(function() {
    $(this).magnificPopup({
        delegate: 'a', 
        type: 'image',
        gallery:{enabled:true}
    });
}); 


/* Hamburger icon*/
var toggles = document.querySelectorAll(".cmn-toggle-switch"); 

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  };
  
  /* Scroll to top*/
  $(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();	
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').on("click",function() {
		$('body,html').animate({scrollTop:0},500);
	});	
});

<!-- testimonial carousel -->	
$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 6000
  });
});

/* Contact Form */
/* ---------------------------------------------------------------------- */
  
  // Needed variables
  var $contactform = $('#contactform');
  var $success = ' Tu mensaje ha sido enviado. Gracias!';
  var response = '';
  
  $('#contactform').submit(function() {
  $.ajax({
  type: "POST",
  url: "php/contact.php",
  data: $(this).serialize(),
  success: function(msg)
  {
  var msg_error = msg.split(",");
  var output_error = '';
  
  if (msg_error.indexOf('error-message') != -1) {
  $("#contact-message").addClass("has-error");
  $("#contact-message").removeClass("has-success");
  output_error = 'Por favor ingrese su mensaje.';
  } else {
  $("#contact-message").addClass("has-success");
  $("#contact-message").removeClass("has-error");
  }
  
  if (msg_error.indexOf('error-email') != -1) {
  
  $("#contact-email").addClass("has-error");
  $("#contact-email").removeClass("has-success");
  output_error = 'Introduzca un e-mail válido.';
  } else {
  $("#contact-email").addClass("has-success");
  $("#contact-email").removeClass("has-error");
  }
  
  if (msg_error.indexOf('error-name') != -1) {
  $("#contact-name").addClass("has-error");
  $("#contact-name").removeClass("has-success");
  output_error = 'Por favor, escriba su nombre.';
  } else {
  $("#contact-name").addClass("has-success");
  $("#contact-name").removeClass("has-error");
  }
  
  
  
  if (msg == 'success') {
  
  response = '<div class="alert alert-success success-send">' +
    '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
    '<i class="glyphicon glyphicon-ok" style="margin-right: 5px;"></i> ' + $success
    + '</div>';
  
  $(".reset").trigger('click');
  $("#contact-name").removeClass("has-success");
  $("#contact-email").removeClass("has-success");
  $("#contact-message").removeClass("has-success");
  
  } else {
  
  response = '<div class="alert alert-danger error-send">' +
    '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
    '<i class="glyphicon glyphicon-remove" style="margin-right: 5px;"></i> ' + msg
    + '</div>';
  
  }
  // Hide any previous response text
  $(".error-send,.success-send").remove();
  // Show response message
  $contactform.prepend(response);
  }
  });
  return false;
  });
  
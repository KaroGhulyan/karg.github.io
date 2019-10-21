
      $(document).ready(
        function() {
          $('.menu-toggle').click(function() {
            $('nav').toggleClass('active')
          })

          $('ul li').click(function() {
            $(this).toggleClass('active');
          })
        }
      )

      var btn = $('#aboutus-scroll');
      btn.on('click', function(e) {
  	  e.preventDefault();
  	$('html, body').animate({scrollTop:2590}, '300');
	});

	 var btn = $('#contact-scroll');
	 btn.on('click', function(e) {
  	  e.preventDefault();
  	$('html, body').animate({scrollTop:3250}, '300');
	});

	 var btn = $('#home-scroll');
	 btn.on('click', function(e) {
  	  e.preventDefault();
  	$('html, body').animate({scrollTop:0}, '300');
	});

/* ========== PARALLAX BACKGROUD ========== */
function parallax() {
	var scrollPosition = $(window).scrollTop();
	$('#parallax-1').css('top',(0 - (scrollPosition * 0.6))+'px' ); /* big clouds move at 60% of speed */
	$('#parallax-2').css('top',(0 - (scrollPosition * 0.2))+'px' ); /* medium clouds move at 20% of speed */
	$('#parallax-3').css('top',(0 - (scrollPosition * 0.4))+'px' ); /* small clouds move at 40% of speed */
}

function isIE () {
	var myNav = navigator.userAgent.toLowerCase();
	return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

$(document).ready(function() {

	/* calling the parallax function */
	$(window).on('scroll', function(e) {
		parallax();
	});


	/* ========== BASELINE GRID SCRIPT BY DAN EDEN ========== */
	/* http://daneden.me/baseline/ */
	$('img').baseline(24);


	/* ========== HEADER BAR MORPHING ON SCROLL ========== */
	/* shout out to codrops for the inspiration - http://tympanus.net/codrops/ */
	var $head = $( '#morph-header' );
	$( '.morph-waypoint' ).each( function(i) {
		var $el = $( this ),
			animClassDown = $el.data( 'animateDown' ),
			animClassUp = $el.data( 'animateUp' );

		$el.waypoint( function( direction ) {
			if( direction === 'down' && animClassDown ) {
				$head.attr('class', 'morph-header ' + animClassDown);
			}
			else if( direction === 'up' && animClassUp ){
				$head.attr('class', 'morph-header ' + animClassUp);
			}
		}, { offset: '72px' } );
	} );


	// ==================== BOOTSTRAP SCROLLSPY ==================== //
	$('section').scrollspy();

	// ==================== SMOOTH SCROLLING BETWEEN SECTIONS ==================== //
	$('a[href*=#section-]:not([href=#])').click(function(o) {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	           	if ($("header").css("position") == "fixed" ) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top-71
	            }, 1000);
	         } else {
	             $('html,body').animate({
	                 scrollTop: target.offset().top
	            }, 1000);
	         }
	            return false;
	        }
	    }
	});

	// /* ========== ISOTOPE FILTERING ========== */
	// // cache container
	// var $container = $('.portfolio-items');
	// // initialize isotope
	// $container.isotope({
	//   // options...
	// });

	// // filter items when filter link is clicked
	// $('.filters a').click(function(){
	//   var selector = $(this).attr('data-filter');
	//   $container.isotope({ filter: selector });
	//   return false;
	// });

	// ==================== CONTACT FORM ==================== //
    $("#contact-form").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "assets/contact.php",
			data: str,
			success: function(msg) {
				if(msg == 'OK') {
					result = '<div class="alert alert-success">All good, your message is in the cloud!</div>';
					setTimeout("location.reload(true);",7000);
			  	} else {
					result = msg;
			  	}
			  	$('#contact-error').html(result);
		    }
		});
		return false;
	});

	// ==================== TWITTER FEED ==================== //
	$("#tweets-feed").tweet({
	  join_text: false,
	  username: "envato", // Change username here
	  modpath: './assets/twitter/', 
	  avatar_size: false,
	  count: 2, // number of tweets
	  loading_text: "tweets are coming...",
	  seconds_ago_text: "about %d seconds ago",
	  a_minutes_ago_text: "about a minute ago",
	  minutes_ago_text: "about %d minutes ago",
	  a_hours_ago_text: "about an hour ago",
	  hours_ago_text: "about %d hours ago",
	  a_day_ago_text: "about a day ago",
	  days_ago_text: "about %d days ago",
	  view_text: "view tweet on twitter"
	});

	// ==================== FITVIDS ==================== //
	// https://github.com/marclarr/FitVids.js
	$('.fitvids').fitVids();

	// ==================== CSS TRANSFORMS JAVASCRIPT FALLBACK & IE 8/9 fixes ==================== //
	if ( $('.no-csstransforms').length ) {
		$('.folio-item').mouseenter(function() {
			$(this).find('img').stop(true,true).animate({
				'left': '100%'
			}, 500);
			$(this).find('.folio-desc').stop(true,true).animate({
				'left': 0
			}, 500);
		}).mouseleave(function() {
			$(this).find('img').stop(true,true).animate({
				'left': 0
			}, 500);
			$(this).find('.folio-desc').stop(true,true).animate({
				'left': '-100%'
			}, 500);
		});

		$('#section-pricing .pricing-box ul.pricing-list li:odd').addClass('odd');
	}

	function replacePlaceholders() {
		if ( !("placeholder" in document.createElement("input")) ) {
			$("input[placeholder], textarea[placeholder]").each(function() {
				var val = $(this).attr("placeholder");

				if ( this.value == "" ) this.value = val;

				$(this).focus(function() {
					if ( this.value == val ) this.value = "";
				}).blur(function() {
					if ( $.trim(this.value) == "" ) this.value = val;
				});
			});
		}
	};

	replacePlaceholders();

	if ( isIE() == 9 ) {
		$('.navbar-nav').addClass('iefix');
	}	
});

/* ========== ISOTOPE FILTERING ========== */
$(window).load(function(){
	// cache container
	var $container = $('.portfolio-items');
	// initialize isotope
	$container.isotope({
	  onLayout: function() {
	  	if ( isIE() < 9 ) {
			function adjustPortfolio() {
				var winWidth = $(window).width();
				var portfolioWidth = $('.portfolio-items').width();

				$('.portfolio-items').addClass('ieight');

				if ( winWidth > 1024 ) {
					$('.portfolio-items .col-md-4').width(portfolioWidth/3 - 30);
				} else if ( winWidth < 1024 && winWidth > 767 ) {
					$('.portfolio-items .col-md-4').width(portfolioWidth/2 - 30);
				} else {
					$('.portfolio-items .col-md-4').width(portfolioWidth - 50);
				}
			};

			adjustPortfolio();
			$container.isotope('reLayout');
		}
	  }
	});

	// filter items when filter link is clicked
	$('.filters a').click(function(){
	  var selector = $(this).attr('data-filter');
	  $container.isotope({ filter: selector });
	  return false;
	});

	// var cons = $('<div class="console" style="position: fixed; top: 0; left: 0; right: 0; height: 40px; z-index: 9999; background: red; color: #fff; overflow: auto;" />');
	// cons.appendTo('body');
	// cons.text($('.portfolio-items .col-md-4').outerWidth(true));
});

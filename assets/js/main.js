/*
	Read Only by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/


(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$titleBar = null,
		$nav = $('#nav'),
        $section = $('section'),
		$wrapper = $('#wrapper');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '1025px',  '1280px' ],
			medium:   [ '737px',   '1024px' ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Tweaks/fixes.

		// Polyfill: Object fit.
			if (!browser.canUse('object-fit')) {

				$('.image[data-position]').each(function() {

					var $this = $(this),
						$img = $this.children('img');

					// Apply img as background.
						$this
							.css('background-image', 'url("' + $img.attr('src') + '")')
							.css('background-position', $this.data('position'))
							.css('background-size', 'cover')
							.css('background-repeat', 'no-repeat');

					// Hide img.
						$img
							.css('opacity', '0');

				});

			}

	// Header Panel.

		// Nav.
			var $nav_a = $nav.find('a');

			$nav_a
				.addClass('scrolly')
				.on('click', function() {

					var $this = $(this);

					// External link? Bail.
						if ($this.attr('href').charAt(0) != '#')
							return;

					// Deactivate all links.
						$nav_a.removeClass('active');

					// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
						$this
							.addClass('active')
							.addClass('active-locked');

				})
				.each(function() {

					var	$this = $(this),
						id = $this.attr('href'),
						$section = $(id);

					// No section for this link? Bail.
						if ($section.length < 1)
							return;

					// Scrollex.
						$section.scrollex({
							mode: 'middle',
							top: '5vh',
							bottom: '5vh',
							initialize: function() {

								// Deactivate section.
									$section.addClass('inactive');

							},
							enter: function() {

								// Activate section.
									$section.removeClass('inactive');

								// No locked links? Deactivate all links and activate this section's one.
									if ($nav_a.filter('.active-locked').length == 0) {

										$nav_a.removeClass('active');
										$this.addClass('active');

									}

								// Otherwise, if this section's link is the one that's locked, unlock it.
									else if ($this.hasClass('active-locked'))
										$this.removeClass('active-locked');

							}
						});

				});

		// Title Bar.
			$titleBar = $(
				'<div id="titleBar">' +
					'<a href="#header" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$header
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'header-visible'
				});

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() {

				if (breakpoints.active('<=medium'))
					return $titleBar.height();

				return 0;

			}
		});
    
    var $one=$('#one h3'),
        $two=$('#two h3'),
        $three=$('#three h3'),
        $four=$('#four h3');
    
    $one.mouseenter(function(){
        $one.css("color","#6A5ACD");
        $one.animate({fontSize:'2em'},"slow");
    });
    
    $one.mouseleave(function(){
        $one.css("color","#777");
        $one.animate({fontSize:'1.5em'},"slow");
    });
    
    $two.mouseenter(function(){
        $two.css("color","#B399FF");
        $two.animate({fontSize:'2em'},"slow");
    });
    
    $two.mouseleave(function(){
        $two.css("color","#777");
        $two.animate({fontSize:'1.5em'},"slow");
    });
    
    $three.mouseenter(function(){
        $three.css("color","#6A5ACD");
        $three.animate({fontSize:'2em'},"slow");
    });
    
    $three.mouseleave(function(){
        $three.css("color","#777");
        $three.animate({fontSize:'1.5em'},"slow");
    });
    
    $four.mouseenter(function(){
        $four.css("color","#B399FF");
        $four.animate({fontSize:'2em'},"slow");
    });
    
    $four.mouseleave(function(){
        $four.css("color","#777");
        $four.animate({fontSize:'1.5em'},"slow");
    });
    
    var string = "我是湯嘉玲，\n喜歡音樂，喜歡遊戲，喜歡天馬行空，\n喜歡整潔的排版，喜歡美麗的App和網頁~";
    var str = string.split("");
    var el = document.getElementById('str');

    (function animate() {
        str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
        var running = setTimeout(animate, 90);
    })();

})(jQuery);

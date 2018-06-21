
	$(document).ready(function($) {
		    $('#menu-main').scrollspy();
    		$('section#services .col-xs-12').matchHeight();
    		$('.post').matchHeight();
    		
    		$('#nav-services').on('click', function(e) {
    			e.preventDefault();
    			$('#services').ScrollTo({
    				duration: 2000,
    				durationMode: 'all'
				});
    		});
    		$('#nav-social').on('click', function(e) {
    			e.preventDefault();
    			$('#social').ScrollTo({
    				duration: 2000,
    				durationMode: 'all'
				});
    		});
    		$('#nav-news').on('click', function(e) {
    			e.preventDefault();
    			$('#news').ScrollTo({
    				duration: 2000,
    				durationMode: 'all'
				});
    		});
    		$('#nav-about').on('click', function(e) {
    			e.preventDefault();
    			$('#about').ScrollTo({
    				duration: 2000,
    				durationMode: 'all'
				});
    		});
    		$('#nav-links').on('click', function(e) {
    			e.preventDefault();
    			$('#links').ScrollTo({
    				duration: 2000,
    				durationMode: 'all'
				});
    		});
    		$('#nav-contact').on('click', function(e) {
    			e.preventDefault();
    			$('#contact').ScrollTo({
    				duration: 2000,
    				durationMode: 'all'
				});
    		});
    		$('#nav-brand').on('click', function(e) {
    			e.preventDefault();
    			$('#top').ScrollTo({
    				duration: 2000,
    				durationMode: 'all'
				});
    		});
    		
    		var waypoint = new Waypoint({
  				element: document.getElementById('services'),
  				handler: function() {
  				if ($('.navbar-fixed-top').hasClass('hidden')) {
    				$('.navbar-fixed-top').removeClass('hidden')
    				} else {
    				$('.navbar-fixed-top').addClass('hidden')
    				}
  				}
			});
			
     		$("#menu-main").on("click", "a", null, function () {
         		$("#menu-main").collapse('hide');
     			});
     			
     		$("#nav-brand").on("click", null, function () {
         		$("#menu-main").collapse('hide');
     			});
	});
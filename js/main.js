$(function() {

    $('.portfolio-card').matchHeight();
    
   if (!Modernizr.touch) {
   
       // PARALLAX EFFECT //
       
       // cache the window object
       $window = $(window);
     
       $('section[data-type="background"]').each(function(){
         // declare the variable to affect the defined data-type
         var $scroll = $(this);
                         
          $(window).scroll(function() {
            // HTML5 proves useful for helping with creating JS functions!
            // also, negative value because we're scrolling upwards                             
            var yPos = -($window.scrollTop() / $scroll.data('speed'));
            yPos += $scroll.data('offset');
            // background position
            var coords = '50% '+ yPos + 'px';
     
            // move the background
            $scroll.css({ backgroundPosition: coords });    
          }); // end window scroll
       });  // end section function
       
   }
   
   if (screen.width<=767) {
    // sticky header
    $('.sticky-wrapper').waypoint('sticky', {
        handler: function (direction) {

            switch (direction) {
                case 'down': 
                    $(".navbar-brand").removeClass("navbar-disappear");
                    $(".navbar-brand").addClass("animated fadeIn");                   
                    break;
                case 'up':
                    $(".navbar-brand").addClass("navbar-disappear");
                    $(".navbar-brand").removeClass("animated fadeIn");
                    break;
            }
        }
    });
    
    }
    
$('body').scrollspy({ target: '#sticky-navbar' });

$("#sticky-navbar ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;
   if ($(window).width() <= 767) {
		$('#menuButton').removeClass("is-active").addClass("collapsed");
		$('#sticky-navbar').removeClass('dark-background');
	}
   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 1000, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
       
     });
     
     $('#menuButton').on('click', function(e) {
     	e.preventDefault();
     	if ($(window).width() <= 767) {
     		$('#sticky-navbar').addClass('dark-background');
     	}
     });

});
   
var circleChart = function (){
        $('.circle-chart .item > .circle > .item-progress').each(function(){
            var item = $(this);
            var maxHeight = 108;
            var newHeight = maxHeight * ($(this).data('percent') / 100);
            
            // Only animate elements when using non-mobile devices    
            if (jQuery.browser.mobile === false){
                item.one('inview', function(isInView) {
                    if (isInView){
                        // Animate item
                        item.animate({
                            height: newHeight
                        },1500);
                    }
                });
            }
            else{
                item.css('height', newHeight);
            }
        });
    };
    
    // Call circleChart() when window is loaded.
    $(window).smartload(function(){
        circleChart();
    });
    
    // Call circleChart() when window is resized.
    $(window).smartresize(function(){
        circleChart();
    });
    
    
});

  var barChart = function (){
        $('.bar-chart > .item > .bar > .item-progress').each(function(){
            var item = $(this);
            var percent = $(this).prev();
            var newWidth = $(this).parent().width() * ($(this).data('percent') / 100);
            
            // Only animate elements when using non-mobile devices    
            if (jQuery.browser.mobile === false){
                item.one('inview', function(isInView) {
                    if (isInView){
                        // Animate item
                        item.animate({
                            width: newWidth
                        },1500);
                        
                        percent.animate({
                            left: newWidth - percent.width()
                        },1500);
                    }
                });
            }
            else{
                item.css('width', newWidth);
                percent.css('left', newWidth - percent.width());
            }
        });
    };
    
    // Call barChart() when window is loaded.
    $(window).smartload(function(){
        barChart();
    });
    
    // Call barChart() when window is resized.
    $(window).smartresize(function(){
        barChart();
    });
    
    

var logo = $(".logo");
var lastPart = $(".question");
var mainExp = $(".explanation");
var description = $(".descrip");

mainExp.hover(showText);

lastPart.mouseenter(toGear);
lastPart.mouseleave(toLogo);

/* Controls the main text appearing when the user hovers over it.*/
function showText(){
  description.fadeIn(1000);
  setTimeout (() => { description.css("opacity", "1"); }, 3000);
}


/* Controls the logo to gear feature at the very end of the page */
function toGear(){

  logo.fadeOut(750);

  setTimeout(() => { logo.attr("src", "https://www.clipartmax.com/png/full/61-612615_gear-orange-cog-clip-art-at-clkercom-vector-online-cog-wheel.png"); }, 750);

  logo.fadeIn(750);
}

function toLogo(){

  logo.fadeOut(750);

  setTimeout(() => { logo.attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Walmart_Spark.svg/1925px-Walmart_Spark.svg.png"); }, 750);

  logo.fadeIn(750);
}




/* Relates to the slideshow gallery for the introduction */
var slidePosition = 1;
SlideShow(slidePosition);

window.addEventListener("load",function(){
    SlideShow(slidePosition);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
});

function SlideShow(n) {
  var slides = $(".panel");

  if(n > slides.length){
    slidePosition = 1;
  }

  if(n < 1){
    slidePosition = slides.length;
  }

  for(var i = 0; i < slides.length; i++){
      slides[i].style.display = "none";
  }

  slides[slidePosition-1].style.display = "block";
} 

function plusSlides(n){
  clearInterval(myTimer);

  if(n < 0){
    SlideShow(slidePosition -= 1);
  } 
  else if(n === 3){
    var delayInMilliseconds = 5000;

    setTimeout(function() {
    }, delayInMilliseconds);
  }
  else{
   SlideShow(slidePosition += 1); 
  }

  if(n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 3000);
  }
  else{
    myTimer = setInterval(function(){plusSlides(n + 1)}, 3000);
  }
}



/* Moves in the in-store and online boxes */
(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);

var allMods = $(".module");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});


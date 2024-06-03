/**
 * @file
 * Exposed Views filters behaviors.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.uiFun1 = {

    attach: function (context, settings) {
      $(document).ready(function() {
        $(".skill-bar").once('addSkillBars').append("<div class='skill-score'><span></span><span></span><span></span><span></span><span></span></div>");
        $(".skill-2").each(function() {
          $(this).find(".skill-score span").slice(0,2).addClass("skill-filled");
        });
        $(".skill-3").each(function() {
          $(this).find(".skill-score span").slice(0,3).addClass("skill-filled");
        });
        $(".skill-4").each(function() {
          $(this).find(".skill-score span").slice(0,4).addClass("skill-filled");
        });
        $(".skill-5").each(function() {
          $(this).find(".skill-score span").slice(0,5).addClass("skill-filled");
        });
        console.log("ranui");
      });

    }

  };

  Drupal.behaviors.uiFun2 = {

    attach: function (context, settings) {

      $( window ).once('scrolling').scroll(function() {
  var heroVisibility = getElementVisibility($(".wrapper"));
  console.log( getElementVisibility($(".wrapper")) );
  var rate1 = heroVisibility-((1-heroVisibility)*.7);
  var rate2 = heroVisibility-((1-heroVisibility)*.4);
  var rate3 = 1-((1-heroVisibility)*.5);
  var rate4 = 1-((1-heroVisibility)*.8);
  var rate5 = 1-((1-heroVisibility)*1.2);
  var rate6 = heroVisibility-((1-heroVisibility)*3);

  $(".bg0").css({ opacity: rate1 });
  $(".bg1").css({ opacity: 1-rate6 });
  $(".bg1").css({ 'background-position': 'center '+ ((1-rate4)*100) +'%' });

  $(".bg2").css({ bottom: ((rate1*-100))-70 });
  $(".bg2").css({ filter: 'brightness('+ rate5*100 +'%) saturate('+ rate4*100 +'%)' });

  $(".bg3").css({ filter: 'brightness('+ rate4*100 +'%) saturate('+ rate3*100 +'%)' });


});

function getElementVisibility(el) {
  var heroHeight = el.height();
  var percentVisible = 100;
  var scrollTop     = $(window).scrollTop(),
    elementOffset = el.offset().top,
    distance      = (elementOffset - scrollTop);
  if(distance > 0) {
     distance = 0;
  }
  percentVisible = 1 + (distance/heroHeight);
  if(percentVisible < 0) {
     percentVisible = 0;
  }
  return percentVisible;
}

    }

  };

})(jQuery, Drupal);

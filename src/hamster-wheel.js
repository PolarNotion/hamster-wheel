/*
 * 
 * 
 *
 * Copyright (c) 2016 Polar Notion
 * Licensed under the MIT license.
 */
(function ($) {
  $.fn.hamsterWheel = function() {
    'use strict';

    //create all the things
    var body          = document.body,
        html          = document.documentElement,
        $div          = $(this),
        $section      = $div.children().first(),
        sectionHeight = $section.height(),
        height        = $div.height(),
        offset     = $div.offset(),
        lastScrollTop = 0;

    function cloneSections(num) {  
      for (var i = 0; i < num; i++) {
        $section.clone().appendTo($div);
      }
    }

    function setHeight() {
      height = Math.max( 
        body.scrollHeight, 
        body.offsetHeight, 
        html.clientHeight, 
        html.scrollHeight, 
        html.offsetHeight 
      );
    }

    $(window).scroll(function() {

      setHeight();

      var delta = 10;

      var st = $(this).scrollTop();

      if(Math.abs(lastScrollTop - st) <= delta){
        if (st > lastScrollTop){
          console.log( 'down' );
        } else {
          console.log( 'up' );
        }
      }

      // This sucks, figure something else out
      if ( st > lastScrollTop && st === offset.top + height - window.innerHeight) {
        $(document).scrollTop(0);
      } else if ( st < lastScrollTop && $(document).scrollTop() === 0 ) {
        $(document).scrollTop(document.body.scrollHeight);
      }

      if ( $(window).scrollTop() > ( height - ( window.innerHeight + sectionHeight * 4 ) ) ) {
        console.log('do the thing');
        $section.clone().appendTo($div);
        setHeight();
        if ( $div.children().length > 40 ) {
          $div.children().first().remove();
        }
      }

      lastScrollTop = st;
    });

    function init(sectionNumber) {
      cloneSections(sectionNumber);
      setHeight();
    }

    init(6);

    // $('document').ready(function() {
    //   $(window).scroll(function(){
    //     var st = $(this).scrollTop();
    //     // This sucks, figure something else out
    //     if(st > lastScrollTop && document.documentElement.clientHeight + $(document).scrollTop() >= document.body.offsetHeight ) {
    //       $(document).scrollTop(0);
    //     } else if ( st < lastScrollTop && $(document).scrollTop() === 0 ) {
    //       $(document).scrollTop(document.body.scrollHeight);
    //     }
    //     lastScrollTop = st;
    //   });
    // }); 
  };
}(jQuery));


// var o = l.el.sections.find("section")
//       , i = 0;
//     i = o.eq(Math.floor(o.length / 2)).offset().top - t,
//     a.prevScroll = i,
//     $(window).scrollTop(i),
//     a.goingDown = !1
// }
//
// l.el = {
//            feed: $("#feed"),
//            sections: $("#feed .sections"),
//            firstSection: null ,
//            lastSection: null ,
//            toggle: $(".feed-toggle")
//        },
// l.showFeed = function(t) {
//     l.el.feed.fadeOut(500, function() {
//         l.el.sections.html("");
//         for (var o = 0; o < l.sectionCount; o++) {
//             var i = l.newSection(t);
//             l.el.sections.append(i),
//             l.appendCount++
//         }
//         l.el.firstSection = l.el.sections.find("section:first"),
//         l.el.lastSection = l.el.sections.find("section:last"),
//         l.loadImages();
//         var s = l.el.sections.find("section")
//           , n = s.eq(Math.floor(s.length / 2)).offset().top;
//         a.prevScroll = n,
//         $(window).scrollTop(n),
//         l.el.feed.fadeIn(500)
//     })
// }
// ,
// l.watchScroll = function() {
//     var t = $(window).scrollTop();
//     if (!l.isLoadingSection) {
//         var o = l.el.firstSection.height()
//           , i = l.el.feed.outerHeight() - $(window).height() - l.el.lastSection.height();
//         o >= t && ($newSection = l.newSection(l.currentName),
//         l.el.sections.prepend($newSection),
//         l.appendCount++,
//         l.loadImages(),
//         l.el.lastSection.remove(),
//         l.el.lastSection = l.el.sections.find("section:last"),
//         l.el.firstSection = l.el.sections.find("section:first"),
//         a.newScroll = t + l.el.firstSection.height(),
//         a.prevScroll = a.newScroll,
//         $(window).scrollTop(a.newScroll)),
//         t >= i && ($newSection = l.newSection(l.currentName),
//         l.el.firstSection.remov$(),
//         l.el.sections.append($newSection),
//         l.appendCount++,
//         l.loadImages(),
//         l.el.lastSection = l.el.sections.find("section:last"),
//         l.el.firstSection = l.el.sections.find("section:first"),
//         a.newScroll = t - l.el.firstSection.height(),
//         a.prevScroll = a.newScroll,
//         $(window).scrollTop(a.newScroll))
//     }
// }
// ;
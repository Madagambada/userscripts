// ==UserScript==
// @name        nhentai-hotkey
// @version     1.0.1
// @include     https://nhentai.net/*
// @description nhentai hotkey
// @author      Madagambada
// @require     https://code.jquery.com/jquery-3.6.0.min.js
// @updateURL   https://github.com/Madagambada/userscripts/raw/master/nhentai-hotkey.user.js
// @downloadURL https://github.com/Madagambada/userscripts/raw/master/nhentai-hotkey.user.js
// ==/UserScript==

//hotkey
(function() {
 document.addEventListener('keydown', function(e) {
   if (e.keyCode == 82) {
       if ($("a[class*='go-back']").length) {
           window.location = $("a[class*='go-back']").attr('href');
       } else if ($('#cover').length) {
           if (window.location.href.search("#comment") > 0) {
               window.location = window.location.href.split('#')[0]+"1";
           } else {
               window.location = window.location.href+"1";
           }
       }
   }
   if (e.keyCode == 37 && $("a[class*='previous']").length && $("a[class*='go-back']").length == 0) {
       window.location = $("a[class*='previous']").attr('href')
   } else if (e.keyCode == 39 && $("a[class*='next']").length && $("a[class*='go-back']").length == 0) {
       window.location = $("a[class*='next']").attr('href')
   } else if (e.keyCode == 65 && $("section[class*='pagination']").length) {
       if ($("a[class*='page current']").prev().attr('href') != null) {
           window.location = $("a[class*='page current']").prev().attr('href')
       }
   } else if (e.keyCode == 68 && $("section[class*='pagination']").length) {
       if ($("a[class*='page current']").next().attr('href') != null) {
           window.location = $("a[class*='page current']").next().attr('href')
       }
   }
  }, false);
})();

// ==UserScript==
// @name        nhentai-hotkey
// @version     0.0.0.3i
// @include     https://nhentai.net/*
// @description nhentai hotkey
// @author      Madagambada
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @updateURL   https://github.com/Madagambada/userscripts/raw/master/nhentai-hotkey.user.js
// @downloadURL https://github.com/Madagambada/userscripts/raw/master/nhentai-hotkey.user.js
// ==/UserScript==

//hotkey

(function() {
 document.addEventListener('keydown', function(e) {
   if (e.keyCode == 96) {
       if ($("a[class*='go-back']").length) {
           window.location = $("a[class*='go-back']").attr('href');
       } else if ($('#cover').length) {
           window.location = window.location.href+"1";
       }
   }
   if (e.keyCode == 37 && $("a[class*='previous']").length && $("a[class*='go-back']").length == 0) {
       window.location = $("a[class*='previous']").attr('href')
   } else if (e.keyCode == 39 && $("a[class*='next']").length && $("a[class*='go-back']").length == 0) {
       window.location = $("a[class*='next']").attr('href')
   }
  }, false);
})();

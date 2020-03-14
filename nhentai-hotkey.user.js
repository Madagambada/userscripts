// ==UserScript==
// @name        nhentai-hotkey
// @version     0.0.0.1z
// @include     https://nhentai.net/g/*
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
       if ($("a:contains('Back to gallery')").length) {
           window.location = $("a:contains('Back to gallery')").attr('href');
       } else {
           window.location = window.location.href+"1";
       }
   }
  }, false);
})();

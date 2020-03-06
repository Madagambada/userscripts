// ==UserScript==
// @name         mangakakalot hotkey
// @version      0.0.0.3k
// @description  mangakakalot hotkey
// @author       Madagambada
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/mangakakalot-hotkey.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/mangakakalot-hotkey.user.js
// @match        https://mangakakalot.com/chapter/*/*
// @match        https://manganelo.com/chapter/*/*
// @grant        none
// ==/UserScript==

 var next = $("a:contains('NEXT CHAPTER')");
 var prev = $("a:contains('PREV CHAPTER')");
 (function() {
  document.addEventListener('keydown', function(e) {
   if (e.keyCode == 39 || e.keyCode == 68) {
    window.location = next[0].href;
   } else if (e.keyCode == 37 || e.keyCode == 65) {
    window.location = prev[0].href;
   }
  }, false);
 })();

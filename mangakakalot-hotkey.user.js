// ==UserScript==
// @name         mangakakalot hotkey
// @version      0.0.1.1u
// @description  mangakakalot hotkey
// @author       Madagambada
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/mangakakalot-hotkey.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/mangakakalot-hotkey.user.js
// @match        https://manganelo.com/*
// @match        https://mangakakalot.com/*
// @grant        none
// ==/UserScript==

if ($(".group_qty").length){
 var next = $(".page_select").next()[0].href;
 var prev = $(".page_select").prev()[0].href;
} else {
 var next = $("a:contains('NEXT CHAPTER')")[0].href;
 var prev = $("a:contains('PREV CHAPTER')")[0].href;
}
 (function() {
  document.addEventListener('keydown', function(e) {
   if (e.keyCode == 39 || e.keyCode == 68) {
    window.location = next;
   } else if (e.keyCode == 37 || e.keyCode == 65) {
    window.location = prev;
   }
  }, false);
 })();

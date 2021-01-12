// ==UserScript==
// @name         mangakakalot hotkey
// @version      1.0.1.3s
// @description  mangakakalot hotkey
// @author       Madagambada
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/mangakakalot-hotkey.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/mangakakalot-hotkey.user.js
// @match        https://manganelo.com/*
// @match        https://mangakakalot.com/*
// @grant        GM_addStyle
// ==/UserScript==
var pos = 0
if ($(".group-qty").length){
 var next = $(".page-select").next()[0];
 var prev = $(".page-select").prev()[0];
} else if ($(".group_qty").length){
 var next = $(".page_select").next()[0];
 var prev = $(".page_select").prev()[0];
} else {
 var next = $("a:contains('NEXT CHAPTER')")[0];
 var prev = $("a:contains('PREV CHAPTER')")[0];
}

GM_addStyle("html {  scroll-behavior: smooth;  }");

function scroll(var1) {
    var n = document.scrollingElement || document.documentElement;
    n.scrollTop = n.scrollTop + var1;
}

 (function() {
  document.addEventListener('keydown', function(e) {
   if (e.keyCode == 39 || e.keyCode == 68) {
       if (!$("#search-story").is(":focus")) {
           window.location = next.href;
       }
   } else if (e.keyCode == 37 || e.keyCode == 65) {
       if (!$("#search-story").is(":focus")) {
           window.location = prev.href;
       }
   } else if (e.keyCode == 87) {
       if (!$("#search-story").is(":focus")) {
           scroll(-527)
       }
   } else if (e.keyCode == 83) {
       if (!$("#search-story").is(":focus")) {
           scroll(527)
       }
   }
  }, false);
 })();

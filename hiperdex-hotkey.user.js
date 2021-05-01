// ==UserScript==
// @name         hiperdex-hotkey
// @version      1.0.1
// @description  hotkey for hiperdex
// @author       Madagambada
// @namespace    https://github.com/Madagambada
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/hiperdex-hotkey.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/hiperdex-hotkey.user.js
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @match        https://hiperdex.com/manga/*/*/
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle("html {  scroll-behavior: smooth;  }");

 var next = $(".btn.next_page")[0];
 var prev = $(".btn.prev_page")[0];

function scroll(var1) {
      var n = document.scrollingElement;
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
 
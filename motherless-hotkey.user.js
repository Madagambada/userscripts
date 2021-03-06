// ==UserScript==
// @name        motherless-hotkey
// @version     1.0.0
// @match       https://motherless.com/G*/*
// @match       https://motherless.com/g/*/*
// @description Better motherless navigation
// @author      Madagambada
// @require     https://code.jquery.com/jquery-3.6.0.min.js
// @updateURL   https://github.com/Madagambada/userscripts/raw/master/motherless-hotkey.user.js
// @downloadURL https://github.com/Madagambada/userscripts/raw/master/motherless-hotkey.user.js
// ==/UserScript==

if (RegExp('motherless.com/G*/*').test(window.location.href)) {
 var NGaI = $("a:contains('Next →')");
 var PGaI = $("a:contains('← Previous')");
 (function() {
  document.addEventListener('keydown', function(e) {
   if (e.keyCode == 99) {
    window.location = NGaI[0].href;
   } else if (e.keyCode == 97) {
    window.location = PGaI[0].href;
   }
  }, false);
 })();
}

if (RegExp('motherless.com/g/*/*').test(window.location.href)) {
 var NGr = $("a:contains('Next Group')");
 (function() {
  document.addEventListener('keydown', function(e) {
   if (e.keyCode == 99) {
    window.location = NGr[0].href;
   } else if (e.keyCode == 97) {
    window.history.back();
   }
  }, false);
 })();
}

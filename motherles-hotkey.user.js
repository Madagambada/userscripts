// ==UserScript==
// @name        motherles-hotkey
// @version     0.0.0.9a
// @include     https://motherless.com*
// @description Better motherles navigation
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @updateURL   https://github.com/Madagambada/userscripts/raw/master/motherles-hotkey.user.js
// @downloadURL https://github.com/Madagambada/userscripts/raw/master/motherles-hotkey.user.js
// ==/UserScript==

if (RegExp('motherless.com/*/*').test(window.location.href)) {
 var NGaI = $("a:contains('Next →')");
 var PGaI = $("a:contains('← Previous')");
 (function() {
  document.addEventListener('keydown', function(e) {
   if (e.keyCode == 39 || e.keyCode == 68) {
    window.location = NGaI[0].href;
   } else if (e.keyCode == 37 || e.keyCode == 65) {
    window.location = PGaI[0].href;
   }
  }, false);
 })();
}

if (RegExp('motherless.com/g/*/*').test(window.location.href)) {
 var NGr = $("a:contains('Next Group')");
 (function() {
  document.addEventListener('keydown', function(e) {
   if (e.keyCode == 39 || e.keyCode == 68) {
    window.location = NGr[0].href;
   } else if (e.keyCode == 37 || e.keyCode == 65) {
    window.history.back();
   }
  }, false);
 })();
}

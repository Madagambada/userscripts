// ==UserScript==
// @name        celebmasta-hotkey
// @version     0.0.0.16d
// @include     https://celebmasta.com*
// @description Better celebmasta nvigation
// @author      Madagambada
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @require     https://github.com/js-cookie/js-cookie/releases/download/v2.2.1/js.cookie-2.2.1.min.js
// @updateURL   https://github.com/Madagambada/userscripts/raw/master/celebmasta-hotkey.user.js
// @downloadURL https://github.com/Madagambada/userscripts/raw/master/celebmasta-hotkey.user.js
// ==/UserScript==

// disable popup by click
if (Cookies.get('cj_pu') != 1) {
 Cookies.set('cj_pu', '1');
}

//hide featured article & remove adds by image page
var featured = $("span:contains('Featured')").parent().parent();
featured.toggle();
$("img[alt*='sexy popular local sluts']").parent().empty();
$("img[alt*='girls that want to fuck on snap']").parent().empty();
$("img[alt*='Famous Adult Apps']").parent().empty();

//hotkey stuff
if (RegExp('celebmasta.com/*/*/').test(window.location.href)) {
 var NGrI = $("a:contains('Next Image')");
 var NGaI = $("a:contains('Previous Pic')");
 (function() {
  document.addEventListener('keydown', function(e) {
   if (e.keyCode == 39 || e.keyCode == 68) {
    window.location = NGrI[0].href;
   } else if (e.keyCode == 37 || e.keyCode == 65) {
    window.location = NGaI[0].href;
   }
  }, false);
 })();
}

//hotkey stuff 2
if ((RegExp('celebmasta.com').test(window.location.href)) || (RegExp('celebmasta.com/page/*').test(window.location.href))) {
 var NP = $("a:contains('Next page')");
 var PP = $("a:contains('Previous page')");
 (function() {
  document.addEventListener('keydown', function(e) {
   if (e.keyCode == 39 || e.keyCode == 68) {
    window.location = NP[0].href;
   } else if (e.keyCode == 37 || e.keyCode == 65) {
    window.location = PP[0].href;
   } else if (e.keyCode == 96) {
    featured.toggle();
   }
  }, false);
 })();
}

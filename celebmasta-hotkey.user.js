// ==UserScript==
// @name        celebmasta-hotkey
// @version     0.0.0.10a
// @include     https://celebmasta.com*
// @description Better celebmasta nvigation
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @require     https://raw.githubusercontent.com/js-cookie/js-cookie/master/src/js.cookie.js
// @updateURL   https://github.com/Madagambada/userscripts/raw/master/celebmasta-hotkey.user.js
// @downloadURL https://github.com/Madagambada/userscripts/raw/master/celebmasta-hotkey.user.js
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @grant       GM_listValues
// @grant       GM_addValueChangeListener
// @grant       GM_openInTab
// @grant       GM_xmlhttpRequest
// @grant       GM.getValue
// @grant       GM.setValue
// @grant       GM.deleteValue
// @grant       GM.listValues
// @grant       GM.openInTab
// @grant       GM.xmlHttpRequest
// ==/UserScript==

//--- contains is case-sensitive.
//console.log(RegExp('.com/$').test(window.location.href));
//console.log(RegExp('celebmasta.com/page/*').test(window.location.href));
//console.log(RegExp('celebmasta.com/*\d/*/$').test(window.location.href));

var FEATURED1 = $( "article[class*='sticky category-celeb-nudes']" );
var FEATURED2 = $( "article[class*='sticky category-youtubers']" );

FEATURED1.toggle();
FEATURED2.toggle();

if (RegExp('celebmasta.com/*/*/').test(window.location.href))  {
var NGrI = $("a:contains('Next Image')");
var NGaI = $("a:contains('Previous Pic')");
(function(){
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 39 || e.keyCode == 68) {
   window.location = NGrI[0].href;
  }
  else if (e.keyCode == 37 || e.keyCode == 65) {
   window.location = NGaI[0].href;
  }
}, false);
})();}

//if ((RegExp('celebmasta.com/page/*').test(window.location.href)) || (RegExp('celebmasta.com').test(window.location.href))) {
if ((RegExp('celebmasta.com').test(window.location.href)) || (RegExp('celebmasta.com/page/*').test(window.location.href))) {
var NP = $("a:contains('Next page')");
var PP = $("a:contains('Previous page')");
Cookies.set('cj_pu', '1');
  
(function(){
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 39 || e.keyCode == 68) {
   window.location = NP[0].href;
  }
  else if (e.keyCode == 37 || e.keyCode == 65) {
   window.location = PP[0].href;
  }
   else if (e.keyCode == 38) {
   FEATURED1.toggle();
   FEATURED2.toggle();

  } 
}, false);
})();}

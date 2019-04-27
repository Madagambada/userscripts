// ==UserScript==
// @name        celebmasta-hotkey
// @version     0.0.0.8
// @include     https://celebmasta.com*
// @description Better celebmasta nvigation
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js
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

(function(){
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 39 || e.keyCode == 68) {
   window.location = NP[0].href;
  }
  else if (e.keyCode == 37 || e.keyCode == 65) {
   window.location = PP[0].href;
  }
}, false);
})();}

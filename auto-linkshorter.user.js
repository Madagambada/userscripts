// ==UserScript==
// @name         auto-linkshorter
// @version      0.0.0.3k
// @include        http://*
// @include        https://*
// @description  auto-linkshorter
// @author       Madagambada
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/auto-linkshorter.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/auto-linkshorter.user.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function() {
 if (RegExp('cpmlink.net/*').test(window.location.href)) {
  setTimeout(cpmlink, 3000);
 }
 if (RegExp('gusimp.net/ad*').test(window.location.href)) {
  console.log("test")
 } else if (RegExp('gusimp.net/*').test(window.location.href)) {
  setTimeout(adfly, 9500);
 }
if ($("title:contains('Free URL shorten service - ouo.press')").length) {
  setTimeout(ouo, 4000);
 }

if ($("title:contains('exe.io')").length) {
  if ($(".link_ready")[0]) {
   setTimeout(exeio, 8000);
  } else {
   setTimeout(exeio, 500);
  }
 }
 if ($("title:contains('GPlinks')").length) {
  if ($("span:contains(' SUBSCRIBE ')").length) {
  } else if ($("h4:contains('Your link is almost ready.')").length) {
   if ($('#countdown').hover().length = 1) {
    setTimeout(function() {
     setTimeout(gplinks, 500);
    }, 16500)
   }
  }
  else {
   setTimeout(gplinks, 500);
  }
 }
})();

function cpmlink() {
 var a_href = $("a:contains('Get Link')").attr('href');
 window.location = a_href
}

function adfly() {
 var a_href = $("a[class*='mwButton']").attr('href');
 window.location = a_href
}

function ouo() {
 $("#btn-main").click();
}

function exeio() {
 if ($(".link_ready")[0]) {
  $('.link_ready:first').mouseenter().mouseleave();
  window.location = $(".procced").children().attr('href')
 }
 $("#invisibleCaptchaShortlink").click();

}

function gplinks() {
    console.log("test2")

 if ($("h4:contains('Your link is almost ready.')").length) {
  var a_href = $("a[class*='btn btn-success btn-lg get-link']").attr('href');
  window.location = a_href
 } else {
  $("button[class*='btn btn-primary']").click();
 }
}

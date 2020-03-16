// ==UserScript==
// @name         auto-linkshorter
// @version      0.0.0.4p
// @include        http://*
// @include        https://*
// @description  auto-linkshorter
// @author       Madagambada
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/auto-linkshorter.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/auto-linkshorter.user.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function() {
 if (RegExp('cpmlink.net/go/*').test(window.location.href)) {
  setTimeout(cpmlink, 3000);
 }
 if (RegExp('gusimp.net/ad*').test(window.location.href)) {
  console.log("test")
 } else if (RegExp('gusimp.net/*').test(window.location.href)) {
  setTimeout(adfly, 9500);
 }
if (document.title == 'ShrinkEarn') {
  setTimeout(ShrinkEarn, 12000);
 }
if (document.title == 'Free URL shorten service - ouo.press') {
  setTimeout(ouo, 4000);
 }
if (document.title == 'exe.io') {
  if ($(".link_ready")[0]) {
   setTimeout(exeio, 7500);
  } else {
            console.log("test");
   setTimeout(exeio, 1000);
  }
 }
 if (document.title == 'GPlinks') {
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
if (document.title == 'Free Short URL Shortner - Shotly.io') {
  if ($("div:contains('Your link is almost ready.')").length) {
      setTimeout(Shotly, 11000);
  }
 }
    if (document.title == 'Free Short URL Shortner - Shotly.io') {
  if ($("span:contains(' SUBSCRIBE ')").length) {
  } else if ($("h4:contains('Your link is almost ready.')").length) {
   if ($('#countdown').hover().length = 1) {
    setTimeout(function() {
     setTimeout(gplinks, 500);
    }, 16500)
   }
  }
 }
 if (document.title == 'Shrink your URLs and get paid!') {
     window.addEventListener('load', function () {
          if (RegExp('/ad/locked').test(window.location.href)) {
              setTimeout(adfly_block, 9550);
              console.log("block");
 }
          setTimeout(adfly, 7550);
     });
 }
 if (document.title == 'Shorten.sh') {
         setTimeout(shorten, 4550);
 }
})();

function shorten() {
if ($("button:contains('Click here to continue')").length) {
         $("#invisibleCaptchaShortlink").click();
     } else {
           var a_href = $("a:contains('Get Link')").attr('href');
         window.location = a_href
     }

}
function adfly_block() {
 var a_href = $("a:contains('Get Link')").attr('href');
 window.location = a_href
}
function Shotly() {
 var a_href = $("a:contains('Get Link')").attr('href');
 window.location = a_href
}
function cpmlink() {
 var a_href = $("a:contains('Get Link')").attr('href');
 window.location = a_href
}
function ShrinkEarn() {
 if ($("#countdown")[0]) {
  $('.link_ready:first').mouseenter().mouseleave();
  window.location = $("a[class*='btn btn-success btn-lg get-link']").attr('href');
 }
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

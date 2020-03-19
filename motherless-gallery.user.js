// ==UserScript==
// @name         motherless-gallery
// @version      0.0.1.4t
// @description  gallery for motherless.com
// @author       Madagambada
// @namespace    https://github.com/Madagambada
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/motherless-gallery.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/motherless-gallery.user.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @require      https://unpkg.com/nanogallery2@2.4.2/dist/jquery.nanogallery2.min.js
// @resource     css https://unpkg.com/nanogallery2@2.4.2/dist/css/nanogallery2.min.css
// @resource     font https://raw.githubusercontent.com/nanostudio-org/nanogallery2/master/src/css/nanogallery2.woff.css
// @match        https://motherless.com/term/images/*
// @match        https://motherless.com/images/*
// @match        https://motherless.com/live/images
// @match        https://motherless.com/gi/*
// @match        https://motherless.com/GI*
// @match        https://motherless.com/porn/*/images
// @match        https://motherless.com/f/*/images
// @match        https://motherless.com/u/*?t=i
// @match        https://motherless.com/term/videos/*
// @match        https://motherless.com/videos/*
// @match        https://motherless.com/live/videos
// @match        https://motherless.com/gv/*
// @match        https://motherless.com/GV*
// @match        https://motherless.com/porn/*/videos
// @match        https://motherless.com/f/*/videos
// @match        https://motherless.com/u/*?t=v
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

// pre init
var arr2 = [];
var imagesArray2 = [];
var imagesArray3 = [];
var imagesArray4 = [];
var imagesArray5 = [];
var imagesArray6 = [];
var imagesArray7 = [];
var galleryload = 0;
var NP = $("a[rel*='next']").attr('href');
var PP = $("a[rel*='prev']").attr('href');
// set hock on the page
$("div[class*='content-inner']").prepend('<div id="gallery_hook"></div>');

(function() {
 document.addEventListener('keydown', function(e) {
  if (e.keyCode == 96 && galleryload == 0) {
//init
   GM_addStyle(GM_getResourceText("css"));
   GM_addStyle(GM_getResourceText("font"));
   galleryload = 1;
//https://forums.digitalpoint.com/threads/how-to-store-all-img-tags-in-one-array-using-jquery.2547757/
   var imagesArray = $("img[class*='static']").map(function() {
    return $(this).attr('data-strip-src');
   }).get();

if ( (window.location.href.indexOf("/GI") != -1) || (window.location.href.indexOf("/gi/") != -1) || (window.location.href.indexOf("?t=i") != -1) || (window.location.href.indexOf("/images") != -1) ) {
    //https://stackoverflow.com/questions/953311/replace-string-in-javascript-array
console.log("test1");
    for (var u = 0; u < imagesArray.length; u++) {
    imagesArray2[u] = imagesArray[u].replace('thumbs', 'images');
    imagesArray3[u] = imagesArray2[u].replace('thumbs', 'images');
    imagesArray4[u] = imagesArray3[u].replace('https://cdn5-images.motherlessmedia.com/images/', "<a rel='noopener noreferrer' target='_blank' href='https://motherless.com/");
    imagesArray5[u] = imagesArray4[u].replace(/.{16}$/, "'>open site in new tab</a>");
   }

   for (var i = 0; i < imagesArray.length; i++) {
    arr2.push(
        {        src: imagesArray3[i],     srct: imagesArray[i] ,title: imagesArray5[i]});   }
} else {
    for (var u = 0; u < imagesArray.length; u++) {
    imagesArray2[u] = imagesArray[u].replace('strip.jpg', 'small.jpg');
    imagesArray3[u] = imagesArray2[u].replace('thumbs', 'videos');
    imagesArray4[u] = imagesArray3[u].replace('-small.jpg?from_helper', '.mp4');
    imagesArray5[u] = imagesArray4[u].replace('thumbs', 'videos');
    imagesArray6[u] = imagesArray3[u].replace('https://cdn5-videos.motherlessmedia.com/thumbs/', "<a rel='noopener noreferrer' target='_blank' href='https://motherless.com/");
    imagesArray7[u] = imagesArray6[u].replace('-small.jpg?from_helper', "'>open site in new tab</a>");
   }

   for (var i = 0; i < imagesArray.length; i++) {
    arr2.push(
        {        src: imagesArray5[i],     srct: imagesArray2[i], title: imagesArray7[i]    });   }
}

 //https://nanogallery2.nanostudio.org/
   jQuery("#gallery_hook").nanogallery2({
    // ### gallery settings ###
    thumbnailHeight: 150,
    thumbnailWidth: 150,
    allowHTMLinData: true,
    thumbnailLabel: {
          "display": false
        },
    // ### gallery content ###
    items: arr2

   });
  }
 }, false);
})();

(function() {
  document.addEventListener('keydown', function(e) {
   if (e.keyCode == 99) {
       if ($("a[rel*='next']").length) {
           window.location = NP;
       }
   } else if (e.keyCode == 97){
       if ($("a[rel*='prev']").length) {
           window.location = PP;
       }
   } else if (e.keyCode == 98 && galleryload == 1){
       $('#gallery_hook').nanogallery2('displayItem', '0/1');
   }
  }, false);
 })();

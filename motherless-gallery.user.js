// ==UserScript==
// @name         motherless-gallery
// @version      0.0.0.3c
// @description  gallery for motherless
// @author       Madagambada
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/motherless-gallery.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/motherless-gallery.user.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @require      https://gist.githubusercontent.com/Madagambada/bffd6e0bce48cdef6afaa9fce75b494c/raw/def23687ce1ee273f6703dff1ad873cb21cbbbf4/gallery.js
// @require      https://unpkg.com/nanogallery2@2.4.2/dist/jquery.nanogallery2.min.js
// @resource     css https://unpkg.com/nanogallery2@2.4.2/dist/css/nanogallery2.min.css
// @resource     css2 https://raw.githubusercontent.com/nanostudio-org/nanogallery2/master/src/css/nanogallery2.woff.css
// @match        https://motherless.com/term/images/*
// @match        https://motherless.com/images/*
// @match        https://motherless.com/live/images
// @match        https://motherless.com/gi/*
// @match        https://motherless.com/GI*
// @match        https://motherless.com/porn/*/images
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==
var arr2 = []
var imagesArray2 = [];
var imagesArray3 = [];
$("div[class*='content-inner']").prepend('<div id="gallery_hook"></div>');
var NP = $("a:contains('NEXT »')");
var PP = $("a:contains('« PREV')");

(function() {
 document.addEventListener('keydown', function(e) {
  if (e.keyCode == 96) {
//init
   GM_addStyle(GM_getResourceText("css"));
   GM_addStyle(GM_getResourceText("css2"));

//https://forums.digitalpoint.com/threads/how-to-store-all-img-tags-in-one-array-using-jquery.2547757/
   var imagesArray = $("img[class*='static']").map(function() {
    return $(this).attr('data-strip-src');
   }).get();

//https://stackoverflow.com/questions/953311/replace-string-in-javascript-array
     for (var u = 0; u < imagesArray.length; u++) {
    imagesArray2[u] = imagesArray[u].replace('thumbs', 'images');
    imagesArray3[u] = imagesArray2[u].replace('thumbs', 'images');
   }

   for (var i = 0; i < imagesArray.length; i++) {
    arr2.push(
        {        src: imagesArray3[i],     srct: imagesArray[i]    });   }

 //https://nanogallery2.nanostudio.org/

   jQuery("#gallery_hook").nanogallery2({
    // ### gallery settings ###
    thumbnailHeight: 150,
    thumbnailWidth: 150,

    // ### gallery content ###
    items: arr2

   });
  }
 }, false);
})();

(function() {
  document.addEventListener('keydown', function(e) {
   if (e.keyCode == 99) {
    window.location = NP[0].href;
   } else if (e.keyCode == 97){
       window.location = PP[0].href;
   } else if (e.keyCode == 98){
       $('#gallery_hook').nanogallery2('displayItem', '0/1');
   }
  }, false);
 })();


// ==UserScript==
// @name         motherles-gallery
// @version      0.0.0.1b
// @description  some shitty gallery
// @author       Madagambada
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/motherles-gallery.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/motherles-gallery.user.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @require      https://gist.githubusercontent.com/Madagambada/bffd6e0bce48cdef6afaa9fce75b494c/raw/def23687ce1ee273f6703dff1ad873cb21cbbbf4/gallery.js
// @require      https://unpkg.com/nanogallery2@2.4.2/dist/jquery.nanogallery2.min.js
// @resource     css https://unpkg.com/nanogallery2@2.4.2/dist/css/nanogallery2.min.css
// @resource     css2 https://raw.githubusercontent.com/nanostudio-org/nanogallery2/master/src/css/nanogallery2.woff.css
// @match        https://motherless.com/term/images/*
// @match        https://motherless.com/images/*
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==
var arr2 = []
var imagesArray2 = [];
var imagesArray3 = [];


(function() {
 document.addEventListener('keydown', function(e) {
  if (e.keyCode == 96) {
//init
   GM_addStyle(GM_getResourceText("css"));
   GM_addStyle(GM_getResourceText("css2"));
   jQuery("div[class*='text-center']").append(' <div id="gallery_hook"></div>');

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

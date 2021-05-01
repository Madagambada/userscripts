// ==UserScript==
// @name         thebarchive-gallery
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Gallery for thebarchive
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://unpkg.com/nanogallery2/dist/jquery.nanogallery2.min.js
// @require      https://unpkg.com/preload-it
// @resource     css https://unpkg.com/nanogallery2/dist/css/nanogallery2.min.css
// @resource     font https://raw.githubusercontent.com/nanostudio-org/nanogallery2/master/src/css/nanogallery2.woff.css
// @author       Madagambada
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/thebarchive-gallery.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/thebarchive-gallery.user.js
// @match        https://thebarchive.com/*/thread/*
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

// pre init
const preload = Preload();
var final = [];
var data_url = [];
var title = [];
var galleryload = 0;
var NP = $("a[rel*='next']").attr('href');
var PP = $("a[rel*='prev']").attr('href');
// set hock on the page
$("section[class*='section_title']").prepend('<div id="gallery_hook"></div>');

(function() {
preload.fetch([
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg'
]).then(items => {
  // use either a promise or 'oncomplete'
  console.log(items);
});
})();


(function() {
	document.addEventListener('keydown', function(e) {
		if (e.keyCode == 96 && galleryload == 0) {
			//init
			GM_addStyle(GM_getResourceText("css"));
			GM_addStyle(GM_getResourceText("font"));
			galleryload = 1;

			//https://forums.digitalpoint.com/threads/how-to-store-all-img-tags-in-one-array-using-jquery.2547757/
			var tumb = $("div[class*='thread_image_box']").children().children().map(function() {
				return $(this).attr('src');
			}).get();

            var imagesArray = $("div[class*='thread_image_box']").children().map(function() {
				return $(this).attr('href');
			}).get();

            var tamplate1 = "<a rel='noopener noreferrer' target='_blank' href='";
            var tamplate2 = "'>open site in new tab</a>";

            for (var i = 0; i < imagesArray.length; i++) {
                //imagesArray[i] = imagesArray[i].replace('attachment', 'https://forum.oneclickchicks.com/attachment');
                //title[i] = tamplate1 + imagesArray[i] + tamplate2;
            }
			//console.log(imagesArray)
            preload.fetch(imagesArray);

            for (var p = 0; p < imagesArray.length; p++) {
				final.push({
					src: imagesArray[p],
					srct: tumb[p],
					title: title[p]
				});
			}

			//https://nanogallery2.nanostudio.org/
			jQuery("#gallery_hook").nanogallery2({
				// ### gallery settings ###
				thumbnailHeight: 150,
				thumbnailWidth: 150,
				allowHTMLinData: true,
				viewerGallery: "none",
				viewerTools: {
					topRight: 'label, rotateLeft, rotateRight, fullscreenButton, closeButton'
				},
				thumbnailLabel: {
					"display": false
				},
				// ### gallery content ###
				items: final
			});
		}
	}, false);
})();

(function() {
	document.addEventListener('keydown', function(e) {
        if (e.keyCode == 98 && galleryload == 1) {
			if (window.location.href.search("#nanogallery/gallery_hook/0/") > 1) {
				$('#gallery_hook').nanogallery2('closeViewer');
			}
			$('#gallery_hook').nanogallery2('displayItem', '0/1');
		}
	}, false);
})();

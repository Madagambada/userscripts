// ==UserScript==
// @name         archived.moe-gallery
// @version      1.0.1
// @description  View thread images in a gallery
// @author       Madagambada
// @namespace    https://github.com/Madagambada
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/archived.moe-gallery.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/archived.moe-gallery.user.js
// @match        https://archived.moe/*/thread/*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://unpkg.com/nanogallery2/dist/jquery.nanogallery2.min.js
// @resource     css https://unpkg.com/nanogallery2/dist/css/nanogallery2.min.css
// @resource     font https://raw.githubusercontent.com/nanostudio-org/nanogallery2/master/src/css/nanogallery2.woff.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

// pre init
var final = [];
var tumb = [];
var data_url = [];
var galleryload = 0;
$("div[class*='js_hook_realtimethread']").prepend('<div id="gallery_hook"></div>');

(function() {
	document.addEventListener('keydown', function(e) {
		if (e.keyCode == 96 && galleryload == 0) {
            //init
			GM_addStyle(GM_getResourceText("css"));
			GM_addStyle(GM_getResourceText("font"));
			galleryload = 1;
			//https://forums.digitalpoint.com/threads/how-to-store-all-img-tags-in-one-array-using-jquery.2547757/
			var imagesArray = $("img[class*='post_image']").map(function() {
				return $(this).attr('src');
			}).get();
			//filter

            for (var i = 0; i < imagesArray.length; i++) {
				tumb[i] = imagesArray[i];
				imagesArray[i] = imagesArray[i].replace('archived.moe/files/', 'thebarchive.com/');
                imagesArray[i] = imagesArray[i].replace('s.', '.');
                imagesArray[i] = imagesArray[i].replace('thumb', 'full_image');
            }
            for (var p1 = 0; p1 < imagesArray.length; p1++) {
                var anfang = imagesArray[p1].indexOf("/", 34);
                var ende = imagesArray[p1].split("").reverse().join("").indexOf("/");
                var leftover = imagesArray[p1].length - ende;
                if(anfang != -1) { // if there is a fifth comma
                    imagesArray[p1] = imagesArray[p1].substr(0, anfang + 1) + imagesArray[p1].substr(leftover); // then remove it
                }
			}

			for (var p = 0; p < imagesArray.length; p++) {
				final.push({
					src: imagesArray[p],
					srct: tumb[p],
					title: tumb[p]
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
					topRight: 'rotateLeft, rotateRight, fullscreenButton, closeButton'
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

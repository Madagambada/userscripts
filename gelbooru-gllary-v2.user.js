// ==UserScript==
// @name         Gelbooru Gallary V2
// @version      1.0
// @description  Gelbooru Gallary view
// @author       Madagambada
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/gelbooru-gllary-v2.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/gelbooru-gllary-v2.user.js
// @match        https://gelbooru.com/index.php?page=post&s=list*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gelbooru.com
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://unpkg.com/nanogallery2/dist/jquery.nanogallery2.min.js
// @resource     css https://unpkg.com/nanogallery2/dist/css/nanogallery2.min.css
// @resource     font https://raw.githubusercontent.com/nanostudio-org/nanogallery2/master/src/css/nanogallery2.woff.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

var ThumbnailArray = [];
var ImageArray = [];
var ImageSiteArray = [];
var titleurl = [];
var final = [];
var tamplate1 = "<a rel='noopener noreferrer' target='_blank' href='";
var tamplate2 = "'>open site in new tab</a>";
var ready = 0;

// set hock on the page
jQuery("div[class*='pagination']").prepend('<div id="gallery_hook"></div>');

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

(function() {
    console.log();
    GM_addStyle(GM_getResourceText("css"));
    GM_addStyle(GM_getResourceText("font"));

    for (var i = 0; i < $(".thumbnail-preview").length; i ++) {
        var tmp = $($(".thumbnail-preview")[i]).children().children().attr("src")
        ThumbnailArray.push(tmp);
        ImageArray.push("");
        titleurl.push("");
    }

    for (var i = 0; i < ThumbnailArray.length; i++) {
        var tmp = $($(".thumbnail-preview")[i]).children().attr("href")
        ImageSiteArray.push(tmp);
    }

    for (var i = 0; i < ThumbnailArray.length; i++) {
        ajax_call(ImageSiteArray[i], i);
    }
    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 99) { // 3
            window.location = $('a[alt="next"]').attr("href");
        } else if (e.keyCode == 97) { // 1
            for (var i = 0; i < $('#paginator').children().length; i++) {
                if ($('#paginator').children()[i].localName == "b" && i != 0) {
                    var asd = $('#paginator').children()[i-1];
                    window.location = String(asd);
                }
            }
        } else if (e.keyCode == 98 && ThumbnailArray.length == final.length) { // 2
            if (window.location.href.search("#nanogallery/gallery_hook/0/") > 1) {
                $('#gallery_hook').nanogallery2('closeViewer');
            }
            $('#gallery_hook').nanogallery2('displayItem', '0/1');
        }
    }, false);

})();

var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

function ajax_call(url, nr) {
	return new Promise(function(resolve, reject) {
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if(this.readyState == 4) {
				if(this.status == 200) {
                    const responseDocument = new DOMParser().parseFromString(xhttp.responseText, "text/html");
                    var data = xhttp.responseText.split('" target="_blank" rel="noopener" style="font-weight: bold;">Original image')[0]
                    data = data.split('href="').pop()
                    ImageArray[nr] = data;
                    titleurl[nr] = (tamplate1 + url + tamplate2);
                    ready++;
                    if (ready == ThumbnailArray.length) {
                        for (var i = 0; i < ImageArray.length; i++) {
                            final.push({
                                src: ImageArray[i],
                                srct: ThumbnailArray[i],
                                title: titleurl[i]
                            });
                        }


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
preload(ImageArray);
                    }
					return;
                }
				else {
					reject('Call Failed');
                }
			}
		};
		xhttp.open("GET", url);
		xhttp.send();
	});
}

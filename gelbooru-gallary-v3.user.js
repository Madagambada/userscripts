// ==UserScript==
// @name         Gelbooru Gallary V3
// @version      1.0.0
// @description  Gelbooru Gallary view
// @author       Madagambada
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/gelbooru-gallary-v3.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/gelbooru-gallary-v3.user.js
// @match        https://gelbooru.com/index.php?page=post&s=list*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gelbooru.com
// @require      https://code.jquery.com/jquery-3.6.1.min.js
// @require      https://unpkg.com/nanogallery2/dist/jquery.nanogallery2.min.js
// @resource     css https://unpkg.com/nanogallery2/dist/css/nanogallery2.min.css
// @resource     font https://raw.githubusercontent.com/nanostudio-org/nanogallery2/master/src/css/nanogallery2.woff.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

var api_Credentials = "";
var page = 0;
var currenturl_split;
var lightboxImgNr = 1;

var paginator = jQuery("#paginator").children();

var search = $("#tags-search");


if (window.location.href.includes('&pid=')) {
    currenturl_split = window.location.href.split('&pid=')

} else {
    currenturl_split = window.location.href + '&pid=0';
    currenturl_split = currenturl_split.split('&pid=');
}
currenturl_split = parseFloat(currenturl_split[1]);
page = currenturl_split*1.0/42;

var tags = (window.location.search.split('&tags='))[1].split('&');
if (tags[0] == "all") {
    tags[0] = "";
}

jQuery("div[class*='thumbnail-container']").parent().prepend('<div id="gallery_hook"></div>');
jQuery("div[class*='thumbnail-container']").remove();

get_data();

function get_data() {
    GM_addStyle(GM_getResourceText("css"));
    GM_addStyle(GM_getResourceText("font"));
    ajax_call("index.php?page=dapi&s=post&q=index&pid=" + page + "&tags=" + tags[0] + "&limit=42&json=1" + api_Credentials);
};

function ajax_call(url) {
    return new Promise(function(resolve, reject) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4) {
                if(this.status == 200) {
                    //console.log(xhttp.responseText);
                    var obj = jQuery.parseJSON( xhttp.responseText );
                    var file_url = [], preview_url = [], titleurl = [], final = [];
                    for (var i = 0; i < obj.post.length;i++) {
                        file_url.push(obj.post[i].file_url);
                        preview_url.push(obj.post[i].preview_url);
                        titleurl.push((obj.post[i].id).toString());
                    }
                    for (var i = 0; i < file_url.length; i++) {
                        final.push({
                            src: file_url[i],
                            srct: preview_url[i],
                            title: titleurl[i]
                        });
                    }

                    jQuery("#gallery_hook").nanogallery2({
                        thumbnailHeight: 150,
                        thumbnailWidth: 150,
                        allowHTMLinData: true,
                        viewerGallery: "none",
                        viewerTools: {
                            topRight: 'custom1, custom2, custom3, rotateLeft, rotateRight, fullscreenButton, closeButton'
                        },
                        icons:{
                            viewerCustomTool1: '❤️',
                            viewerCustomTool2: '👍',
                            viewerCustomTool3: 'open site in new tab'
                        },
                        fnImgToolbarCustClick: myToolbarCustClick,
                        thumbnailLabel: {
                            "display": false
                        },
                        items: final
                    });
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

function myToolbarCustClick(customElementName, $customIcon, item) {
    if( customElementName == 'custom1' ) {
        addFav(item.title);
        post_vote(item.title, 'up');
    } else if (customElementName == 'custom2') {
        post_vote(item.title, 'up');
    } else if (customElementName == 'custom3') {
        window.open("https://gelbooru.com/index.php?page=post&s=view" + "&tags=" + tags[0] + "&id=" + item.title, '_blank');
    }
}

(function() {
    $(document).keydown(function(data) {
        if (!$(search).is(':focus')) {
            if (data.code == "Numpad1") {
                for (var i = 0; i < paginator.length; i++) {
                    if(paginator[i].localName == "b" && (i != 0)) {
                        window.location = paginator[i - 1].href;
                    }
                }
            } else if (data.code == "Numpad3") {
                for (var i = 0; i < paginator.length; i++) {
                    if(paginator[i].localName == "b" && (i + 1 != paginator.length)) {
                        window.location = paginator[i + 1].href;
                    }
                }
            } else if (data.code == "Numpad0") {
                if ($("#gallery_hook").nanogallery2('data').lightbox.viewerDisplayed) {
                    var tmp = (document.location.href).split('/')
                    lightboxImgNr = tmp[tmp.length -1];
                    $('#gallery_hook').nanogallery2('closeViewer');
                } else {
                    $('#gallery_hook').nanogallery2('displayItem', '0/' + lightboxImgNr);
                }
            }
        }
    });
})();

// ==UserScript==
// @name         Revert Youtube Title Translation
// @namespace    https://github.com/Madagambada
// @version      1.0.1
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/revert-youtube-title-translation.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/revert-youtube-title-translation.user.js
// @description  Revert Youtube Title Translation
// @author       Madagambada
// @match        https://www.youtube.com/watch?v=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        none
// ==/UserScript==

waitForKeyElements (
            "h1.title.style-scope.ytd-video-primary-info-renderer"
            , commentCallbackFunction
        );

function commentCallbackFunction (jNode) {
    var search = jQuery('.style-scope.ytd-video-primary-info-renderer');

    for (var i = 0; i < search.length; i++) {
        if (jQuery(search[i]).parent()[0].className == 'title style-scope ytd-video-primary-info-renderer') {
            var title = search[i];
            ajax_call(title);
        }
    }
}


function ajax_call(title) {
	return new Promise(function(resolve, reject) {
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if(this.readyState == 4) {
				if(this.status == 200) {
                    const responseDocument = new DOMParser().parseFromString(xhttp.responseText, "text/html");
                    var data = xhttp.responseText
                    var mySubString = data.substring(
                        data.indexOf("<title>") + 7,
                        data.lastIndexOf("</title>") -10
                    );
                    console.log("Current Title: " + jQuery(title)[0].innerText);
                    jQuery(title)[0].innerText = htmlUnescape(mySubString);
                    document.title = jQuery(title)[0].innerText + " - YouTube";
                    console.log("Changed to: " + jQuery(title)[0].innerText);
					return;
                }
				else {
					reject('Call Failed');
                }
			}
		};
		xhttp.open("GET", window.location);
		xhttp.send();
	});
}

function htmlUnescape(str){
    return str
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
}

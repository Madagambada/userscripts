// ==UserScript==
// @name         Revert Youtube Title Translation
// @namespace    https://github.com/Madagambada
// @version      1.0.3
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/revert-youtube-title-translation.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/revert-youtube-title-translation.user.js
// @description  Revert Youtube Title Translation
// @author       Madagambada
// @include      https://www.youtube.com/watch*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==

var title = "";
var timer = 0;

changeTitle();

let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl && url.includes("/watch")) {
    lastUrl = url;
    title = "";
    ajaxCall();
    var checkExist2 = setInterval(function() {
        if ($('yt-formatted-string.style-scope.ytd-video-primary-info-renderer').length > 0 && title != "") {
            for (var i = 0; i < $('yt-formatted-string.style-scope.ytd-video-primary-info-renderer').length; i++) {
                if (jQuery($('yt-formatted-string.style-scope.ytd-video-primary-info-renderer')[i]).parent()[0].className == 'title style-scope ytd-video-primary-info-renderer') {
                    var classTitle = $('yt-formatted-string.style-scope.ytd-video-primary-info-renderer')[i];
                    clearInterval(checkExist2);
                    console.log("Current Title: " + classTitle.innerText);
                    classTitle.innerText = title;
                    document.title = title + " - YouTube";
                    console.log("Changed to: " + title);
                    doubleChecker(title, classTitle);
                    title = "";
                }
            }
        }
    }, 100); // check every 100ms
  }
}).observe(document, {subtree: true, childList: true});

function changeTitle(){
    ajaxCall();
    var checkExist1 = setInterval(function() {
        if ($('yt-formatted-string.style-scope.ytd-video-primary-info-renderer').length > 0 && title != "") {
            for (var i = 0; i < $('yt-formatted-string.style-scope.ytd-video-primary-info-renderer').length; i++) {
                if (jQuery($('yt-formatted-string.style-scope.ytd-video-primary-info-renderer')[i]).parent()[0].className == 'title style-scope ytd-video-primary-info-renderer') {
                    clearInterval(checkExist1);
                    var classTitle = $('yt-formatted-string.style-scope.ytd-video-primary-info-renderer')[i];
                    console.log("Current Title: " + classTitle.innerText);
                    classTitle.innerText = title;
                    document.title = title + " - YouTube";
                    console.log("Changed to: " + title);
                    doubleChecker(title, classTitle);
                    title = "";
                }
            }
        }
    }, 100); // check every 100ms
}

function doubleChecker(str, cl) {
    var checkExist3 = setInterval(function() {
        timer++;
        if (timer >= 50) {
            clearInterval(checkExist3);
            timer = 0;
        }
        if (cl.innerText.length != str.length) {
            clearInterval(checkExist3);
            timer = 0;
            $(cl).empty();
            console.log("(Fix)Current Title: " + cl.innerText);
            cl.innerText = str;
            document.title = str + " - YouTube";
            console.log("(Fix)Changed to: " + str);
        }
    }, 100); // check every 100ms
}

function ajaxCall() {
	return new Promise(function(resolve, reject) {
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if(this.readyState == 4) {
				if(this.status == 200) {
                    var mySubString = xhttp.responseText.substring(
                        xhttp.responseText.indexOf("\"og:title\" content=\"") + 20,
                        xhttp.responseText.lastIndexOf("meta property=\"og:image\"") -3
                    );
                    title = htmlUnescape(mySubString);
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

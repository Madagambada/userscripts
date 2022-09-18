// ==UserScript==
// @name         ok-cp
// @author       Madagambada
// @description  get user id
// @namespace    https://github.com/Madagambada
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/ok-cp.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/ok-cp.user.js
// @version      1.0.0
// @author       Madagambada
// @match        https://ok.ru/live/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ok.ru
// @require      https://code.jquery.com/jquery-3.6.1.min.js
// @connect      192.168.1.94
// @grant        GM_xmlhttpRequest
// ==/UserScript==

var currenturl_split;

var btn1 = document.createElement("button");
btn1.innerHTML = "Check";
btn1.className = "btn1";
btn1.onclick = btn1Callback;

var btn2 = document.createElement("button");
btn2.innerHTML = "Add<br>";
btn2.className = "btn2";
btn2.onclick = btn2Callback;

if (window.location.href.includes('profile')) {
    currenturl_split = window.location.href.split('profile/')[1];
    $('.channel-panel.__live')[0].appendChild(btn1);
    $('.channel-panel.__live')[0].appendChild(btn2);
    addGlobalStyle('.btn1 {margin-right: 25px; margin-top: 5px;}');
} else {
    currenturl_split = $('.js-video-album-link')[0].href.split('profile/')[1]
    $('.ucard')[0].appendChild(btn1);
    $('.ucard')[0].appendChild(btn2);
    addGlobalStyle('.btn1 {margin-right: 25px; margin-top: 5px;}');
}

function btn1Callback() {
    ajax_call(btn1, ("c " + currenturl_split));
}

function btn2Callback() {
    ajax_call(btn2, ("a " + currenturl_split));
}

function ajax_call(btn, command) {
    return new Promise(function(resolve, reject) {
        GM_xmlhttpRequest({
            method: "POST",
            data: command,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "http://192.168.1.94:34568",
            onload: function(response) {
                console.log(response.responseText);
                btn.innerHTML = response.responseText;
            }
        });
    });
}

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

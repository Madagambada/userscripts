// ==UserScript==
// @name         ok.ru-user-id
// @version      1.0.1
// @author       Madagambada
// @description  get user id
// @namespace    https://github.com/Madagambada
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @match        https://ok.ru/live/*
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/ok.ru-user-id.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/ok.ru-user-id.user.js
// @grant        none
// ==/UserScript==

(function() {
    var addr = $("a[class*='js-video-album-link']").attr("href");
    $("div[class*='vp-layer-info_cnt']").prepend("<p>"+addr+ "<hr>" + document.title + "</p>");
    console.log(addr);
    console.log(document.title);
})();

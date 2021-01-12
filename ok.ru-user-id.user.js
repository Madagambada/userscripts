// ==UserScript==
// @name         ok.ru-user-id
// @version      1.0.0
// @author       Madagambada
// @description  get user id
// @namespace    https://github.com/Madagambada
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
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

// ==UserScript==
// @name         kimochi.info-dlsite-link
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @author       Madagambada
// @namespace    https://github.com/Madagambada
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/kimochi.info-dlsite-link.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/kimochi.info-dlsite-link.user.js
// @match        https://kimochi.info/*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @icon         https://www.google.com/s2/favicons?domain=kimochi.info
// @grant        none
// ==/UserScript==

(function() {
    var id = $("#info").children().children()[0].innerText.substring(4);
    var link = `https://www.dlsite.com/maniax/work/=/product_id/${id}.html/`;
    $("#info").children().prepend(`<a href="${link}"style="color:#17a2b8">>View on dlsite.com</a>`)
})();

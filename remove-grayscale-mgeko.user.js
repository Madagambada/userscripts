// ==UserScript==
// @name         mgeko remove grayscale
// @version      1.0.0
// @description  remove grayscale
// @author       Madagambada
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/remove-grayscale-mgeko.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/remove-grayscale-mgeko.user.js
// @match        https://www.mgeko.cc/*
// @icon         https://www.mgeko.cc/static/img/favico.ico
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

(function() {
    GM_addStyle("body.nightmode .novel-cover img {    -webkit-filter: grayscale(0%) opacity(100%);    filter: grayscale(0%) opacity(100%)} ");
    GM_addStyle("body.nightmode .post-message  div {    -webkit-filter: grayscale(0%) opacity(100%);    filter: grayscale(0%) opacity(100%)} ");
})();

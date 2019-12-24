// ==UserScript==
// @name         auto-linkshorter
// @version      0.0.0.2g
// @match        https://spiin.xyz/*
// @match        https://cpmlink.net/go/*
// @match        https://ouo.press/*
// @match        https://bcvc.live/*
// @match        http*://gusimp.net/*/*
// @description  auto-linkshorter
// @author       Madagambada
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/auto-linkshorter.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/auto-linkshorter.user.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==
(function() {
if (RegExp('cpmlink.net/*').test(window.location.href)) {
setTimeout(cpmlink, 3000);
}
if (RegExp('gusimp.net/*').test(window.location.href)) {
setTimeout(adfly, 9500);
}
if (RegExp('ouo.press/*').test(window.location.href)) {
setTimeout(ouo, 4000);
}
if (RegExp('bcvc.live/*').test(window.location.href)) {
setTimeout(bcvc, 1000);
}
if (RegExp('spiin.xyz/*').test(window.location.href)) {
if ($(".link_ready")[0]){
setTimeout(exeio, 8000);
} else {
setTimeout(exeio, 500);
}
}


})();

function cpmlink() {
    var a_href = $("a:contains('Get Link')").attr('href');
    window.location = a_href
}
function adfly() {
    var a_href = $("a[class*='mwButton']").attr('href');
    window.location = a_href
}
function ouo() {
    $("#btn-main").click();
}
function bcvc() {
    window.location = document.title
}
function exeio() {
    if ($(".link_ready")[0]){
        $('.link_ready:first').mouseenter().mouseleave();
        window.location = $(".procced").children().attr('href')
    }
    $("#invisibleCaptchaShortlink").click();
}

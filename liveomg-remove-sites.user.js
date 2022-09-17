// ==UserScript==
// @name         liveomg-remove-sites
// @version      1.0.2
// @description  Removes specific sites
// @author       Madagambada
// @namespace    https://github.com/Madagambada
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/liveomg-remove-sites.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/liveomg-remove-sites.user.js
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @include      http://liveomg.com/*
// @match        https://liveomg.co.uk/*
// @grant        none
// ==/UserScript==

setTimeout(function(){
   window.location.reload(1);
}, 10000);

(function() {
    var Array = $("span:contains('crazycash.tv')").map(function() {
        return $(this);
    }).get();
    var Array2 = $("span:contains('bigo.tv')").map(function() {
        return $(this);
    }).get();
    var Array3 = $("span:contains('liveme.com')").map(function() {
        return $(this);
    }).get();
    var Array4 = $("span:contains('twitch.tv')").map(function() {
        return $(this);
    }).get();
    var Array5 = $("span:contains('tiktok.com')").map(function() {
        return $(this);
    }).get();
    var Array6 = $("span:contains('tango.me')").map(function() {
        return $(this);
    }).get();
    //console.log(Array);
    for (var i = 0; i < Array.length; i++) {
        Array[i].parent().parent().remove()
    }
    for (var i = 0; i < Array2.length; i++) {
        Array2[i].parent().parent().remove()
    }
    for (var i = 0; i < Array3.length; i++) {
        Array3[i].parent().parent().remove()
    }
    for (var i = 0; i < Array4.length; i++) {
        Array4[i].parent().parent().remove()
    }
    for (var i = 0; i < Array5.length; i++) {
        Array5[i].parent().parent().remove()
    }
    for (var i = 0; i < Array6.length; i++) {
        Array6[i].parent().parent().remove()
    }
})();

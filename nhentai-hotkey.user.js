// ==UserScript==
// @name        nhentai-hotkey
// @version     1.0.2
// @include     https://nhentai.net/*
// @description nhentai hotkey
// @author      Madagambada
// @require     https://code.jquery.com/jquery-3.6.1.min.js
// @updateURL   https://github.com/Madagambada/userscripts/raw/master/nhentai-hotkey.user.js
// @downloadURL https://github.com/Madagambada/userscripts/raw/master/nhentai-hotkey.user.js
// ==/UserScript==

var search = $(".search").children()[0];
var pagination = $(".pagination").children();

(function() {
    $(document).keydown(function(data) {
        if (!$(search).is(':focus')) {
            if (data.code == "Numpad1") {
                if (pagination.length) {
                    for (var i = 0; i < pagination.length; i++) {
                        if (pagination[i].className == "page current" && i != 0) {
                            window.location = pagination[i - 1].href;
                        }
                    }
                }
            } else if (data.code == "Numpad3") {
                if (pagination.length) {
                    for (var i = 0; i < pagination.length; i++) {
                        if (pagination[i].className == "page current" && i != (pagination.length - 2)) {
                            window.location = pagination[i + 1].href;
                        }
                    }
                }
            } else if (data.code == "KeyR") {
                if ($('#thumbnail-container').length) {
                   window.location = $('.thumb-container').children()[0].href;
                } else if ($('#image-container').length) {
                    window.location = $('.go-back')[0].href;
                }
            }
        }
    });
})();

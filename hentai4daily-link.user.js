// ==UserScript==
// @name         hentai4daily link
// @version      1.0.0
// @description  create link
// @author       Madagambada
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/hentai4daily-link.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/hentai4daily-link.user.js
// @match        https://hentai4daily.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hentai4daily.com
// @require      https://code.jquery.com/jquery-3.7.1.min.js
// @grant        none
// ==/UserScript==

//https://www.dlsite.com
if (!jQuery.isEmptyObject($( "pre:contains('www.dlsite')" )[0])) {

    var link = $( "pre:contains('dlsite')" )[0].innerText

    link = link.split('www.')[1];
    link = 'https://www.' + link

    var htmlLink = '<a href="' + link + '">' + link + '</a>';
    $( "pre:contains('dlsite')" ).prepend(htmlLink);
    $( "a:contains('dlsite')" ).css( "text-decoration", "underline" );
    console.log(link);
}

//https://ci-en.dlsite.com
if (!jQuery.isEmptyObject($( "pre:contains('ci-en.dlsite')" )[0])) {

    var link = $( "pre:contains('dlsite')" )[0].innerText

    link = link.split('ci-en.')[1];
    link = 'https://ci-en.' + link;

    var htmlLink = '<a href="' + link + '">' + link + '</a>';
    $( "pre:contains('dlsite')" ).prepend(htmlLink);
    $( "a:contains('dlsite')" ).css( "text-decoration", "underline" );
    console.log(link);
}

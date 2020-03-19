// ==UserScript==
// @name         nexusmods-auto-download-option
// @version      0.0.0.1f
// @description  auto-download-option
// @author       Madagambada
// @match        https://www.nexusmods.com/*/mods/*?tab=files&file_id=*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/nexusmods-auto-download-option.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/nexusmods-auto-download-option.user.js
// @grant        none
// ==/UserScript==

(function() {
if ( $( "#slowDownloadButton" ).length ){
        setTimeout(start, 1000);
}
})();

function start() {
$("#slowDownloadButton").click();
}

// ==UserScript==
// @name         nexusmods-auto-download-option
// @version      1.0.1
// @description  auto-download-option
// @author       Madagambada
// @match        https://www.nexusmods.com/*/mods/*?tab=files&file_id=*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
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

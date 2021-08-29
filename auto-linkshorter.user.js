// ==UserScript==
// @name         auto-linkshorter
// @author       Madagambada
// @namespace    https://github.com/Madagambada
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/auto-linkshorter.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/auto-linkshorter.user.js
// @version      1.0.0
// @description  auto-linkshorter
// @include      http://*
// @include      https://*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==

var button;
var link;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function start() {
  while(1) {
      if ($("button:contains('Human Verification')").length) {
          button = $("button:contains('Human Verification')");
          button.click();
          console.log(button);
          break;
      }
      if ($(".btn.btn-outline-primary.btn-captcha.m-2").attr('class') == "btn btn-outline-primary btn-captcha m-2"){
          button = $(".btn.btn-outline-primary.btn-captcha.m-2");
          button.click();
          break;
      }
      if ($(".btn.m-2.btn-success").attr('class') == "btn m-2 btn-success"){
          button = $(".btn.m-2.btn-success");
          link = button.attr('href');
          window.location = link
          break;
      }
      if ($(".btn.btn-success.btn-lg.get-link").attr('class') == "btn btn-success btn-lg get-link"){
          button = $(".btn.btn-success.btn-lg.get-link");
          link = button.attr('href');
          window.location = link
          break;
      }
      await sleep(1000);
  }
}

start();

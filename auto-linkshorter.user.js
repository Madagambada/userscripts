// ==UserScript==
// @name         auto-linkshorter
// @author       Madagambada
// @namespace    https://github.com/Madagambada
// @updateURL    https://github.com/Madagambada/userscripts/raw/master/auto-linkshorter.user.js
// @downloadURL  https://github.com/Madagambada/userscripts/raw/master/auto-linkshorter.user.js
// @version      1.0.1
// @description  auto-linkshorter
// @include      http://*
// @include      https://*
// @exclude      https://link1s.com/*
// @exclude      https://tei.ai/*
// @exclude      https://exey.io/*
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
          console.log("1");
          button = $("button:contains('Human Verification')");
          button.click();
          break;
      }
      if ($(".btn.btn-outline-primary.btn-captcha.m-2").attr('class') == "btn btn-outline-primary btn-captcha m-2"){
          console.log("2");
          button = $(".btn.btn-outline-primary.btn-captcha.m-2");
          button.click();
          break;
      }
      if ($(".btn.m-2.btn-success").attr('class') == "btn m-2 btn-success"){
          console.log("3");
          button = $(".btn.m-2.btn-success");
          link = button.attr('href');
          window.location = link
          break;
      }
      if ($(".btn.btn-success.btn-lg.get-link").attr('class') == "btn btn-success btn-lg get-link"){
          console.log("4");

          while (1) {
              if ($(".btn.btn-success.btn-lg.get-link").attr('href').length) {
                  await sleep(1000);
                  break
              }
              await sleep(1000);
          }

          button = $(".btn.btn-success.btn-lg.get-link");
          link = button.attr('href');
          window.location = link
          break;
      }
      if ($(".btn.btn-main.1").attr('class') == "btn btn-main 1"){
          console.log("5");
          button = $(".btn.btn-main.1");
          button.click();
          break;
      }
      if ($(".btn.btn-main").attr('class') == "btn btn-main"){
          console.log("6");
          button = $(".btn.btn-main");
          button.click();
          break;
      }
      if ($(".g-recaptcha.btn.btn-primary").attr('class') == "g-recaptcha btn btn-primary"){
          console.log("7");
          button = $(".g-recaptcha.btn.btn-primary");
          button.click();
          break;
      }
      if ($("#link1s-time:contains('0')").length){
          console.log("8");
          button = $("#link1s-snp").children();
          button.click();
          break;
      }
      if ($(".btn.btn-primary.btn-captcha")[0]){
          console.log("9");
          while (1) {
              if (!$(".btn.btn-primary.btn-captcha").prop("disabled")) {
                  break;
              }
              await sleep(1000);
          }
          button = $(".btn.btn-primary.btn-captcha");
          button.click();
          break;
      }
      if ($(".circle.text")[0]){
          console.log("10");
          while (1) {
              if ($(".circle.text").prop("innerText") == "0") {
                  break;
              }
              await sleep(1000);
          }
          button = $(".getmylink")[1];
          button.click();
          while (1) {
              if ($("button:contains('Download link here')").length) {
                  button = $("button:contains('Download link here')");
                  button.click();
                  break;
              }
              await sleep(1000);
          }
          break;
      }
      if ($(".btn.btn-primary.btn-goo").attr('class') == "btn btn-primary btn-goo"){
          console.log("11");
          button = $(".btn.btn-primary.btn-goo");
          button.click();
          break;
      }
      await sleep(1000);
  }
}

start();

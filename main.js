// ==UserScript==
// @name         禁止点击滚动
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  不要点击后滚动
// @author       dengdx
// @include      https://noveltop.net/*
// @icon         https://www.google.com/s2/favicons?domain=bing.com
// @grant        none

// @run-at       document-end
// ==/UserScript==
(function () {
    "use strict";
    var $ = jQuery;
      $(document).ready(function () {
        $(".manga-reading-list-style .chapter-type-manga .reading-content").off(
            "click"
          );
          $(".chapter-type-text .reading-content").off("click");
    });
  })();
  
/*jslint node: true, esversion: 6, jquery: true */
"use strict";


/**
 * DROPCAPJS PLAYGROUND
 * @version 1.0.0
 * @author Pixels & Bytes
 *
 *         Using Dropcapjs: https://github.com/adobe-webplatform/dropcap.js
 *         Run: browserify dropcaps.js -o bundle.js
 *
 * @requires dropcap.js
 */



$(function () {
  function addSpan() {
    const $elements = $('.post-content, .page-content').find('p:first');
    $elements.html(function (i, html) {
      return html.replace(/^[^a-zA-Z]*([a-zA-Z])/g, '<span class="dropcap">$1</span>');
    });
  }

  function dropcap() {
    const $dropcaps = document.querySelectorAll('.dropcap');
    window.Dropcap.layout($dropcaps, 2);
  }

  addSpan();
  dropcap();
});

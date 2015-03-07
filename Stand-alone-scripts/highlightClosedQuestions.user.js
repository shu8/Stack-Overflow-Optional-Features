// ==UserScript==
// @name         Highlight closed questions
// @namespace    http://stackexchange.com/users/4337810/%E1%94%95%E1%96%BA%E1%98%8E%E1%95%8A
// @version      0.1
// @description  Highlight closed questions when viewing question lists
// @author       ᔕᖺᘎᕊ (http://stackexchange.com/users/4337810/%E1%94%95%E1%96%BA%E1%98%8E%E1%95%8A)
// @match        *://*.stackexchange.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://*.superuser.com/*
// @match        *://*.serverfault.com/*
// @match        *://*.askubuntu.com/*
// @match        *://*.stackapps.com/*
// @match        *://*.mathoverflow.net/*
// @grant        none
// ==/UserScript==

$('.question-summary').each(function() {
    if ($(this).find('.summary h3 a').text().indexOf('[on hold]') > -1 || $(this).find('.summary h3 a').text().indexOf('[duplicate]') > -1) {
       if($('.cp').length) { 
            $(this).find('.cp').css('border', 'blue').css('border-style', 'dotted').css('border-width', 'thin').css('background-color', '#E0E0E0');
            $(this).css('opacity', '0.9');
       } else {
           $(this).find('.votes').css('border', 'blue').css('border-style', 'dotted').css('border-width', 'thin').css('background-color', '#E0E0E0');
           $(this).css('opacity', '0.9');
       }
    }
});

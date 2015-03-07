// ==UserScript==
// @name         Highlight answerer's comments
// @namespace    http://stackexchange.com/users/4337810/%E1%B9%A7%D0%BD%CA%8A%C3%9F
// @version      1.0
// @description  Highlight's the names of answerer's on SE websites
// @author       ṧнʊß (http://stackexchange.com/users/4337810/%E1%B9%A7%D0%BD%CA%8A%C3%9F)
// @require      https://raw.githubusercontent.com/hazzik/livequery/master/dist/jquery.livequery.min.js
// @match        *://*.stackexchange.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://*.superuser.com/*
// @match        *://*.serverfault.com/*
// @match        *://*.askubuntu.com/*
// @match        *://*.stackapps.com/*
// @match        *://*.mathoverflow.net/*
// @grant        none
// ==/UserScript==

function colorAnswerer() {
    $('.answercell').each(function(x, obj) {
        var x = $(this).find('.user-details a').text();
        $('.answer .comment-user').each(function(i) {
            if ($(this).text() == x) { 
                $(this).css('background-color', 'orange');
            }
        });        
    });
}

$(document).ready(function() {
    colorAnswerer();
});   

$('.js-show-link.comments-link').click(function() { 
    setTimeout(function() {
        colorAnswerer();
    }, 500);
});

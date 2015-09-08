// ==UserScript==
// @name         Show comment scores
// @namespace    http://stackexchange.com/users/4337810
// @version      1.0
// @description  Shows your comment and comment reply scores in your profile page
// @author       ᔕᖺᘎᕊ (http://stackexchange.com/users/4337810)
// @match        *://*.stackexchange.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://*.superuser.com/*
// @match        *://*.serverfault.com/*
// @match        *://*.askubuntu.com/*
// @match        *://*.stackapps.com/*
// @match        *://*.mathoverflow.net/*
// @grant        none
// ==/UserScript==

setTimeout(function() {
    var sitename = $(location).attr('hostname').split('.')[0];
    $('.history-table td b a').each(function() {
        id = $(this).attr('href').split('#')[1].split('_')[0].replace('comment', '');
        $(this).after("<span class='showCommentScore' id='"+id+"'>&nbsp;&nbsp;&nbsp;show comment score</span>");
    });    
    $('.showCommentScore').css('cursor', 'pointer').on('click', function() {
        that = $(this);
        $.getJSON("https://api.stackexchange.com/2.2/comments/" + that.attr('id') + "?order=desc&sort=creation&site=" + sitename, function(json) {
            that.html("&nbsp;&nbsp;&nbsp;" + json.items[0].score);
        }); 
    });
}, 500);

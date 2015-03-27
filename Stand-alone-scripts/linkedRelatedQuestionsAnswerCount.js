// ==UserScript==
// @name         Linked questions answer count
// @namespace    http://stackexchange.com/users/4337810/%E1%94%95%E1%96%BA%E1%98%8E%E1%95%8A
// @version      1.0
// @description  Allows you to hover over questions in the sidebar to get their answer count
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

$('.sidebar-linked .linked .spacer a, .sidebar-related .related .spacer a').each(function(i) {
    var id = $(this).attr('href').split('/')[2],
      //id = $(this).attr('href').split('/')[4].split('?')[0]  
        sitename = $(location).attr('hostname').split('.')[0],
        that = $(this);    
    
    if (!isNaN(id)) {
        id = $(this).attr('href').split('/')[4].split('?')[0];
    }
    
    if (i % 2 == 0) { //even only (ie. only for the vote count square box)
        $.getJSON("https://api.stackexchange.com/2.2/questions/" + id + "?order=desc&sort=activity&site=" + sitename, function(json) {
            answers = json.items[0].answer_count;
            text = ' answers';
            if (answers == 1) { text = ' answer'; }
            that.attr('title', answers + text);
        });
    }
});

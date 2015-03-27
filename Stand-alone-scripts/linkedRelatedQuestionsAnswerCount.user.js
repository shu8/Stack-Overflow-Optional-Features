// ==UserScript==
// @name         Show answer count for questions in the sidebar
// @namespace    http://stackexchange.com/users/4337810/%E1%94%95%E1%96%BA%E1%98%8E%E1%95%8A
// @version      1.0
// @description  Shows the answer count for related or linked questions as a tooltip (in the sidebar)
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
    if (!i % 2 == 0) { //odd only (ie. question title)
        var id = $(this).attr('href').split('/')[2],
            sitename = $(location).attr('hostname').split('.')[0],
            that = $(this);

        $.getJSON("https://api.stackexchange.com/2.2/questions/" + id + "?order=desc&sort=activity&site=" + sitename, function(json) {
            answers = json.items[0].answer_count;
            that.attr('title', answers + (answers == 1 ? ' answer' : ' answers'));
        });
    }
});

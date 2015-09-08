// ==UserScript==
// @name         Comment replies
// @namespace    http://stackexchange.com/users/4337810/%E1%94%95%E1%96%BA%E1%98%8E%E1%95%8A
// @version      1.0
// @description  Adds a button to auto-enter the username of a commenter for quick replying!
// @author       ᔕᖺᘎᕊ (http://stackexchange.com/users/4337810/%E1%94%95%E1%96%BA%E1%98%8E%E1%95%8A)
// @match        *://*.stackexchange.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://*.superuser.com/*
// @match        *://*.serverfault.com/*
// @match        *://*.askubuntu.com/*
// @match        *://*.stackapps.com/*
// @match        *://*.mathoverflow.net/*
// ==/UserScript==

setTimeout(function () {
    $('.comment').each(function () {
        if ($('.topbar-links a span:eq(0)').text() != $(this).find('.comment-text a.comment-user').text()) { //make sure the link is not added to your own comments
            $(this).append("<span id='replyLink' title='reply to this user'>&crarr;</span>");
        }
    });

    $('span[id="replyLink"]').css('cursor', 'pointer').on('click', function () {
        parentDiv = $(this).parent().parent().parent().parent();
        textToAdd = '@' + $(this).parent().find('.comment-text a.comment-user').text().replace(/\s/g, "").replace(/♦/, '') + ' '; //eg. @USERNAME [space]

        if (parentDiv.find('textarea').length) {
            parentDiv.find('textarea').append(textToAdd); //add the name
        } else {
            parentDiv.find('a.js-show-link.comments-link').trigger('click'); //show any hidden comments
            parentDiv.next('div').find('a').trigger('click'); //show the textarea
            parentDiv.find('textarea').append(textToAdd); //add the name
        }
    });
}, 500);

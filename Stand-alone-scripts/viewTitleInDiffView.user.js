// ==UserScript==
// @name         View title in diff-view
// @namespace    http://stackexchange.com/users/4337810/
// @version      1.0
// @description  Replaces the title in diff-view to a easier to understand view
// @author       ᔕᖺᘎᕊ (http://stackexchange.com/users/4337810/)
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
    var $questionHyperlink = $('.summary h2 .question-hyperlink').clone(),
        $questionHyperlinkTwo = $('.summary h2 .question-hyperlink').clone(),
        link = $('.summary h2 .question-hyperlink').attr('href'),
        added = ($questionHyperlinkTwo.find('.diff-delete').remove().end().text()),
        removed = ($questionHyperlink.find('.diff-add').remove().end().text());
    
    $('.summary h2 .question-hyperlink').hide();
    $('.summary h2 .question-hyperlink').after("<a href='"+link+"' class='question-hyperlink'><span class='diff-delete'>"+removed+"</span><span class='diff-add'>"+added+"</span></a>");
}, 1000);

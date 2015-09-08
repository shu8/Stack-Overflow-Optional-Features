// ==UserScript==
// @name         Show meta, chat, blog links on hover of StackExchange button
// @namespace    http://stackexchange.com/users/4337810
// @version      1.0
// @description  Adds buttons in the StackExchange button at the top that link to the chat, blog and meta of that site
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
var blogSites = ["math", "serverfault", "english", "stats", "diy", "bicycles", "webapps", "mathematica", "christianity", "cooking", "fitness", "cstheory", "scifi", "tex", "security", "islam", "superuser", "gaming", "programmers", "gis", "apple", "photo", "dba"],
    link,
    blogLink = '//' + 'blog.stackexchange.com';
$('#your-communities-section > ul > li > a').hover(function () {
    if($(this).attr('href').substr(0, 6).indexOf('meta') == -1) {
        link = 'http://meta.'+ $(this).attr('href').substr(2, $(this).attr('href').length-1);
        if(blogSites.indexOf($(this).attr('href').split('/')[2].split('.')[0]) != -1) {
            blogLink = '//' + $(this).attr('href').split('/')[2].split('.')[0] + '.blogoverflow.com';
        }
        
        $(this).find('.rep-score').hide();
        $(this).append('<div class="related-links" style="float: right;">\
                         <a href="'+link+'">meta</a>\
                         <a href="http://chat.stackexchange.com">chat</a>\
                         <a href="'+blogLink+'">blog</a>\
                       </div>');
    }
}, function () {
    $(this).find('.rep-score').show();
    $(this).find('.related-links').remove();
});

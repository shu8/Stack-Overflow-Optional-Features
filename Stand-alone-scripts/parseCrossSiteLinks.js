// ==UserScript==
// @name         Parse cross-site question links
// @namespace    http://stackexchange.com/users/4337810/%E1%94%95%E1%96%BA%E1%98%8E%E1%95%8A
// @version      0.1
// @description  Parses cross-site links on the StackExchange network (eg. http://meta.stackexchange.com/q/251183/260841 --> Parse question links from other SE sites)
// @author       ᔕᖺᘎᕊ (http://stackexchange.com/users/4337810/%E1%94%95%E1%96%BA%E1%98%8E%E1%95%8A)
// @match        *://*.stackexchange.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://*.superuser.com/*
// @match        *://*.serverfault.com/*
// @match        *://*.askubuntu.com/*
// @match        *://*.stackapps.com/*
// @match        *://*.mathoverflow.net/*
// ==/UserScript==

var sites = ['stackexchange', 'stackoverflow', 'superuser', 'serverfault', 'askubuntu', 'stackapps', 'mathoverflow', 'programmers', 'bitcoin'];

$('.post-text a').each(function () {
    var anchor = $(this);
    if (sites.indexOf($(this).attr('href').split('/')[2].split('.')[0]) > -1) { //if the link is to an SE site (not, for example, to google), do the necessary stuff
        var sitename = $(this).attr('href').split('/')[2].split('.')[0],
            id = $(this).attr('href').split('/')[4];
        
        $.getJSON("https://api.stackexchange.com/2.2/questions/" + id + "?order=desc&sort=activity&site=" + sitename, function (json) {
            anchor.html(json.items[0].title); //Get the title and add it in
        });
    }
});

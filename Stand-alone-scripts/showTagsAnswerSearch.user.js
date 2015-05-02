// ==UserScript==
// @name         Show tags for answers when searching
// @namespace    http://stackexchange.com/users/4337810/
// @version      1.1
// @description  Adds the tags to answers whilst searching to provide useful context!
// @author       ᔕᖺᘎᕊ (http://stackexchange.com/users/4337810/)
// @match        *://*.stackexchange.com/search?q=*
// @match        *://*.stackoverflow.com/search?q=*
// @match        *://*.superuser.com/search?q=*
// @match        *://*.serverfault.com/search?q=*
// @match        *://*.askubuntu.com/search?q=*
// @match        *://*.stackapps.com/search?q=*
// @match        *://*.mathoverflow.net/search?q=*
// @grant        none
// ==/UserScript==
var sitename = $(location).attr('hostname').split('.')[0], //sitename for API call
    ids = [],
    idsAndTags = {};

$.each($('div[id*="answer"]'), function() { //loop through all *answers*
    ids.push($(this).find('.result-link a').attr('href').split('/')[2]); //Get the IDs for the questions for all the *answers*
});
$.getJSON("https://api.stackexchange.com/2.2/questions/" + ids.join(';') + "?site=" + sitename, function(json) {
    itemsLength = json.items.length;
    for (i = 0; i < itemsLength; i++) {
        idsAndTags[json.items[i].question_id] = json.items[i].tags;
    }
    console.log(idsAndTags);

    $.each($('div[id*="answer"]'), function() { //loop through all *answers*
        id = $(this).find('.result-link a').attr('href').split('/')[2]; //get their ID
        $that = $(this);
        for (x = 0; x < idsAndTags[id].length; x++) { //Add the appropiate tags for the appropiate answer
            $that.find('.summary .tags').append("<a href='/questions/tagged/" + idsAndTags[id][x] + "' class='post-tag'>" + idsAndTags[id][x] + "</a>"); //add the tags and their link to the answers 
        }
        $that.find('.summary .tags a').each(function() {
            if ($(this).text().indexOf('status-') > -1) { //if it's a mod tag
                $(this).addClass('moderator-tag'); //add appropiate class
            } else if ($(this).text().match(/(discussion|feature-request|support|bug)/)) { //if it's a required tag
                $(this).addClass('required-tag'); //add appropiate class
            }
        });
    });
});

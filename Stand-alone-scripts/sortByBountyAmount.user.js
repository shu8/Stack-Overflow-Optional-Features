// ==UserScript==
// @name         Sort by bounty amount
// @namespace    http://stackexchange.com/users/4337810/%E1%94%95%E1%96%BA%E1%98%8E%E1%95%8A
// @version      1.0
// @description  Allows you to sort by bounty amount
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
if($('.bounty-indicator').length) { //if there is at least one bounty on the page
    $('.question-summary').each(function() {
        bountyAmount = $(this).find('.bounty-indicator').text().replace('+', '');
        $(this).attr('data-bountyamount', bountyAmount); //add a 'bountyamount' attribute to all the questions
    });

    if ($('#question-mini-list').length) { //if on homepage featured tab
        var $wrapper = $('#question-mini-list');
    } else {
        var $wrapper = $('#questions'); //if on questions featured tab
    }

    setTimeout(function() {
        //filter buttons:
        $('.subheader').after('<span>sort by bounty amount:&nbsp;&nbsp;&nbsp;</span><span id="largestFirst">largest first&nbsp;&nbsp;</span><span id="smallestFirst">smallest first</span>');
        
        //Thanks: http://stackoverflow.com/a/14160529/3541881
        $('#largestFirst').css('cursor', 'pointer').on('click', function() { //largest first
            $wrapper.find('.question-summary').sort(function(a, b) {
                return +b.getAttribute('data-bountyamount') - +a.getAttribute('data-bountyamount');
            }).prependTo($wrapper);
        });
        
        //Thanks: http://stackoverflow.com/a/14160529/3541881
        $('#smallestFirst').css('cursor', 'pointer').on('click', function() { //smallest first
            $wrapper.find('.question-summary').sort(function(a, b) {
                return +a.getAttribute('data-bountyamount') - +b.getAttribute('data-bountyamount');
            }).prependTo($wrapper);
        });
    }, 500);
}

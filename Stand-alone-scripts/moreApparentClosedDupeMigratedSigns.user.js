// ==UserScript==
// @name         More apparent, better looking closed/dupe/migrated sign on question pages
// @namespace    http://stackexchange.com/users/4337810/
// @version      1.1
// @description  Make it easier to tell whether a question is closed/a dupe/migrated on SE sites
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
var userscript = function($) {
    $('head').append('<link rel="stylesheet" href="https://rawgit.com/shu8/SE-Answers_scripts/master/dupeClosedMigratedCSS.css" type="text/css" />'); //add the CSS

    var questions = {};

    $.each($('.question-summary'), function() { //Find the questions and add their id's and statuses to an object
        if($(this).find('.summary a:eq(0)').text().trim().substr($(this).find('.summary a:eq(0)').text().trim().length-11) == '[duplicate]') {
            questions[$(this).attr('id').split('-')[2]] = 'duplicate';
            $(this).find('.summary a:eq(0)').text($(this).find('.summary a:eq(0)').text().trim().substr(0, $(this).find('.summary a:eq(0)').text().trim().length-11)); //remove [duplicate]
            
        } else if($(this).find('.summary a:eq(0)').text().trim().substr($(this).find('.summary a:eq(0)').text().trim().length-8) == '[closed]') {
            questions[$(this).attr('id').split('-')[2]] = 'closed';
            $(this).find('.summary a:eq(0)').text($(this).find('.summary a:eq(0)').text().trim().substr(0, $(this).find('.summary a:eq(0)').text().trim().length-8)); //remove [closed]
            
        } else if($(this).find('.summary a:eq(0)').text().trim().substr($(this).find('.summary a:eq(0)').text().trim().length-10) == '[migrated]') {
            questions[$(this).attr('id').split('-')[2]] = 'migrated';
            $(this).find('.summary a:eq(0)').text($(this).find('.summary a:eq(0)').text().trim().substr(0, $(this).find('.summary a:eq(0)').text().trim().length-10)); //remove [migrated]
            
        } else if($(this).find('.summary a:eq(0)').text().trim().substr($(this).find('.summary a:eq(0)').text().trim().length-9) == '[on hold]') {
            questions[$(this).attr('id').split('-')[2]] = 'onhold';
            $(this).find('.summary a:eq(0)').text($(this).find('.summary a:eq(0)').text().trim().substr(0, $(this).find('.summary a:eq(0)').text().trim().length-9)); //remove [on hold]
        }
    });

    $.each($('.question-summary'), function() { //loop through questions
        $that = $(this);
        $.each(questions, function(key, val) { //loop through object of questions closed/dupes/migrated
            if($that.attr('id').split('-')[2] == key) {
                $that.find('.summary a:eq(0)').after("&nbsp;<span class='"+val+"'>&nbsp;"+val+"&nbsp;</span>"); //add appropiate message
            }
        });
    });
};

var el = document.createElement('script');
el.type = 'text/javascript';
el.text = '(' + userscript + ')(jQuery);';
document.head.appendChild(el);

// ==UserScript==
// @name         View revision comments quickly
// @namespace    http://stackexchange.com/users/4337810/
// @version      1.0
// @description  Adds the latest revision's comment as a tooltip for quick and easy viewing
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
function getComment(url, $that) {
    $.get(url, function(responseText, textStatus, XMLHttpRequest) {
        $that.find('.shub-revision-comment').attr('title', $(XMLHttpRequest.responseText).find('.revision-comment:eq(0)')[0].innerHTML);  
    });    
}
 
$('.question, .answer').each(function() {
    if($(this).find('.post-signature').length > 1) {
        var id = $(this).attr('data-questionid') || $(this).attr('data-answerid');
        $(this).find('.post-signature:eq(0)').find('.user-action-time a').wrapInner("<span class='shub-revision-comment'></span>");
        $that = $(this);
        getComment('http://' + $(location).attr('hostname') + '/posts/'+id+'/revisions', $that);        
    }
});

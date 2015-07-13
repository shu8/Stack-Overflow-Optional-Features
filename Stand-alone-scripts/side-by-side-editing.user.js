// ==UserScript==
// @name         Side By Side Editing
// @namespace    http://stackexchange.com/users/4337810/
// @version      1.0
// @description  A userscript that adds the option to have the preview and editor side-by-side when asking/answering questions
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

function sideBySideEditing() {
    $('#sidebar').hide();
    
    $("#content").width(1360);
    $("#post-editor").removeClass("post-editor");  
    $("#post-editor").width(1360);  
    $(".community-option").css("float","right");  
    $(".wmd-container").css("float","right");  
    $(".wmd-preview").css({"clear":"none","margin-left":"20px","float":"left"});  
    $('.wmd-button-bar').css('float', 'none');

    if($(location).attr('href').indexOf('/questions/ask') > -1 ) { //extra CSS for 'ask' page
        $('.wmd-preview').css('margin-top', '20px');
        $('#tag-suggestions').parent().prependTo('.form-submit.cbt');
    }
}

function addButton() {
    setTimeout(function() {
        var sbsBtn = "<li class='wmd-button' title='side-by-side editing' style='left: 500px;'><span id='wmd-sbs-button' style='background-image: none;'>SBS</span></li>";
        $('[id^="wmd-redo-button"]').after(sbsBtn);
        $('#wmd-sbs-button').on('click', function() {
            sideBySideEditing();
        });  
    }, 1000)
}

addButton();

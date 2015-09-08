// ==UserScript==
// @name         Link to questions with author's name
// @namespace    http://stackexchange.com/users/4337810/%E1%94%95%E1%96%BA%E1%98%8E%E1%95%8A
// @version      1.0
// @description  Adds a button to the SE editor toolbar to add a link and automatically insert the author of the question
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
var div = "<div id='addLinkAuthorName' class='wmd-prompt-dialog'> \
            <h5>Insert hyperlink with author's name</h5> \
            <br /> \
            <input id='link' placeholder='http://example.com/ \"optional title\"' size='50'> \
            <input id='addLinkOk' value='OK' type='button' style='margin: 10px; display: inline; width: 7em;'><input id='addLinkCancel' value='Cancel' type='button' style='margin: 10px; display: inline; width: 7em;'> \
           </div>",
    css = {
        "position": "fixed",
        "width": "400px",
        "z-index": "1001",
        "top": "50%",
        "left": "50%",
        "display": "none",
        "margin-top": "-95.5px",
        "margin-left": "-216px"
    };
$('body').append(div);
$('#addLinkAuthorName').css(css);

$('#addLinkAuthorName #addLinkCancel').on('click', function() {
    $(this).parent().hide();
});

$('#addLinkAuthorName #addLinkOk').on('click', function() {
    var textarea = $('#post-editor #wmd-input'),
        link = $('#addLinkAuthorName #link').val(),
        id = link.split('/')[4],
        sitename = link.split('/')[2].split('.')[0],
        title = link.split('"')[1];

    if(link.split('/')[3].substr(0, 1) == 'a') { //for answers
        $.getJSON("https://api.stackexchange.com/2.2/answers/" + id + "?order=desc&sort=activity&site=" + sitename, function(json) {
            //Insert at caret thanks to http://stackoverflow.com/a/15977052/3541881
            var caretPos = document.getElementById('wmd-input').selectionStart,
                textAreaTxt = textarea.val(),
                txtToAdd;
            
            if (title) {
                txtToAdd = '[@' + json.items[0].owner.display_name + ' says](' + link + ' "' + title + '")';
            } else {
                txtToAdd = '[@' + json.items[0].owner.display_name + ' says](' + link + ')';
            }

            textarea.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos));
            $('#addLinkAuthorName').hide();
        });      
    } else { //for questions
        $.getJSON("https://api.stackexchange.com/2.2/questions/" + id + "?order=desc&sort=activity&site=" + sitename, function(json) {
            //Insert at caret thanks to http://stackoverflow.com/a/15977052/3541881
            var caretPos = document.getElementById('wmd-input').selectionStart,
                textAreaTxt = textarea.val(),
                txtToAdd;

            if (title) {
                txtToAdd = '[@' + json.items[0].owner.display_name + ' says](' + json.items[0].link + ' "' + title + '")';
            } else {
                txtToAdd = '[@' + json.items[0].owner.display_name + ' says](' + json.items[0].link + ')';
            }

            textarea.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos));
            $('#addLinkAuthorName').hide();
        });
    }
});

var liSpan = "<li class='wmd-button' title='Hyperlink (with author name)' style='left: 450px;'><span id='wmd-author-link-button' style='background-position: -40px 0px;'></span></li>";

setTimeout(function() {
    $('[id^="wmd-redo-button"]').after(liSpan);
    $('#wmd-author-link-button').on('click', function() {
        $('#addLinkAuthorName').show();    
    });
}, 1000);

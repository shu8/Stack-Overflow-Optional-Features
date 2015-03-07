// ==UserScript==
// @name         QuickCommentShortcuts
// @namespace    http://stackexchange.com/users/4337810/%E1%94%95%E1%96%BA%E1%98%8E%E1%95%8A
// @version      1.0
// @description  Shortcuts to add pre-defined comments
// @author       ᔕᖺᘎᕊ (http://stackexchange.com/users/4337810/%E1%94%95%E1%96%BA%E1%98%8E%E1%95%8A)
// @match 		 *://*.stackexchange.com/*
// @match		 *://*.stackoverflow.com/*
// @match		 *://*.superuser.com/*
// @match		 *://*.serverfault.com/*
// @match		 *://*.askubuntu.com/*
// @match		 *://*.stackapps.com/*
// @match		 *://*.mathoverflow.net/*
// @require      https://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js
// @require      https://rawgit.com/jeresig/jquery.hotkeys/master/jquery.hotkeys.js
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

var sitename = $('a.current-site-link div').attr('title'), //Get sitename from favicon's title
    siteurl = 'http://' + $(location).attr('hostname'),
    op = $('.post-signature.owner .user-info .user-details a').text(),
    data = [],
    cssMainDiv = {
        //'display': 'inline-block',
        'position': 'fixed',
        'width': '90%',
        'height': '80%',
        'top': '10px',
        'left': '50%',
        'z-index': '2',
        'margin-left': '-250px',
        'background-color': 'gray',
        'color': 'white',
        '-webkit-border-radius': '15px',
        '-moz-border-radius': '15px',
        'border-radius': '15px',
        'text-align': 'center',
        'overflow': 'auto'
    },
    cssReminderDiv = {
        'height': '50%',
        'width': '13%',
        'left': '0',
        'top': '10%',
        'position': 'fixed',
        'background-color': 'gray',
        'color': 'white',
        'text-align': 'center'
    },
    tableCSS = {
        'border': '1px solid white',
        'padding': '5px',
        'vertical-align': 'middle'
    };

$('body').append("<div id='quickCommentShortcuts' style='display:none;'><table></table></div>");
$('#quickCommentShortcuts').css(cssMainDiv).draggable();
$('body').append("<div id='quickCommentShortcutsReminder' style='display:none;'></div>");
$('#quickCommentShortcutsReminder').css(cssReminderDiv).draggable();

if (!GM_getValue("quickCommentShortcutsData") || parseGM().length < 1) {
    data = [
        //Format: ['name', 'shortcut', 'comment text'],
        ['How to ping', 'alt+p', "To ping other users, please start your comment with an `@` followed by the person's username (with no spaces). For example, to ping you, I would use `@$ANSWERER$`. For more information, please see [How do comments replies work?](http://meta.stackexchange.com/questions/43019/how-do-comment-replies-work)."],
        ['Not an answer', 'alt+n', "This does not provide an answer to the question. To critique or request clarification from an author, leave a comment below their post - you need to gain [reputation]($SITEURL$/faq#reputation) before you can comment on others' posts to prevent abuse; why don't you try and get some by [answering a question]($SITEURL$/unanswered)?"],
        ['Link-only answer', 'alt+l', "While this link may answer the question, it is better to include the essential parts of the answer here and provide the link for reference. Link-only answers can become invalid if the linked page changes, resulting in your answer being useless and consequently deleted."],
        ['Ask a new question', 'alt+d', "If you have a new question, please ask it by clicking the [Ask Question]($SITEURL$/questions/ask) button. Include a link to this question if it helps provide context. You can also [start a bounty]($SITEURL$/help/privileges/set-bounties) to draw more attention to this question."],
        ['Don\'t add "Thank You"', 'alt+t', "Please don't add 'thank you' as an answer. Instead, vote up the answers that you find helpful. To do so, you need to have reputation. You can read more about reputation [here]($SITEURL$/faq#reputation)."]
    ];
} else {
    data = parseGM();
}

$(window).load(function () {
    $(document).on('click', 'a.js-add-link.comments-link', function () {
        var answererName = $(this).parents('div').find('.post-signature:last').first().find('.user-details a').text(),
            answererId = $(this).parents('div').find('.post-signature:last').first().find('.user-details a').attr('href').split('/')[2],
            apiUrl = "https://api.stackexchange.com/2.2/users/" + answererId + "?site=" + $(location).attr('hostname').split('.')[0];
        
        setTimeout(function() {
            $('.comments textarea').attr('placeholder', "Use comments to ask for clarification or add more information. Avoid answering questions in comments. Press Alt+O to view/edit/delete Quick Comment Shortcuts data, or press Alt+R to open a box to remind you of the shortcuts.");
        }, 500);

        $.ajax({
            dataType: "json",
            url: apiUrl,
            success: function (json) {
                var creationDate = json.items[0].creation_date,
                    lastAccess = json.items[0].last_access_date,
                    reputation = json.items[0].reputation,
                    bronze = json.items[0].badge_counts.bronze,
                    silver = json.items[0].badge_counts.silver,
                    gold = json.items[0].badge_counts.gold,
                    type = json.items[0].user_type;

                if ((new Date().getTime() / 1000) - (creationDate) < 864000) {
                    var welcomeText = 'Welcome to $SITENAME$ $ANSWERERNORMAL$! ',
                        newUser = 'Yes';
                } else {
                    var welcomeText = '',
                        newUser = 'No';
                }


                var factfile = '<span id="closeQuickCommentShortcuts" style="float:right;">close</span> \
                                    <h3>User "' + answererName + '" - ' + type + ': <br /> \
                                    Creation Date: ' + new Date(creationDate * 1000).toUTCString() + ' <br />\
                                    New? ' + newUser + '<br /> \
                                    Last seen: ' + new Date(lastAccess * 1000).toUTCString() + ' <br /> \
                                    Reputation: ' + reputation + ' <br /> \
                                    Badges: <span class="badge1"></span>' + gold + '</span> \
                                    <span class="badge2"></span>' + silver + '</span> \
                                    <span class="badge3"></span>' + bronze + '</span></h3>';

                var variableList = '<br /><span id="quickCommentShortcutsVariables"><h4>Variables (case-insensitive)</h4> \
                                    <strong>$ANSWERER$</strong> - name of poster of post you\'re commenting on (may be OP) with stripped spaces (eg. JohnDoe)<br /> \
									<strong>$ANSWERERNORMAL$</strong> - name of poster of post you\'re commenting on (may be OP) without stripped spaces (eg. John Doe)<br /> \
                                    <strong>$OP$</strong> - name of OP <br /> \
                                    <strong>$SITEURL$</strong> - site URL (eg. http://stackoverflow.com) <br /> \
                                    <strong>$SITENAME$</strong> - site name (eg. Stack Overflow) <br /></span>';

                $('#quickCommentShortcuts').prepend(factfile);
                $('#quickCommentShortcuts').append(variableList);
                $('#closeQuickCommentShortcuts').css('cursor', 'pointer').on('click', function () {
                    $('#quickCommentShortcuts').hide();
                });

                $('#quickCommentShortcuts table').append("<tr><th>Name</th><th>Shortcut</th><th>Text</th><th>Delete?</th><th>Edit?</th></tr>");
                $('#quickCommentShortcuts table').after("<input type='button' id='newComment' value='New Comment'>");
                $('#quickCommentShortcutsReminder').html('');
                $.each(data, function (i) {
                    $('#quickCommentShortcutsReminder').append(this[0] + ' - ' + this[1] + '<br />');
                    var text = welcomeText + this[2];
                    text = replaceVars(text, answererName);
                    $('.comments textarea').bind('keydown', this[1], function () {
                        $(this).append(text);
                    });
                    $('#quickCommentShortcuts table').append("<tr><td>" + this[0] + "</td><td>" + this[1] + "</td><td>" + text + "</td><td><input type='button' id='" + i + "'value='Delete'></td><td><input type='button' id='" + i + "'value='Edit'></td></tr><br />");
                    $('#quickCommentShortcuts').find('table, th, td').css(tableCSS);
                });

                $('.comments textarea').bind('keydown', 'alt+o', function () {
                    $('#quickCommentShortcuts').show();
                });
                $('.comments textarea').bind('keydown', 'alt+r', function () {
                    $('#quickCommentShortcutsReminder').show();
                });

                $('#quickCommentShortcuts').on('click', 'input[value="Delete"]', function () {
                    data.splice($(this).attr('id'), 1);
                    saveGM(data);
                    resetReminderAndTable();
                    $.each(data, function (i) {
                        $('#quickCommentShortcutsReminder').append(this[0] + ' - ' + this[1] + '<br />');
                        var text = welcomeText + this[2];
                        $('#quickCommentShortcuts table').append("<tr><td>" + this[0] + "</td><td>" + this[1] + "</td><td>" + text + "</td><td><input type='button' id='" + i + "'value='Delete'></td><td><input type='button' id='" + i + "'value='Edit'></td></tr><br />");
                        $('#quickCommentShortcuts').find('table, th, td').css(tableCSS);
                    });
                });

                $('#quickCommentShortcuts').on('click', '#newComment', function () {
                    $(this).hide();
                    $(this).before("<div id='newCommentStuff'>Name:<input type='text' id='newCommentName'> \
                                    <br /> Shortcut:<input type='text' id='newCommentShortcut'> \
                                    <br /> Text:<textarea id='newCommentText'></textarea> \
 									<br /> <input type='button' id='newCommentSave' value='Save'></div>");
                    $('#quickCommentShortcuts #newCommentSave').click(function () {
                        var newName = $('#newCommentName').val(),
                            newShortcut = $('#newCommentShortcut').val(),
                            newText = $('#newCommentText').val();
                        data.push([newName, newShortcut, newText]);
                        saveGM(data);
                        resetReminderAndTable();
                        $.each(data, function (i) {
                            $('#quickCommentShortcutsReminder').append(this[0] + ' - ' + this[1] + '<br />');
                            var text = welcomeText + this[2];
                            $('#quickCommentShortcuts table').append("<tr><td>" + this[0] + "</td><td>" + this[1] + "</td><td>" + text + "</td><td><input type='button' id='" + i + "'value='Delete'></td><td><input type='button' id='" + i + "'value='Edit'></td></tr><br />");
                            $('#quickCommentShortcuts').find('table, th, td').css(tableCSS);
                        });
                        $('#newCommentStuff').remove();
                        $('#quickCommentShortcuts #newComment').show();
                    });
                });

                $('#quickCommentShortcuts').on('click', 'input[value="Edit"]', function () {
                    var id = $(this).attr('id');
                    for (var i = 0; i < 3; i++) {
                        $(this).parent().parent().find('td:eq(' + i + ')').replaceWith("<td><input style='width:90%;' type='text' id='" + id + "' value='" + data[id][i].replace(/"/g, '&quot;').replace(/'/g, '&rsquo;') + "'></td>");
                    }
                    $(this).after("<input type='button' value='Save' id='saveEdits'>");
                    $(this).hide();
                    $('#quickCommentShortcuts #saveEdits').click(function () {
                        for (i = 0; i < 3; i++) {
                            data[id][i] = $(this).parent().parent().find('input[type="text"]:eq(' + i + ')').val();
                            saveGM(data);
                        }
                        resetReminderAndTable();
                        $.each(data, function (i) {
                            $('#quickCommentShortcutsReminder').append(this[0] + ' - ' + this[1] + '<br />');
                            var text = welcomeText + this[2];
                            $('#quickCommentShortcuts table').append("<tr><td>" + this[0] + "</td><td>" + this[1] + "</td><td>" + text + "</td><td><input type='button' id='" + i + "'value='Delete'></td><td><input type='button' id='" + i + "'value='Edit'></td></tr><br />");
                            $('#quickCommentShortcuts').find('table, th, td').css(tableCSS);
                        });
                        $(this).remove();
                        $('#quickCommentShortcuts input[value="Edit"]').show();
                    });
                });
                $('.comments textarea').blur(function() {
                   $('#quickCommentShortcutsReminder').hide(); 
                });
            }
        });
    });
});

function parseGM() {
    return JSON.parse(GM_getValue("quickCommentShortcutsData"));
}

function saveGM(data) {
    GM_setValue("quickCommentShortcutsData", JSON.stringify(data));
}

function replaceVars(text, answererName) {
    return text.replace(/\$SITENAME\$/gi, sitename).replace(/\$ANSWERER\$/gi, answererName.replace(/\s/gi, '')).replace(/\$OP\$/gi, op).replace(/\$SITEURL\$/gi, siteurl).replace(/\$ANSWERERNORMAL\$/gi, answererName);
}

function resetReminderAndTable() {
    $('#quickCommentShortcutsReminder').html('');
    $('#quickCommentShortcuts table').html(' ');
    $('#quickCommentShortcuts table').append("<tr><th>Name</th><th>Shortcut</th><th>Text</th><th>Delete?</th><th>Edit?</th></tr>");
}

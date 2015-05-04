// ==UserScript==
// @name         SE Extra, Optional Features
// @namespace    http://stackexchange.com/users/4337810/%E1%94%95%E1%96%BA%E1%98%8E%E1%95%8A
// @version      1.3
// @description  Adds a bunch of optional features to the StackExchange sites.
// @author       ᔕᖺᘎᕊ (http://stackexchange.com/users/4337810/%E1%94%95%E1%96%BA%E1%98%8E%E1%95%8A)
// @match        *://*.stackexchange.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://*.superuser.com/*
// @match        *://*.serverfault.com/*
// @match        *://*.askubuntu.com/*
// @match        *://*.stackapps.com/*
// @match        *://*.mathoverflow.net/*
// @require      https://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js
// @require      https://cdn.rawgit.com/timdown/rangyinputs/master/rangyinputs-jquery-src.js
// @require      https://cdn.rawgit.com/jeresig/jquery.hotkeys/master/jquery.hotkeys.js
// @require      https://cdn.rawgit.com/camagu/jquery-feeds/master/jquery.feeds.js
// @require      https://cdn.rawgit.com/EnzoMartin/Sticky-Element/master/jquery.stickyelement.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @updateURL    https://github.com/shu8/SE_OptionalFeatures/raw/master/features.user.js
// ==/UserScript==
var functionsToCall = { //ALL the functions must go in here

    grayOutVotes: function() { // For graying out votes AND vote count:
        if ($('.deleted-answer').length) {
            $('.deleted-answer .vote-down-off, .deleted-answer .vote-up-off, .deleted-answer .vote-count-post').css('opacity', '0.5');
        }
    },

    moveBounty: function() { // For moving bounty to the top:
        if ($('.bounty-notification').length) {
            $('.bounty-notification').insertAfter('.question .fw');
            $('.question .bounty-notification .votecell').remove();
        }
    },

    dragBounty: function() { // For draggable bounty window:
        $('.bounty-notification').click(function() {
            setTimeout(function() {
                $('#start-bounty-popup').draggable().css('cursor', 'move');
            }, 50);
        });
    },

    renameChat: function() { // For renaming Chat tabs:
        if (window.location.href.indexOf('chat') > -1) {
            document.title = 'Chat - ' + document.title;
        }
    },

    exclaim: function() { // For remvoving exclamation mark:
        var old = $("td.comment-actions > div > div > div.message-text");
        var newText = old.text().replace("!", ".");
        old.html(newText);
    },

    employeeStar: function() { // For looking for employees:
        var employees = ["Jeff Atwood", "Joel Spolsky", "Jarrod Dixon", "Geoff Dalgas", "David Fullerton", "Korneel Bouman", "Robert Cartaino", "Kevin Montrose",
            "MandyK", "Marc Gravell", "balpha", "Matt Sherman", "Danny Miller", "Jason Punyon", "NickC", "Kyle Brandt", "Jin", "Tall Jeff", "Zypher",
            "Nick Craver", "Nick Larsen", "Shog9", "Greg", "Alex Miller", "GuyZee", "abby hairboat", "samthebrand", "Laura", "Grace Note", "Dimitar Stanimiroff",
            "Hammer", "Peter Grace", "Charles", "Anna Lear", "stevvve", "Bethany", "Andrew17", "Kizzle", "Jay", "mjibson", "Stefan Schwarzgruber", "Will Cole", "Sean Bave",
            "Robyn", "Bart Silverstrim", "Jaydles", "Maxwell Applebaum", "Snails", "Jordan Conner", "Bodhi", "cashenhu", "rb4", "Maurbawlz", "CMartin", "Joe Humphries", "Max",
            "Oded", "Val Perez", "rossipedia", "Derek Still", "Tim Post", "Paul", "PDePree", "Sklivvz", "Todd Jenkins", "Jim Egan", "Kaziorex", "Ben Collins", "TomOnTime", "Dr.D",
            "David", "Sara Rayman", "Monika P", "Prefontaine", "m0sa", "Jon Ericson", "Juice", "Tania", "Angela", "Hynes", "Kasra Rahjerdi", "Gabe", "Bret Copeland", "Arie Litovsky",
            "Pops", "Megan Spaans", "Whitney Dwyer", "Philip Camillo", "onesysadmin", "Aurelien Gasser", "Alyssa Tomback", "Alex Cresswell", "couchand", "Brian Nickel", "Princess",
            "Yaakov Ellis", "Ana Hevesi", "Noureddine Latrech", "Hertz", "Jill Ciaccia", "Tobias Schmidt", "Jon Chan", "Johanna Perrin", "Kristian Bright", "John LeClerc",
            "Rob Dandorph", "Jessica Genther", "Courtny Cotten", "Stephanie", "Sean Durkin", "rla4", "Alex Warren", "Jaime Kronick", "Alexa", "Samuel Rouayrenc", "Josh Helfgott",
            "Peter Tarr", "Shane Madden", "Nextraztus", "G-Wiz", "Dan O'Boyle", "yolovolo", "Griffin Sandberg", "ODB", "Mark Villarreal", "Lowell Gruman Jr.", "bweber", "Natalie How",
            "Haney", "jmac", "Emmanuel Andem-Ewa", "Jess Pardue", "Dean Ward", "Steve Trout", "Nicholas Chabanovsky", "Kelli Ward", "Noah Neuman", "Lauren Roemer", "Heidi Hays",
            "Joe Wilkie", "Mackenzie Ralston"
        ];

        $('.comment, .deleted-answer-info, .employee-name, .started, .user-details').each(function() { //normal comments, deleted answers (deleted by), SE.com/about, question feed users, question/answer/edit owners
            var $divtext = $(this);
            $.each(employees, function(index, value) {
                if ($divtext.find('a[href*="/users"]').html() == value) {
                    $divtext.find('a[href*="/users"]').append('<span class="mod-flair" title="possible employee">&Star;</span>');
                }
            });
        });
    },

    bulletReplace: function() { // For replacing disclosure bullets with normal ones:
        $('.dingus').each(function() {
            $(this).html('&#x25cf;');
        });
    },

    addEllipsis: function() { // For adding ellipsis to long names:
        $('.user-info .user-details').css('text-overflow', 'ellipsis');
    },

    moveCommentsLink: function() { // For adding the 'show x more comments' link before the commnents:
        $('.js-show-link.comments-link').each(function() {
            var $this2 = $(this);
            $("<tr><td></td><td>" + $this2.clone().wrap('<div>').parent().html() + "</td></tr>").insertBefore($(this).parent().closest('tr')).click(function() {
                $(this).hide();
            });
        });

    },

    unHideAnswer: function() { // For unfading a downvoted answer on hover
        $(".downvoted-answer").hover(function() {
            $(this).removeClass("downvoted-answer");
        }, function() {
            $(this).addClass("downvoted-answer");
        });
    },

    fixedTopbar: function() { // For making the topbar fixed (always stay at top of screen)
        $('.topbar').css({
            'position': 'fixed',
            'z-index': '1'
        });
    },

    highlightQuestions: function() { // For highlighting only the tags of favorite questions
        setTimeout(function() { //Need delay to make sure the CSS is applied
            if (window.location.href.indexOf('superuser') > -1) { //superuser
                var betterCSS = {
                    backgroundColor: '#a1eaff',
                    color: 'black'
                };
            } else if (window.location.href.indexOf('stackoverflow') > -1) { //stackoverflow
                var betterCSS = {
                    backgroundColor: '#ffefc6',
                    borderWidth: '0'
                };
            } else { //if (window.location.href.indexOf('.stackexchange.com') > -1) {
                //if (window.location.href.indexOf('meta') === -1) { //beta sites
                var betterCSS = {
                    backgroundColor: '#c3dafa',
                    borderWidth: '0'
                };
                //}
            }
            var interestingTagsDiv = $("#interestingTags").text();
            var interesting = interestingTagsDiv.split(' ');
            interesting.pop(); //Because there's one extra value at the end        

            $(".tagged-interesting > .summary > .tags > .post-tag").filter(function(index) {
                return interesting.indexOf($(this).text()) > -1;
            }).css(betterCSS);

            $(".tagged-interesting").removeClass("tagged-interesting");
        }, 100);
    },

    displayName: function() { // For displaying username next to avatar on topbar
        var uname = $('.gravatar-wrapper-24').attr('title');
        var insertme = "<span class='reputation links-container' style='color:white;' title='" + uname + "'>" + uname + "</span>";
        $(insertme).insertBefore('.gravatar-wrapper-24');
    },

    colorAnswerer: function() { // For highlighting the names of answerers on comments
        $('.answercell').each(function(i, obj) {
            var x = $(this).find('.user-details a').text();
            $('.answer .comment-user').each(function() {
                if ($(this).text() == x) {
                    $(this).css('background-color', 'orange');
                }
            });
        });
        $('.js-show-link.comments-link').click(function() { //Keep CSS when 'show x more comments' is clicked
            setTimeout(function() {
                functionsToCall.colorAnswerer();
            }, 500);
        });
    },

    addBullets: function() { // Part of kbdAndBullets
        var list = '- ' + $('[id^="wmd-input"]').getSelection().text.split('\n').join('\n- ');
        $('[id^="wmd-input"]').replaceSelectedText(list);
    },

    addKbd: function() { // Part of kbdAndBullets
        $('[id^="wmd-input"]').surroundSelectedText("<kbd>", "</kbd>");
    },

    kbdAndBullets: function() { // For adding buttons to the markdown toolbar to surround selected test with KBD or convert selection into a markdown list
        var kbdBtn = "<li class='wmd-button' title='surround selected text with <kbd> tags' style='left: 400px;'><span id='wmd-kbd-button' style='background-image: none;'>kbd</span></li>";
        var listBtn = "<li class='wmd-button' title='add dashes (\"-\") before every line to make a bullet point list' style='left: 425px;'><span id='wmd-bullet-button' style='background-image:none;'>&#x25cf;</span></li>";

        setTimeout(function() {
            $('[id^="wmd-redo-button"]').after(kbdBtn);
            $('[id^="wmd-redo-button"]').after(listBtn);
            $('#wmd-kbd-button').on('click', function() {
                alert('click');
                functionsToCall.addKbd();
            });
            $('#wmd-list-button').on('click', function() {
                alert('click');
                functionsToCall.addBullets();
            });
        }, 500);

        $('[id^="wmd-input"]').bind('keydown', 'alt+l', function() {
            functionsToCall.addBullets();
        });

        $('[id^="wmd-input"]').bind('keydown', 'alt+k', function() {
            functionsToCall.addKbd();
        });
    },

    addCheckboxes: function() { // part of editComment
        $('#reasons').remove(); //remove the div containing everything, we're going to add/remove stuff now:
        if ($('[class^="inline-editor"]').length < 0) { //if there is no inline editor, do nothing
            ;
        } else if (window.location.href.indexOf('/edit') > -1 || $('[class^="inline-editor"]').length > 0) { //everything else
            $('.form-submit').before('<div id="reasons"></div>');

            $.each(JSON.parse(GM_getValue('editReasons')), function(i, obj) {
                $('#reasons').append('<label><input type="checkbox" value="' + this[1] + '"</input>' + this[0] + '</label>&nbsp;');
            });

            $('#reasons input[type="checkbox"]').css('vertical-align', '-2px');

            $('#reasons label').hover(function() {
                $(this).css({ //on hover
                    'background-color': 'gray',
                    'color': 'white'
                });
            }, function() {
                $(this).css({ //on un-hover
                    'background-color': 'white',
                    'color': 'inherit'
                });
            });

            var editCommentField = $('[id^="edit-comment"]');
            $('#reasons input[type="checkbox"]').change(function() {
                if (this.checked) { //Add it to the summary
                    if (editCommentField.val() == '') {
                        editCommentField.val(editCommentField.val() + $(this).val().replace(/on$/g, ''));
                    } else {
                        editCommentField.val(editCommentField.val() + '; ' + $(this).val().replace(/on$/g, ''));
                    }
                    var newEditComment = editCommentField.val(); //Remove the last space and last semicolon
                    editCommentField.val(newEditComment).focus();
                } else if (!this.checked) { //Remove it from the summary
                    editCommentField.val(editCommentField.val().replace($(this).val() + '; ', '')); //for middle/beginning values
                    editCommentField.val(editCommentField.val().replace($(this).val(), '')); //for last value     
                }
            });
        }
    },

    displayDeleteValues: function() { // part of editComment
        //Display the items from list and add buttons to delete them
        $('#currentValues').html(' ');
        $.each(JSON.parse(GM_getValue('editReasons')), function(i, obj) {
            $('#currentValues').append(this[0] + ' - ' + this[1] + '<input type="button" id="' + i + '" value="Delete"><br />');
        });
        functionsToCall.addCheckboxes();
    },

    editComment: function() { // For adding checkboxes when editing to add pre-defined edit reasons
        var cssForDiv = {
            'display': 'inline-block',
            'position': 'fixed',
            'width': '500px',
            'top': '10px',
            'left': '50%',
            'z-index': '2',
            'margin-left': '-250px',
            'background-color': 'gray',
            'color': 'white',
            '-webkit-border-radius': '15px',
            '-moz-border-radius': '15px',
            'border-radius': '15px',
            'text-align': 'center'
        };

        var div = "<div id='dialogEditReasons'><span id='closeDialogEditReasons' style='float:right;'>Close</span><span id='resetEditReasons' style='float:left;'>Reset</span>  \
                        <h2>View/Remove Edit Reasons</h2>																														\
                        <div id='currentValues'></div>																															\
                        <br />																																					\
                        <h3>Add a custom reason</h3>																															\
                        Display Reason:	<input type='text' id='displayReason'>																									\
                        <br /> 																																					\
                        Actual Reason: <input type='text' id='actualReason'>																									\
                        <br />																																					\
                        <input type='button' id='submitUpdate' value='Submit'>																									\
                    </div>";

        $('body').append(div);
        $('#dialogEditReasons').css(cssForDiv).draggable().hide();

        $('#closeDialogEditReasons').css('cursor', 'pointer').click(function() {
            $(this).parent().hide(500);
        });

        $('#resetEditReasons').css('cursor', 'pointer').click(function() {
            var options = [ //Edit these to change the default settings
                ['formatting', 'Improved Formatting'],
                ['spelling', 'Corrected Spelling'],
                ['grammar', 'Fixed grammar'],
                ['greetings', 'Removed thanks/greetings']
            ];
            if (confirm('Are you sure you want to reset the settings to Formatting, Spelling, Grammar and Greetings')) {
                GM_setValue('editReasons', JSON.stringify(options));
                alert('Reset options to default. Refreshing...');
                location.reload();
            }
        });

        if (GM_getValue('editReasons', -1) == -1) { //If settings haven't been set
            $('#dialogEditReasons').show(); //Show the dialog
        } else {
            var options = JSON.parse(GM_getValue('editReasons')); //If they have, get the options
        }

        $('#dialogEditReasons').on('click', 'input[value="Delete"]', function() { //Click handler to delete when delete button is pressed
            var delMe = $(this).attr('id');
            options.splice(delMe, 1); //actually delete it
            GM_setValue('editReasons', JSON.stringify(options)); //save it
            functionsToCall.displayDeleteValues(); //display the items again (update them)
        });

        $('#submitUpdate').click(function() { //Click handler to update the array with custom value
            if ($('#displayReason').val() == '' || $('#actualReason').val() == '') {
                alert('Please enter something in both the textboxes!');
            } else {
                var arrayToAdd = [$('#displayReason').val(), $('#actualReason').val()];
                options.push(arrayToAdd); //actually add the value to array
                functionsToCall.displayDeleteValues(); //display the items again (update them)
                GM_setValue('editReasons', JSON.stringify(options)); //Save the value
            }
        });

        setTimeout(function() {
            functionsToCall.addCheckboxes();
            //Add the button to update and view the values in the help menu:
            $('.topbar-dialog.help-dialog.js-help-dialog > .modal-content ul').append("<li><a href='javascript:void(0)' id='editReasonsLink'>Edit Reasons     \
                                                                                      <span class='item-summary'>Edit your personal edit reasons for SE sites</span></a></li>");
            $('#editReasonsLink').click(function() {
                functionsToCall.displayDeleteValues();
                $('#dialogEditReasons').show(500); //Show the dialog to view and update values
            });
        }, 500);

        $('.post-menu > .edit-post').click(function() {
            setTimeout(function() {
                functionsToCall.addCheckboxes();
            }, 500);
        });
    },

    shareLinksMarkdown: function() { // For changing the 'share' button link to the format [name](link)
        $('.short-link').click(function() {
            setTimeout(function() {
                $('.share-tip input').val('[' + $('#question-header a').html() + '](' + document.URL + ')');
            }, 500);
        });
    },

    commentShortcuts: function() { // For adding support in comments for Ctrl+K,I,B to add code backticks, italicise, bolden selection
        $('.js-add-link.comments-link').click(function() {
            setTimeout(function() {
                $('.comments textarea').bind('keydown', 'ctrl+k', function(e) {
                    e.preventDefault();
                    $(this).surroundSelectedText('`', '`');
                });
                $('.comments textarea').bind('keydown', 'ctrl+i', function(e) {
                    e.preventDefault();
                    $(this).surroundSelectedText('*', '*');
                });
                $('.comments textarea').bind('keydown', 'ctrl+b', function(e) {
                    e.preventDefault();
                    $(this).surroundSelectedText('**', '**');
                });
            }, 200);
        });
    },

    unspoil: function() { // For adding a button to reveal all spoilers in a post
        $('#answers div[id*="answer"], div[id*="question"]').each(function() {
            $(this).find('.post-menu').append('<span class="lsep">|</span><a id="showSpoiler-' + $(this).attr("id") + '" href="javascript:void(0)">unspoil</span>');
        });
        $('a[id*="showSpoiler"]').click(function() {
            var x = $(this).attr('id').split(/-(.+)?/)[1];
            $('#' + x + ' .spoiler').removeClass('spoiler');
        });
    },

    highlightClosedQuestions: function() { // For highlighting and slightly greying out closed questions when viewing question lists
        $('.question-summary').each(function() {
            if ($(this).find('.summary h3 a').text().indexOf('[on hold]') > -1 || $(this).find('.summary h3 a').text().indexOf('[closed]') > -1) {
                if ($('.cp').length) {
                    $(this).find('.cp').css('border', 'blue').css('border-style', 'dotted').css('border-width', 'thin').css('background-color', '#E0E0E0');
                    $(this).css('opacity', '0.9');
                } else {
                    $(this).find('.votes').css('border', 'blue').css('border-style', 'dotted').css('border-width', 'thin').css('background-color', '#E0E0E0');
                    $(this).css('opacity', '0.9');
                }
            }
        });
    },

    parseGM: function() { // part of quickCommentShortcutsMain
        return JSON.parse(GM_getValue("quickCommentShortcutsData"));
    },

    saveGM: function(data) { // part of quickCommentShortcutsMain
        GM_setValue("quickCommentShortcutsData", JSON.stringify(data));
    },

    replaceVars: function(text, sitename, siteurl, op, answererName) { // part of quickCommentShortcutsMain
        return text.replace(/\$SITENAME\$/gi, sitename).replace(/\$ANSWERER\$/gi, answererName.replace(/\s/gi, '')).replace(/\$OP\$/gi, op).replace(/\$SITEURL\$/gi, siteurl).replace(/\$ANSWERERNORMAL\$/gi, answererName);
    },

    resetReminderAndTable: function() { // part of quickCommentShortcutsMain
        $('#quickCommentShortcutsReminder').html('');
        $('#quickCommentShortcuts table').html(' ');
        $('#quickCommentShortcuts table').append("<tr><th>Name</th><th>Shortcut</th><th>Text</th><th>Delete?</th><th>Edit?</th></tr>");
    },

    quickCommentShortcutsMain: function() { // For adding shortcuts to insert pre-defined text into comment fields
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

        if (!GM_getValue("quickCommentShortcutsData") || functionsToCall.parseGM().length < 1) {
            data = [
                //Format: ['name', 'shortcut', 'comment text'],
                ['How to ping', 'alt+p', "To ping other users, please start your comment with an `@` followed by the person's username (with no spaces). For example, to ping you, I would use `@$ANSWERER$`. For more information, please see [How do comments replies work?](http://meta.stackexchange.com/questions/43019/how-do-comment-replies-work)."],
                ['Not an answer', 'alt+n', "This does not provide an answer to the question. To critique or request clarification from an author, leave a comment below their post - you need to gain [reputation]($SITEURL$/faq#reputation) before you can comment on others' posts to prevent abuse; why don't you try and get some by [answering a question]($SITEURL$/unanswered)?"],
                ['Link-only answer', 'alt+l', "While this link may answer the question, it is better to include the essential parts of the answer here and provide the link for reference. Link-only answers can become invalid if the linked page changes, resulting in your answer being useless and consequently deleted."],
                ['Ask a new question', 'alt+d', "If you have a new question, please ask it by clicking the [Ask Question]($SITEURL$/questions/ask) button. Include a link to this question if it helps provide context. You can also [start a bounty]($SITEURL$/help/privileges/set-bounties) to draw more attention to this question."],
                ['Don\'t add "Thank You"', 'alt+t', "Please don't add 'thank you' as an answer. Instead, vote up the answers that you find helpful. To do so, you need to have reputation. You can read more about reputation [here]($SITEURL$/faq#reputation)."]
            ];
        } else {
            data = functionsToCall.parseGM();
        }
        $(function() {
            $(document).on('click', 'a.js-add-link.comments-link', function() {
                var answererName = $(this).parents('div').find('.post-signature:last').first().find('.user-details a').text(),
                    answererId = $(this).parents('div').find('.post-signature:last').first().find('.user-details a').attr('href').split('/')[2],
                    apiUrl = "https://api.stackexchange.com/2.2/users/" + answererId + "?site=" + $(location).attr('hostname').split('.')[0];

                setTimeout(function() {
                    $('.comments textarea').attr('placeholder', "Use comments to ask for clarification or add more information. Avoid answering questions in comments. Press Alt+O to view/edit/delete Quick Comment Shortcuts data, or press Alt+R to open a box to remind you of the shortcuts.");
                }, 500);

                $.ajax({
                    dataType: "json",
                    url: apiUrl,
                    success: function(json) {
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
                        $('#closeQuickCommentShortcuts').css('cursor', 'pointer').on('click', function() {
                            $('#quickCommentShortcuts').hide();
                        });

                        $('#quickCommentShortcuts table').append("<tr><th>Name</th><th>Shortcut</th><th>Text</th><th>Delete?</th><th>Edit?</th></tr>");
                        $('#quickCommentShortcuts table').after("<input type='button' id='newComment' value='New Comment'>");
                        $('#quickCommentShortcutsReminder').html('');
                        $.each(data, function(i) {
                            $('#quickCommentShortcutsReminder').append(this[0] + ' - ' + this[1] + '<br />');
                            var text = welcomeText + this[2];
                            text = functionsToCall.replaceVars(text, sitename, siteurl, op, answererName);
                            $('.comments textarea').bind('keydown', this[1], function() {
                                $(this).append(text);
                            });
                            $('#quickCommentShortcuts table').append("<tr><td>" + this[0] + "</td><td>" + this[1] + "</td><td>" + text + "</td><td><input type='button' id='" + i + "'value='Delete'></td><td><input type='button' id='" + i + "'value='Edit'></td></tr><br />");
                            $('#quickCommentShortcuts').find('table, th, td').css(tableCSS);
                        });

                        $('.comments textarea').on('keydown', null, 'alt+o', function() {
                            $('#quickCommentShortcuts').show();
                        });
                        $('.comments textarea').bind('keydown', 'alt+r', function() {
                            $('#quickCommentShortcutsReminder').show();
                        });

                        $('#quickCommentShortcuts').on('click', 'input[value="Delete"]', function() {
                            data.splice($(this).attr('id'), 1);
                            functionsToCall.saveGM(data);
                            functionsToCall.resetReminderAndTable();
                            $.each(data, function(i) {
                                $('#quickCommentShortcutsReminder').append(this[0] + ' - ' + this[1] + '<br />');
                                var text = welcomeText + this[2];
                                $('#quickCommentShortcuts table').append("<tr><td>" + this[0] + "</td><td>" + this[1] + "</td><td>" + text + "</td><td><input type='button' id='" + i + "'value='Delete'></td><td><input type='button' id='" + i + "'value='Edit'></td></tr><br />");
                                $('#quickCommentShortcuts').find('table, th, td').css(tableCSS);
                            });
                        });

                        $('#quickCommentShortcuts').on('click', '#newComment', function() {
                            $(this).hide();
                            $(this).before("<div id='newCommentStuff'>Name:<input type='text' id='newCommentName'> \
                                                <br /> Shortcut:<input type='text' id='newCommentShortcut'> \
                                                <br /> Text:<textarea id='newCommentText'></textarea> \
                                                <br /> <input type='button' id='newCommentSave' value='Save'></div>");
                            $('#quickCommentShortcuts #newCommentSave').click(function() {
                                var newName = $('#newCommentName').val(),
                                    newShortcut = $('#newCommentShortcut').val(),
                                    newText = $('#newCommentText').val();
                                data.push([newName, newShortcut, newText]);
                                functionsToCall.saveGM(data);
                                functionsToCall.resetReminderAndTable();
                                $.each(data, function(i) {
                                    $('#quickCommentShortcutsReminder').append(this[0] + ' - ' + this[1] + '<br />');
                                    var text = welcomeText + this[2];
                                    $('#quickCommentShortcuts table').append("<tr><td>" + this[0] + "</td><td>" + this[1] + "</td><td>" + text + "</td><td><input type='button' id='" + i + "'value='Delete'></td><td><input type='button' id='" + i + "'value='Edit'></td></tr><br />");
                                    $('#quickCommentShortcuts').find('table, th, td').css(tableCSS);
                                });
                                $('#newCommentStuff').remove();
                                $('#quickCommentShortcuts #newComment').show();
                            });
                        });

                        $('#quickCommentShortcuts').on('click', 'input[value="Edit"]', function() {
                            var id = $(this).attr('id');
                            for (var i = 0; i < 3; i++) {
                                $(this).parent().parent().find('td:eq(' + i + ')').replaceWith("<td><input style='width:90%;' type='text' id='" + id + "' value='" + data[id][i].replace(/"/g, '&quot;').replace(/'/g, '&rsquo;') + "'></td>");
                            }
                            $(this).after("<input type='button' value='Save' id='saveEdits'>");
                            $(this).hide();
                            $('#quickCommentShortcuts #saveEdits').click(function() {
                                for (i = 0; i < 3; i++) {
                                    data[id][i] = $(this).parent().parent().find('input[type="text"]:eq(' + i + ')').val();
                                    functionsToCall.saveGM(data);
                                }
                                functionsToCall.resetReminderAndTable();
                                $.each(data, function(i) {
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
    },

    spoilerTip: function() { // For adding some text to spoilers to tell people to hover over it
        $('.spoiler').prepend("<div id='isSpoiler' style='color:red; font-size:smaller; float:right;'>hover to show spoiler<div>");
        $('.spoiler').hover(function() {
            $(this).find('#isSpoiler').hide(500);
        }, function() {
            $(this).find('#isSpoiler').show(500);
        });
    },

    commentReplies: function() { //For adding reply links to comments
        $('.comment').each(function() {
            if ($('.topbar-links a span:eq(0)').text() != $(this).find('.comment-text a.comment-user').text()) { //make sure the link is not added to your own comments
                $(this).append("<span id='replyLink' title='reply to this user'>&crarr;</span>");
            }
        });

        $('span[id="replyLink"]').css('cursor', 'pointer').on('click', function() {
            var parentDiv = $(this).parent().parent().parent().parent();
            var textToAdd = '@' + $(this).parent().find('.comment-text a.comment-user').text().replace(/\s/g, "").replace(/♦/, '') + ' '; //eg. @USERNAME [space]

            if (parentDiv.find('textarea').length) {
                parentDiv.find('textarea').append(textToAdd); //add the name
            } else {
                parentDiv.next('div').find('a').trigger('click'); //show the textarea
                parentDiv.find('textarea').append(textToAdd); //add the name
            }
        });
    },

    parseCrossSiteLinks: function() { //For converting cross-site links to their titles
        var sites = ['stackexchange', 'stackoverflow', 'superuser', 'serverfault', 'askubuntu', 'stackapps', 'mathoverflow', 'programmers', 'bitcoin'];

        $('.post-text a').each(function() {
            var anchor = $(this);
            if (sites.indexOf($(this).attr('href').split('/')[2].split('.')[0]) > -1) { //if the link is to an SE site (not, for example, to google), do the necessary stuff
                var sitename = $(this).attr('href').split('/')[2].split('.')[0],
                    id = $(this).attr('href').split('/')[4];

                $.getJSON("https://api.stackexchange.com/2.2/questions/" + id + "?order=desc&sort=activity&site=" + sitename, function(json) {
                    anchor.html(json.items[0].title); //Get the title and add it in
                });
            }
        });
    },

    answerCountSidebar: function() { //For adding the answer count as a tooltip to questions in the sidebar
        $('.sidebar-linked .linked .spacer a, .sidebar-related .related .spacer a').each(function(i) {
            if (!i % 2 == 0) { //odd only (ie. question title)
                var id = $(this).attr('href').split('/')[2],
                    sitename = $(location).attr('hostname').split('.')[0],
                    that = $(this);

                $.getJSON("https://api.stackexchange.com/2.2/questions/" + id + "?order=desc&sort=activity&site=" + sitename, function(json) {
                    answers = json.items[0].answer_count;
                    that.attr('title', answers + (answers == 1 ? ' answer' : ' answers'));
                });
            }
        });
    },

    linkQuestionAuthorName: function() { //For adding a button to the editor toolbar to insert a link to a post and automatically add the author's name
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

            if (link.split('/')[3].substr(0, 1) == 'a') { //for answers
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
    },
    
    confirmNavigateAway: function() {
       if (window.location.href.indexOf('questions/') >= 0) {
           window.onbeforeunload = function () {   
               if($('.comment-form textarea').length) {
                   return "Do you really want to navigate away? Anything you have written will be lost!";
               } else {
                   return;
               }
           };
       }
    },
    
    sortByBountyAmount: function() {
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
    },
    
    addHotText: function() {
        $('#feed').html('<p>In the top 30 most recent hot network questions!</p>');
        $('#question-header').prepend("<div title='this question is in the top 30 most recent hot network questions!' style='float:right; -ms-transform: rotate(30deg); -webkit-transform: rotate(30deg); transform: rotate(30deg); font-size: xx-large; color: red;'>HOT<div>");        
    },
    
    isQuestionHot: function() {
        $('#qinfo').after('<div id="feed"></div>');

        setTimeout(function() {
            $('#feed').feeds({
                feeds: {
                    se: 'http://stackexchange.com/feeds/questions'
                },
                xml: true,
                entryTemplate: '<p></p>',
                loadingTemplate: '<div></div>',
                preprocess: function(feed) {
                    if (document.URL == this.xml.find('link').attr('href')) {
                        functionsToCall.addHotText();
                    }
                }
            });
        }, 500);
    },
    
    autoShowCommentImages: function() {
        $('.comment .comment-text .comment-copy a').each(function() {
            if($(this).attr('href').indexOf('imgur') != -1) {
                var image = $(this).attr('href');
                $(this).replaceWith("<img src='"+image+"' width='100%'>");
            }
        });     
    },
    
    showCommentScores: function () {
        var sitename = $(location).attr('hostname').split('.')[0];
        $('.history-table td b a').each(function() {
            id = $(this).attr('href').split('#')[1].split('_')[0].replace('comment', '');
            $(this).after("<span class='showCommentScore' id='"+id+"'>&nbsp;&nbsp;&nbsp;show comment score</span>");
        });    
        $('.showCommentScore').css('cursor', 'pointer').on('click', function() {
            that = $(this);
            $.getJSON("https://api.stackexchange.com/2.2/comments/" + that.attr('id') + "?order=desc&sort=creation&site=" + sitename, function(json) {
                that.html("&nbsp;&nbsp;&nbsp;" + json.items[0].score);
            }); 
        });        
    },
    
    answerTagsSearch: function() {        
        if (window.location.href.indexOf('search?q=') > -1) { //ONLY ON SEARCH PAGES!
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
        }       
    },
    
    stickyVoteButtons: function() {       
        $('.vote').sticky($('.vote').parent().parent().parent().parent().parent());
    }
};

// Format for options below: <label><input type='checkbox' id='id'>Text</label><br />
var div = "<div id='featureGMOptions' style='display:inline-block; position:fixed; top:10px; left:50%; height: 90%; overflow: auto; width:500px; margin-left:-250px; z-index:2; background-color:gray; color:white; padding: 10px; -webkit-border-radius: 15px; -moz-border-radius: 15px; border-radius: 15px;'>\
                <span id='closeFeature' style='float:right;'>Close</span> <span id='resetFeature' style='float:right;'>Reset&nbsp;</span>    <span id='featureTitle'><h2>Additional Optional Feature - settings</h2></span> \
                <label><input type='checkbox' id='grayOutVotes'/> Gray out deleted votes</label> <br /> \
                <label><input type='checkbox' id='moveBounty'/> Move 'start bounty' to top</label> <br /> \
                <label><input type='checkbox' id='dragBounty'/> Make bounty box draggable</label> <br /> \
                <label><input type='checkbox' id='renameChat'/> Prepend 'Chat - ' to chat tabs' titles</label> <br /> \
                <label><input type='checkbox' id='exclaim'/> Remove exclamation mark on message</label> <br /> \
                <label><input type='checkbox' id='employeeStar'/> Add star after employee names</label> <br /> \
                <label><input type='checkbox' id='bulletReplace'/> Replace triangluar bullets with normal ones</label> <br /> \
                <label><input type='checkbox' id='addEllipsis'/> Add ellipsis to long names</label> <br /> \
                <label><input type='checkbox' id='moveCommentsLink'/> Move 'show x more comments' to the top</label> <br /> \
                <label><input type='checkbox' id='unHideAnswer'/> Un-gray-out downvoted answers</label> <br /> \
                <label><input type='checkbox' id='fixedTopbar'/> Fix topbar position</label> <br /> \
                <label><input type='checkbox' id='highlightQuestions'/> Alternate favourite questions highlighing</label> <br /> \
                <label><input type='checkbox' id='displayName'/> Display name before gravatar</label> <br />\
                <label><input type='checkbox' id='colorAnswerer'/> Color answerer's comments</label> <br />\
                <label><input type='checkbox' id='kbdAndBullets'/> Add KBD and list buttons to editor toolbar</label> <br />\
                <label><input type='checkbox' id='editComment'/> Pre-defined edit comment options</label> <br />\
				<label><input type='checkbox' id='shareLinksMarkdown'/> Edit 'share' link to format of [post-name](url)</label> <br />\
				<label><input type='checkbox' id='commentShortcuts'/> Use Ctrl+I,B,K (to italicise, bolden and add code backticks) in comments</label> <br />\
				<label><input type='checkbox' id='unspoil'/> Add a link to show all spoilers in a post</label> <br />\
                <label><input type='checkbox' id='highlightClosedQuestions'/> Highlight (and slighly fade) on hold/closed questions when viewing question lists</label> <br />\
                <label><input type='checkbox' id='quickCommentShortcutsMain'/> Add shortcuts to add pre-defined comments to comment fields</label> <br />\
                <label><input type='checkbox' id='spoilerTip'/> Differentiate spoilers from empty blockquotes</label> <br />\
                <label><input type='checkbox' id='commentReplies'/> Add reply links to comments for quick replying (without having to type someone's username)</label> <br />\
                <label><input type='checkbox' id='parseCrossSiteLinks'/> Parse titles to links cross-SE-sites</label> <br />\
                <label><input type='checkbox' id='answerCountSidebar'/> Show answer count as a tooltip for questions in the sidebar</label> <br />\
                <label><input type='checkbox' id='linkQuestionAuthorName'/> Add a button in the editor toolbar to insert a hyperlink to a post and add the author automatically</label> <br />\
                <label><input type='checkbox' id='confirmNavigateAway'/> Add a confirmation dialog before navigating away on pages whilst you are still typing a comment</label> <br />\
                <label><input type='checkbox' id='sortByBountyAmount'/> Add an option to filter bounties by their amount</label> <br />\
                <label><input type='checkbox' id='isQuestionHot'/> Add a label on questions which are hot-network questions</label> <br />\
                <label><input type='checkbox' id='autoShowCommentImages'/> View linked images (to imgur) in comments inline</label> <br />\
                <label><input type='checkbox' id='showCommentScores'/> Show your comment and comment replies scores in your profile tabs</label> <br />\
                <label><input type='checkbox' id='answerTagsSearch'/> Show tags for the question an answer belongs to on search pages (for better context)</label> <br />\
                <label><input type='checkbox' id='stickyVoteButtons'/> Make vote buttons next to posts sticky whilst scrolling on that post</label> <br />\
                <input type='submit' id='submitOptions' value='Save settings' /><br /> \
           </div>";

$('body').append(div);
$('#featureGMOptions').draggable().hide(); //Hide it at first
$('#featureTitle').css('cursor', 'move');

if (window.location.href.indexOf('/users/') > -1) { //Add the add features link
    $('.sub-header-links.fr').append('<span class="lsep">|</span><a href="javascript:;" id="addFeaturesLink">add features</a>'); //Old profile (pre Feb-2015)
    $('.additional-links').append('<span class="lsep">|</span><a href="javascript:;" id="addFeaturesLink">add features</a>'); //New profile (post Feb-2015) Currently on MSE only

    $('#addFeaturesLink').click(function() {
        $('#featureGMOptions').show(500);
    });
}

$('#featureGMOptions > #closeFeature').css('cursor', 'pointer').click(function() {
    $('#featureGMOptions').hide(500);
});

$('#featureGMOptions > #resetFeature').css('cursor', 'pointer').click(function() {
    GM_deleteValue('featureOptions'); //Delete the setting when clicked
    location.reload();
});

$(function() {
    if (GM_getValue("featureOptions", -1) != -1) { //If the setting is already set
        var featureOptions = JSON.parse(GM_getValue("featureOptions"));
        for (i = 0; i < featureOptions.length; ++i) {
            $('#featureGMOptions #' + featureOptions[i]).prop('checked', true);
            functionsToCall[featureOptions[i]](); //Call the functions that were chosen
        }
    } else { //If not, set it:
        $('#featureGMOptions input').prop('checked', true);
        $('#featureGMOptions').show(); //Show the dialog
        var featureOptions = [];
    }

    $('#submitOptions').click(function() {
        var featureOptions = [];
        $('input[type=checkbox]:checked').each(function() {
            var x = $(this).attr('id');
            featureOptions.push(x); //Add the function's ID (also the checkbox's ID) to the array
        });
        GM_setValue('featureOptions', JSON.stringify(featureOptions)); //Save the setting
        console.log('Options saved: ' + featureOptions);
        $('#featureGMOptions').hide(500);
    });
});

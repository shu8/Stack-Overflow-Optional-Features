// ==UserScript==
// @name         SE Extra, Optional Features
// @namespace    http://stackexchange.com/users/4337810/%E1%B9%A7%D0%BD%CA%8A%C3%9F
// @version      0.5
// @description  Adds a bunch of optional 'features' to the StackExchange sites.
// @author       ṧнʊß (http://stackexchange.com/users/4337810/%E1%B9%A7%D0%BD%CA%8A%C3%9F)
// @match        *://*.stackexchange.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://*.superuser.com/*
// @match        *://*.serverfault.com/*
// @match        *://*.askubuntu.com/*
// @match        *://*.stackapps.com/*
// @match        *://*.mathoverflow.net/*
// @require      http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js
// @require      https://cdn.rawgit.com/timdown/rangyinputs/master/rangyinputs-jquery-src.js
// @require      https://cdn.rawgit.com/jeresig/jquery.hotkeys/master/jquery.hotkeys.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @updateURL    https://gist.github.com/shu8/daae9127fa0fe06d5e4d/raw/67668665eeda766f03e70b02fa6ac3901ccf620a/features.user.js
// ==/UserScript==
var functionsToCall = { //ALL the functions must go in here
 
    grayOutVotes: function () { // For graying out votes AND vote count:
        //alert('gray out votes');
        if ($('.deleted-answer').length) {
            $('.deleted-answer .vote-down-off, .deleted-answer .vote-up-off, .deleted-answer .vote-count-post').css('opacity', '0.5');
        }
    },
 
    moveBounty: function () { // For moving bounty to the top:
        //alert('move bounty');
        if ($('.bounty-notification').length) {
            $('.bounty-notification').insertAfter('.question .fw');
            $('.question .bounty-notification .votecell').remove();
        }
    },
 
    dragBounty: function () { // For draggable bounty window:
        //alert('draggable');
        $('.bounty-notification').click(function () {
            setTimeout(function () {
                $('#start-bounty-popup').draggable().css('cursor', 'move');
            }, 50);
        });
    },
 
    renameChat: function () { // For renaming Chat tabs:
        //alert('rename chat');
        if (window.location.href.indexOf('chat') > -1) {
            document.title = 'Chat - ' + document.title;
        }
    },
 
    exclaim: function () { // For remvoving exclamation mark:
        //alert('exclaim');
        var old = $("td.comment-actions > div > div > div.message-text");
        var newText = old.text().replace("!", ".");
        old.html(newText);
    },
 
    employeeStar: function () { // For looking for employees:
        //alert('employee');
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
                         "Joe Wilkie", "Mackenzie Ralston"];
        
        $('.comment, .deleted-answer-info, .employee-name, .started, .user-details').each(function () { //normal comments, deleted answers (deleted by), SE.com/about, question feed users, question/answer/edit owners
            var $divtext = $(this);
            $.each(employees, function (index, value) {             
                if ($divtext.find('a[href*="/users"]').html() == value) {
                    $divtext.find('a[href*="/users"]').append('<span class="mod-flair" title="possible employee">&Star;</span>');
                }
            });
        });
    },
 
    bulletReplace: function () { // For replacing disclosure bullets with normal ones:
        //alert('bullets');
        $('.dingus').each(function () {
            $(this).html('&#x25cf;');
        });
    },
 
    addEllipsis: function () { // For adding ellipsis to long names:
        //alert('ellipsis');
        $('.user-info .user-details').css('text-overflow', 'ellipsis');
    },
 
    moveCommentsLink: function () { // For adding the 'show x more comments' link before the commnents:
        //alert('comments link');
        $('.js-show-link.comments-link').each(function () {
            var $this2 = $(this);
            $("<tr><td></td><td>" + $this2.outerHTML() + "</td></tr>").insertBefore($(this).parent().closest('tr')).click(function () {
                $(this).hide();
            });
        });
    },
 
    unHideAnswer: function () {
        //alert('downvoted answer');
        $(".downvoted-answer").hover(function () {
            $(this).removeClass("downvoted-answer");
        }, function () {
            $(this).addClass("downvoted-answer");
        });
    },
 
    fixedTopbar: function () {
        //alert('topbar');
        $('.topbar').css({
            'position': 'fixed',
            'z-index': '1'
        });
    },
    
    highlightQuestions: function() {
        setTimeout(function() { //Need delay to make sure the CSS is applied
            //alert('highlight alternative');
            if (window.location.href.indexOf('superuser') > -1) { //superuser
                var betterCSS = {
                    backgroundColor: '#a1eaff',
                    color: 'black'                
                };
            }
            else if (window.location.href.indexOf('stackoverflow') > -1) { //stackoverflow
                var betterCSS = {
                    backgroundColor: '#ffefc6',
                    borderWidth: '0'                
                };
            }
              else {//if (window.location.href.indexOf('.stackexchange.com') > -1) {
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
    
    displayName: function() {
        //alert('display name');
        var uname = $('.gravatar-wrapper-24').attr('title');
        var insertme = "<span class='reputation links-container' style='color:white;' title='"+uname+"'>"+uname+"</span>";
        $(insertme).insertBefore('.gravatar-wrapper-24');
    },
    
    colorAnswerer: function() {
        //alert('color answerer comments');
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
    
    addBullets: function() {
        var list = '- ' + $('[id^="wmd-input"]').getSelection().text.split('\n').join('\n- ');
        $('[id^="wmd-input"]').replaceSelectedText(list);
    },
 
    addKbd: function() {
        $('[id^="wmd-input"]').surroundSelectedText("<kbd>", "</kbd>");
    },
    
    kbdAndBullets: function() {
        //alert('add kbd and list options');
        var kbdBtn = $('<button/>', {
            text: '<>',
            class: 'wmd-button',
            click: function (e) {
                e.preventDefault();
                functionsToCall.addKbd();
            }
        }).css('left', '400px');
        
        var listBtn = $('<button/>', {
            text: '-',
            class: 'wmd-button',
            click: function (e) {
                e.preventDefault();
                functionsToCall.addBullets();
            }
        }).css('left', '425px');
        
        setTimeout(function() {
            $('[id^="wmd-redo-button"]').after(kbdBtn);
            $('[id^="wmd-redo-button"]').after(listBtn);
        }, 500);
        
        $('[id^="wmd-input"]').bind('keydown', 'alt+l', function () {
            functionsToCall.addBullets();
        });
        
        $('[id^="wmd-input"]').bind('keydown', 'alt+k', function () {
            functionsToCall.addKbd();
        });        
    },
    
    addCheckboxes: function() {
        $('#reasons').remove(); //remove the div containing everything, we're going to add/remove stuff now:
        if ($('[class^="inline-editor"]').length < 0) { //if there is no inline editor, do nothing
            ;
        } else if (window.location.href.indexOf('/edit') > -1 || $('[class^="inline-editor"]').length > 0) { //everything else
            $('.form-submit').before('<div id="reasons"></div>');
    
            $.each(JSON.parse(GM_getValue('editReasons')), function (i, obj) {
                $('#reasons').append('<label><input type="checkbox" value="' + this[1] + '"</input>' + this[0] + '</label>&nbsp;');
            });
    
            $('#reasons input[type="checkbox"]').css('vertical-align', '-2px');
    
            $('#reasons label').hover(function () {
                $(this).css({ //on hover
                    'background-color': 'gray',
                    'color': 'white'
                });
            }, function () {
                $(this).css({ //on un-hover
                    'background-color': 'white',
                    'color': 'inherit'
                });
            });
    
            var editCommentField = $('[id^="edit-comment"]');
            $('#reasons input[type="checkbox"]').change(function () {
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
    
    displayDeleteValues: function() { //Display the items from list and add buttons to delete them
        $('#currentValues').html(' ');
        $.each(JSON.parse(GM_getValue('editReasons')), function (i, obj) {
            $('#currentValues').append(this[0] + ' - ' + this[1] + '<input type="button" id="' + i + '" value="Delete"><br />');
        });
        functionsToCall.addCheckboxes();
    },
    
    editComment: function() {
        //alert('edit comment');
        var cssForDiv = {
            'display': 'inline-block',
            'position': 'fixed',
            'width': '50%',
            'top': '50%',
            'z-index': '2',
            'margin': '-100px 00 -150px',
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
        
        $('#closeDialogEditReasons').css('cursor', 'pointer').click(function () {
            $(this).parent().hide(500);
        });
        
        $('#resetEditReasons').css('cursor', 'pointer').click(function () {
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
        
        $('#dialogEditReasons').on('click', 'input[value="Delete"]', function () { //Click handler to delete when delete button is pressed
            var delMe = $(this).attr('id');
            options.splice(delMe, 1); //actually delete it
            GM_setValue('editReasons', JSON.stringify(options)); //save it
            functionsToCall.displayDeleteValues(); //display the items again (update them)
        });
        
        $('#submitUpdate').click(function () { //Click handler to update the array with custom value
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
            $('#editReasonsLink').click(function () {
                functionsToCall.displayDeleteValues();
                $('#dialogEditReasons').show(500); //Show the dialog to view and update values
            });
        }, 500);
        
        $('.post-menu > .edit-post').click(function () {
            setTimeout(function () {
                functionsToCall.addCheckboxes();
            }, 500);
        });
    },
    
    shareLinksMarkdown: function() { 
        //alert('change share value')
        $('.short-link').click(function() {
            setTimeout(function() {
                $('.share-tip input').val('[' + $('#question-header a').html() + '](' + document.URL + ')');
        	}, 500);
        });
    },
    
    commentShortcuts: function() {
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
    
    unspoil: function() {
        $('#answers div[id*="answer"], div[id*="question"]').each(function() {
            $(this).find('.post-menu').append('<span class="lsep">|</span><a id="showSpoiler-' + $(this).attr("id") + '" href="javascript:void(0)">unspoil</span>');
        });
        $('a[id*="showSpoiler"]').click(function() {
            var x = $(this).attr('id').split(/-(.+)?/)[1];
            $('#'+x+' .spoiler').css('color', 'inherit'); //for normal text
            $('#'+x+' .spoiler a').css('color', '#0000FF').css('text-decoration', 'underline'); //for links
            $('#'+x+' .spoiler code').css('color', '#222').css('background', '#eee'); //for links
        });          
    }
};
 
// Format for options below: <label for='id'>Text:</label><input type='checkbox' id='id' checked><br />
var div = "<div id='featureGMOptions' style='display:inline-block; position:fixed; margin:auto; top:50%; margin:-100px 0 0 -150px; z-index:2; background-color:gray; color:white; -webkit-border-radius: 15px; -moz-border-radius: 15px; border-radius: 15px;'>\
                <span id='closeFeature' style='float:right;'>Close</span>    <span id='featureTitle'><h2>Extra Feature Options</h2></span> \
                <label for='grayOutVotes'>Gray out deleted votes:</label> <input type='checkbox' id='grayOutVotes' checked/> <br /> \
                <label for='moveBounty'>Move 'start bounty' to top:</label> <input type='checkbox' id='moveBounty' checked /> <br /> \
                <label for='dragBounty'>Make bounty box draggable:</label> <input type='checkbox' id='dragBounty' checked /> <br /> \
                <label for='renameChat'>Prepend 'Chat - ' to chat tabs' titles:</label> <input type='checkbox' id='renameChat' checked /> <br /> \
                <label for='exclaim'>Remove exclamation mark on message:</label> <input type='checkbox' id='exclaim' checked /> <br /> \
                <label for='employeeStar'>Add star after employee names:</label> <input type='checkbox' id='employeeStar' checked /> <br /> \
                <label for='bulletReplace'>Replace triangluar bullets with normal ones:</label> <input type='checkbox' id='bulletReplace' checked /> <br /> \
                <label for='addEllipsis'>Add ellipsis to long names:</label> <input type='checkbox' id='addEllipsis' checked /> <br /> \
                <label for='moveCommentsLink'>Move 'show x more comments' to the top:</label> <input type='checkbox' id='moveCommentsLink' checked /> <br /> \
                <label for='unHideAnswer'>Un-gray-out downvoted answers:</label> <input type='checkbox' id='unHideAnswer' checked /> <br /> \
                <label for='fixedTopbar'>Fix topbar position:</label> <input type='checkbox' id='fixedTopbar' checked /> <br /> \
                <label for='highlightQuestions'>Alternate favourite questions highlighing::</label> <input type='checkbox' id='highlightQuestions' checked /> <br /> \
                <label for='displayName'>Display name before gravatar:</label> <input type='checkbox' id='displayName' checked /> <br />\
                <label for='colorAnswerer'>Color answerer's comments:</label> <input type='checkbox' id='colorAnswerer' checked /> <br />\
                <label for='kbdAndBullets'>Add KBD and list buttons to editor toolbar:</label> <input type='checkbox' id='kbdAndBullets' checked /> <br />\
                <label for='editComment'>Pre-defined edit comment options:</label> <input type='checkbox' id='editComment' checked /> <br />\
				<label for='shareLinksMarkdown'>Edit 'share' link to format of [post-name](url):</label> <input type='checkbox' id='shareLinksMarkdown' checked /> <br />\
				<label for='commentShortcuts'>Use Ctrl+I,B,K (to italicise, bolden and add code backticks) in comments:</label> <input type='checkbox' id='commentShortcuts' checked /> <br />\
				<label for='unspoil'>Add a link to show all spoilers in a post:</label> <input type='checkbox' id='unspoil' checked /> <br />\
                <input type='submit' id='submitOptions' value='Submit' /><br /> \
           </div>";
$('body').append(div);
$('#featureGMOptions').draggable().hide(); //Hide it at first
$('#featureTitle').css('cursor', 'move');
 
if (window.location.href.indexOf('/users/') > -1) { //Add the add features link
    $('.sub-header-links.fr').append('<span class="lsep">|</span><a href="javascript:;" id="addFeaturesLink">add features</a>');
    $('#addFeaturesLink').click(function () {
        GM_deleteValue('featureOptions'); //Delete the setting when clicked
        $('#featureGMOptions').show(500);
    });
}
 
$('#featureGMOptions > #closeFeature').css('cursor', 'pointer').click(function () {
    $('#featureGMOptions').hide(500);
});
 
$(window).bind("load", function() {
    if (GM_getValue("featureOptions", -1) != -1) { //If the setting is already set
        var featureOptions = JSON.parse(GM_getValue("featureOptions"));
        for (i = 0; i < featureOptions.length; ++i) {
            functionsToCall[featureOptions[i]](); //Call the functions that were chosen
        }
    } else { //If not, set it:
        $('#featureGMOptions').show(); //Show the dialog
        var featureOptions = [];
    }
    
    $('#submitOptions').click(function () {
        var featureOptions = [];
        if ($('input[type=checkbox]:checked').length === 0) { //If nothing's checked
            alert('Please check at least one box!');
        } else { //If something is
            $('input[type=checkbox]:checked').each(function () {
                var x = $(this).attr('id');
                featureOptions.push(x); //Add the function's ID (also the checkbox's ID) to the array
            });
            GM_setValue('featureOptions', JSON.stringify(featureOptions)); //Save the setting
            console.log('Options saved: ' + featureOptions);
            alert('Options were saved!');
            $('#featureGMOptions').hide(500);
        }
    });
});

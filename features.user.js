+// ==UserScript==
+// @name         SE Extra Features with Cookies
+// @namespace    http://stackexchange.com/users/4337810/%E1%B9%A7%D0%BD%CA%8A%C3%9F
+// @version      0.1
+// @description  Adds a bunch of optional 'features' to the StackExchange sites.
+// @author       ṧнʊß (http://stackexchange.com/users/4337810/%E1%B9%A7%D0%BD%CA%8A%C3%9F)
+// @match        *://*.stackexchange.com/*
+// @match        *://*.stackoverflow.com/*
+// @match        *://*.superuser.com/*
+// @match        *://*.serverfault.com/*
+// @match        *://*.askubuntu.com/*
+// @match        *://*.stackapps.com/*
+// @match        *://*.mathoverflow.net/*
+// @require      http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js
+// @require      https://cdn.rawgit.com/carhartl/jquery-cookie/master/src/jquery.cookie.js
+// @grant        none
+// ==/UserScript==
+var functionsToCall = { //ALL the functions must go in here
+
+    grayOutVotes: function () { // For graying out votes AND vote count:
+        //alert('gray out votes');
+        if ($('.deleted-answer').length) {
+            $('.deleted-answer .vote-down-off, .deleted-answer .vote-up-off, .deleted-answer .vote-count-post').css('opacity', '0.5');
+        }
+    },
+
+    moveBounty: function () { // For moving bounty to the top:
+        //alert('move bounty');
+        if ($('.bounty-notification').length) {
+            $('.bounty-notification').insertAfter('.question .fw');
+            $('.question .bounty-notification .votecell').remove();
+        }
+    },
+
+    dragBounty: function () { // For draggable bounty window:
+        //alert('draggable');
+        $('.bounty-notification').click(function () {
+            setTimeout(function () {
+                $('#start-bounty-popup').draggable().css('cursor', 'move');
+            }, 50);
+        });
+    },
+
+    renameChat: function () { // For renaming Chat tabs:
+        //alert('rename chat');
+        if (window.location.href.indexOf('chat') > -1) {
+            document.title = 'Chat - ' + document.title;
+        }
+    },
+
+    exclaim: function () { // For remvoving exclamation mark:
+        //alert('exclaim');
+        var old = $("td.comment-actions > div > div > div.message-text");
+        var newText = old.text().replace("!", ".");
+        old.html(newText);
+    },
+
+    employeeStar: function () { // For looking for employees:
+        //alert('employee');
+        var employees = ["Jeff Atwood", "Joel Spolsky", "Jarrod Dixon", "Geoff Dalgas", "David Fullerton", "Korneel Bouman", "Robert Cartaino", "Kevin Montrose", "MandyK", "Marc Gravell", "balpha", "Matt Sherman", "Danny Miller", "Jason Punyon", "NickC", "Kyle Brandt", "Jin", "Tall Jeff", "Zypher", "Nick Craver", "Nick Larsen", "Shog9", "Greg", "Alex Miller", "GuyZee", "abby hairboat", "samthebrand", "Laura", "Grace Note", "Dimitar Stanimiroff", "Hammer", "Peter Grace", "Charles", "Anna Lear", "stevvve", "Bethany", "Andrew17", "Kizzle", "Jay", "mjibson", "Stefan Schwarzgruber", "Will Cole", "Sean Bave", "Robyn", "Bart Silverstrim", "Jaydles", "Maxwell Applebaum", "Snails", "Jordan Conner", "Bodhi", "cashenhu", "rb4", "Maurbawlz", "CMartin", "Joe Humphries", "Max", "Oded", "Val Perez", "rossipedia", "Derek Still", "Tim Post", "Paul", "PDePree", "Sklivvz", "Todd Jenkins", "Jim Egan", "Kaziorex", "Ben Collins", "TomOnTime", "Dr.D", "David", "Sara Rayman", "Monika P", "Prefontaine", "m0sa", "Jon Ericson", "Juice", "Tania", "Angela", "Hynes", "Kasra Rahjerdi", "Gabe", "Bret Copeland", "Arie Litovsky", "Pops", "Megan Spaans", "Whitney Dwyer", "Philip Camillo", "onesysadmin", "Aurelien Gasser", "Alyssa Tomback", "Alex Cresswell", "couchand", "Brian Nickel", "Princess", "Yaakov Ellis", "Ana Hevesi", "Noureddine Latrech", "Hertz", "Jill Ciaccia", "Tobias Schmidt", "Jon Chan", "Johanna Perrin", "Kristian Bright", "John LeClerc", "Rob Dandorph", "Jessica Genther", "Courtny Cotten", "Stephanie", "Sean Durkin", "rla4", "Alex Warren", "Jaime Kronick", "Alexa", "Samuel Rouayrenc", "Josh Helfgott", "Peter Tarr", "Shane Madden", "Nextraztus", "G-Wiz", "Dan O'Boyle", "yolovolo", "Griffin Sandberg", "ODB", "Mark Villarreal", "Lowell Gruman Jr.", "bweber", "Natalie How", "Haney", "jmac", "Emmanuel Andem-Ewa", "Jess Pardue", "Dean Ward", "Steve Trout", "Nicholas Chabanovsky", "Kelli Ward", "Noah Neuman", "Lauren Roemer", "Heidi Hays", "Joe Wilkie", "Mackenzie Ralston"];
+        $('.comment a, .deleted-answer-info a, .employee-name, .started a, .user-details a').each(function () { //normal comments, deleted answers (deleted by), SE.com/about, question feed users, question/answer/edit owners
+            var $divtext = $(this);
+            $.each(employees, function (index, value) {
+                if ($divtext.is(':contains(' + value + ')')) {
+                    $divtext.append('<span class="mod-flair" title="possible employee">&Star;</span>');
+                }
+            });
+        });
+    },
+
+    bulletReplace: function () { // For replacing disclosure bullets with normal ones:
+        //alert('bullets');
+        $('.dingus').each(function () {
+            $(this).html('&#x25cf;');
+        });
+    },
+
+    addEllipsis: function () { // For adding ellipsis to long names:
+        //alert('ellipsis');
+        $('.user-info .user-details').css('text-overflow', 'ellipsis');
+    },
+
+    moveCommentsLink: function () { // For adding the 'show x more comments' link before the commnents:
+        //alert('comments link');
+        $('.js-show-link.comments-link').each(function () {
+            var $this2 = $(this);
+            $("<tr><td></td><td>" + $this2.outerHTML() + "</td></tr>").insertBefore($(this).parent().closest('tr')).click(function () {
+                $(this).hide();
+            });
+        });
+    },
+
+    unHideAnswer: function () {
+        //alert('downvoted answer');
+        $(".downvoted-answer").hover(function () {
+            $(this).removeClass("downvoted-answer");
+        }, function () {
+            $(this).addClass("downvoted-answer");
+        });
+    },
+
+    fixedTopbar: function () {
+        //alert('topbar');
+        $('.topbar').css({
+            'position': 'fixed',
+            'z-index': '1'
+        });
+    }
+};
+
+var div = "<div id='featureCookieOptions' style='display:inline-block; position:fixed; margin:auto; top:50%; margin:-100px 0 0 -150px; z-index:2; background-color:gray; color:white; -webkit-border-radius: 15px; -moz-border-radius: 15px; border-radius: 15px;'><span id='closeFeature' style='float:right;'>Close</span><span id='featureTitle'><h2>Extra Feature Options</h2></span> <label for='grayOutVotes'>Gray out deleted votes:</label> <input type='checkbox' id='grayOutVotes' checked/> <br /> <label for='moveBounty'>Move 'start bounty' to top:</label> <input type='checkbox' id='moveBounty' checked /> <br /> <label for='dragBounty'>Make bounty box draggable:</label> <input type='checkbox' id='dragBounty' checked /> <br /> <label for='renameChat'>Prepend 'Chat - ' to chat tabs' titles:</label> <input type='checkbox' id='renameChat' checked /> <br /> <label for='exclaim'>Remove exclamation mark on message:</label> <input type='checkbox' id='exclaim' checked /> <br /> <label for='employeeStar'>Add star after employee names:</label> <input type='checkbox' id='employeeStar' checked /> <br /> <label for='bulletReplace'>Replace triangluar bullets with normal ones:</label> <input type='checkbox' id='bulletReplace' checked /> <br /> <label for='addEllipsis'>Add ellipsis to long names:</label> <input type='checkbox' id='addEllipsis' checked /> <br /> <label for='moveCommentsLink'>Move 'show x more comments' to the top:</label> <input type='checkbox' id='moveCommentsLink' checked /> <br /> <label for='unHideAnswer'>Un-gray-out downvoted answers:</label> <input type='checkbox' id='unHideAnswer' checked /> <br /> <label for='fixedTopbar'>Fix topbar position:</label> <input type='checkbox' id='fixedTopbar' checked /> <br /> <input type='submit' id='submitOptions' value='Submit' /> <br /> </div>";
+$('body').append(div);
+$('#featureCookieOptions').draggable().hide(); //Hide it at first
+$('#featureTitle').css('cursor', 'move');
+
+if (window.location.href.indexOf('/users/') > -1) { //Add the add features link
+    $('.sub-header-links.fr').append('<span class="lsep">|</span><a href="javascript:;" id="addFeaturesLink">add features</a>');
+    $('#addFeaturesLink').click(function () {
+        $.removeCookie('featureOptions', {
+            path: '/'
+        });
+        $('#featureCookieOptions').show(500);
+    });
+}
+
+$('#featureCookieOptions > #closeFeature').css('cursor', 'pointer').click(function () {
+    $('#featureCookieOptions').hide(500);
+});
+
+
+if ($.cookie('featureOptions')) { //If the cookie's already set
+    var featureOptions = JSON.parse($.cookie('featureOptions'));
+    for (i = 0; i < featureOptions.length; ++i) {
+        functionsToCall[featureOptions[i]](); //Call the functions that were chosen
+    }
+} else { //If not, make it:
+    $('#featureCookieOptions').show(); //Show the dialog
+    var featureOptions = [];
+}
+
+$('#submitOptions').click(function () {
+    var featureOptions = [];
+    if ($('input[type=checkbox]:checked').length == 0) { //If nothing's checked
+        alert('Please check at least one box!');
+    } else { //If something is
+        $('input[type=checkbox]:checked').each(function () {
+            var x = $(this).attr('id');
+            featureOptions.push(x); //Add the function's ID (also the checkbox's ID) to the array
+        });
+        $.cookie('featureOptions', JSON.stringify(featureOptions), {
+            expires: 365,
+            path: '/'
+        });
+        console.log('Cookie set: ' + featureOptions);
+        alert('Cookie was set!');
+        $('#featureCookieOptions').hide(500);
+    }
+});

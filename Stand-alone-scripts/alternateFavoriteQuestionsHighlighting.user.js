// ==UserScript==
// @name         Interesting Questions alternate highlighting
// @namespace    http://stackexchange.com/users/4337810/%E1%B9%A7%D0%BD%CA%8A%C3%9F
// @version      1.0
// @description  Changes Stack Exchange websites 'favorite tags' highlighting to just the tag.
// @author       ṧнʊß
// @match        *://*.stackexchange.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://*.superuser.com/*
// @match        *://*.serverfault.com/*
// @match        *://*.askubuntu.com/*
// @match        *://*.stackapps.com/*
// @match       *://*.mathoverflow.net/*
// @grant        none
// ==/UserScript==
var userscript = function($) {
    $(window).bind("load", function() {
        
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
        else if (window.location.href.indexOf('.stackexchange.com') > -1) {
            if (window.location.href.indexOf('meta') === -1) { //beta sites
                var betterCSS = {
            	backgroundColor: '#c3dafa',
            	borderWidth: '0'                
                }; 
            }
        }

        var x = $("#interestingTags").text();
        var interesting = x.split(' ');
        interesting.pop(); //Because there's one extra value at the end

        

        $(".tagged-interesting > .summary > .tags > .post-tag").filter(function(index) {
            return interesting.indexOf($(this).text()) > -1;
        }).css(betterCSS);

        $(".tagged-interesting").removeClass("tagged-interesting");
    });
};

var el = document.createElement('script');
el.type = 'text/javascript';
el.text = '(' + userscript + ')(jQuery);';
document.head.appendChild(el);

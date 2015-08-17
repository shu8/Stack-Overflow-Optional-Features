// ==UserScript==
// @name         Sticky vote buttons
// @namespace    http://stackexchange.com/users/4337810/
// @version      1.0
// @description  Makes the vote buttons next to posts sticky whilst scrolling on that post
// @author       ᔕᖺᘎᕊ (http://stackexchange.com/users/4337810/)
// @match        *://*.stackexchange.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://*.superuser.com/*
// @match        *://*.serverfault.com/*
// @match        *://*.askubuntu.com/*
// @match        *://*.stackapps.com/*
// @match        *://*.mathoverflow.net/*
// @require      https://cdn.rawgit.com/EnzoMartin/Sticky-Element/master/jquery.stickyelement.js
// @grant        none
// ==/UserScript==

$(document).ready(function() {
    $(window).scroll(function(){
		$(".votecell").each(function(){
			var offset = 0;
				if($(".topbar").css("position") == "fixed"){
					offset = 34;
				}
			var vote = $(this).find(".vote");
			if($(this).offset().top - $(window).scrollTop() + offset <= 0){
				if($(this).offset().top + $(this).height() + offset - $(window).scrollTop() - vote.height() > 0){
					vote.css({position:"fixed", left:$(this).offset().left, top:0 + offset});
				}else{
					vote.css({position:"relative", left:0, top:$(this).height()-vote.height()});
				}
			}else{
				vote.css({position:"relative", left:0, top:0});
			}
		});
	});
});

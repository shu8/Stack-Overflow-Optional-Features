// ==UserScript==
// @name         Add cool CSS to SE sites
// @namespace    http://stackexchange.com/users/4337810/
// @version      1.0
// @description  Adds cool material design CSS to SE sites
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

$('head').append('<link rel="stylesheet" href="https://cdn.rawgit.com/shu8/SE-Answers_scripts/master/coolMaterialDesignCss.css" type="text/css" />');

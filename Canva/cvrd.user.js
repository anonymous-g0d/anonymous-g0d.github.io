// ==UserScript==
// @name         Canva Pro by anonymous.g0d
// @namespace    .js Scripts
// @icon        https://raw.githubusercontent.com/anonymous-g0d/anonymous-g0d.github.io/main/g0dbin/favicon.ico
// @version      1.0beta
// @match        https://bingotingo.com/best-social-media-platforms/
// @match        https://biozium.com/public/bio-links/*
// @author      https://github.com/anonymous-g0d
// @description Enjoy!
// @updateURL    https://raw.githubusercontent.com/anonymous-g0d/anonymous-g0d.github.io/main/Canva/cvrd.user.js
// @downloadURL  https://raw.githubusercontent.com/anonymous-g0d/anonymous-g0d.github.io/main/Canva/cvrd.user.js
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    function checkAndRedirect() {
        let linkFound = false;

        if (window.location.hostname === 'bingotingo.com') {
            const button = document.querySelector('.su-button-center a');
            if (button && button.href) {
                window.location.href = button.href;
                linkFound = true;
            }
        } else if (window.location.hostname === 'biozium.com') {
            const links = document.querySelectorAll('.quick-bio-item a');
            links.forEach(link => {
                if (link.href.startsWith('https://www.canva.com/brand/join?')) {
                    window.location.href = link.href;
                    linkFound = true;
                }
            });
        }
    }

    function handleRedirect() {
        checkAndRedirect();
    }

    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            handleRedirect();
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    handleRedirect();
})();

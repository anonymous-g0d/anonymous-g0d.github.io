// ==UserScript==
// @name         Canva Pro by anonymous.g0d
// @namespace    .js Scripts
// @icon        https://raw.githubusercontent.com/anonymous-g0d/anonymous-g0d.github.io/main/g0dbin/favicon.ico
// @version      1.1
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
            let toolsPrinceLinks = 0;

            links.forEach(link => {
                if (link.href.startsWith('https://www.canva.com/brand/join?')) {
                    window.location.href = link.href;
                    linkFound = true;
                } else if (link.href === 'https://toolsprince.com') {
                    toolsPrinceLinks += 1;
                }
            });

            if (toolsPrinceLinks >= 2) {
                showAlertBox();
            }
        }
    }

    function showAlertBox() {
        const message = `
            <div style="position: fixed; top: 20%; left: 50%; transform: translate(-50%, -50%); padding: 20px; background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; border-radius: 5px; z-index: 10000;">
                <h2 style="margin-top: 0;">ข้อความจาก g0d</h2>
                <p>โปรดรออัพเดท กลับมาเช็คอีกรอบในภายหลัง</p>
                <p>Please wait for updates and check again later.</p>
            </div>
        `;
        const container = document.createElement('div');
        container.innerHTML = message;
        document.body.appendChild(container);
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

/** Andrés Fernández Burón
 *  Noviembre de 2020
 *
 *  Copyright 2020
 *  Todos los derechos reservados
 *
 *  Aplicación web: Mi sitio web
 *
 *  Fichero con el script JS de la página Software de mi sitio web.
 *
 */
"use strict";
import { initMenuButtons } from './menu.js';
import { setCopyright, setLayout } from './functions.js';
import { isAndroidDevice, isIosDevice, isAppleDevice, fixMainForAndroid, fixMainForIos } from './compatibility.js';
var readMoreButtons;
var readMorePanels;
function switchReadMore(btn, panel) {
    if (btn.classList.contains('pulsado')) {
        btn.classList.remove('pulsado');
        btn.innerHTML = 'Leer más ...';
        panel.style.display = 'none';
    }
    else {
        hideAllReadMorePanels();
        btn.classList.add('pulsado');
        btn.innerHTML = 'Leer menos ...';
        panel.style.display = 'block';
    }
}
function hideAllReadMorePanels() {
    for (let i = 0; i < readMoreButtons.length; i++) {
        if (readMorePanels[i].style.display == 'block') {
            switchReadMore(readMoreButtons[i], readMorePanels[i]);
        }
    }
}
function initArticleButtons() {
    readMoreButtons = document.querySelectorAll('main article button');
    readMorePanels = Array();
    if (readMoreButtons) {
        for (let i = 0; i < readMoreButtons.length; i++) {
            readMorePanels[i] = readMoreButtons[i].previousElementSibling;
            readMorePanels[i].style.display = 'none';
            readMoreButtons[i].addEventListener('click', function () {
                switchReadMore(this, readMorePanels[i]);
            });
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    initMenuButtons();
    initArticleButtons();
    if (isAppleDevice()) {
        if (isIosDevice()) {
            fixMainForIos();
        }
    }
    else {
        if (isAndroidDevice()) {
            fixMainForAndroid();
        }
        let back = document.querySelector('body > figure:last-of-type');
        if (back) {
            back.style.backgroundAttachment = 'fixed';
        }
        let anim = document.querySelector('body > figure:nth-last-of-type(2)');
        if (anim) {
        }
        let titles = document.querySelectorAll('body > main > section > h2');
        if (titles) {
            for (let i = 0; i < titles.length; i++) {
                titles[i].style.setProperty('position', 'sticky', 'important');
                titles[i].style.top = '10vh';
            }
        }
    }
    setCopyright();
    setLayout();
});

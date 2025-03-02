/** Andrés Fernández Burón
 *  Noviembre de 2020
 *
 *  Copyright 2020
 *  Todos los derechos reservados
 *
 *  Aplicación web: Mi sitio web
 *
 *  Fichero con el script JS de la página Información de mi sitio web.
 *
 */
"use strict";
import { initMenuButtons } from './menu.js';
import { setCopyright, setLayout } from './functions.js';
import { isAndroidDevice, isIosDevice, isAppleDevice, fixMainForAndroid, fixMainForIos } from './compatibility.js';
var radioButtons;
var assertivePars;
function initModeSwitcher() {
    radioButtons = document.querySelectorAll('body > main > section > article > form > input');
    if (radioButtons) {
        for (let i = 0; i < radioButtons.length; i++) {
            radioButtons[i].addEventListener('change', function () {
                switchMode(radioButtons[i]);
            });
        }
    }
    assertivePars = document.querySelectorAll('body > main .asertivo');
    if (assertivePars) {
        for (let i = 0; i < assertivePars.length; i++) {
            assertivePars[i].style.display = 'none';
        }
    }
}
function switchMode(radioBtn) {
    if (radioBtn.id == 'formal') {
        for (let i = 0; i < assertivePars.length; i++) {
            assertivePars[i].style.display = 'none';
        }
    }
    else {
        for (let i = 0; i < assertivePars.length; i++) {
            assertivePars[i].style.display = 'block';
        }
    }
    return radioBtn;
}
document.addEventListener('DOMContentLoaded', function () {
    initMenuButtons();
    initModeSwitcher();
    if (isAppleDevice()) {
        if (isIosDevice()) {
            fixMainForIos();
        }
        let parallaxBoxes = document.querySelectorAll('body > main > figure');
        if (parallaxBoxes) {
            for (let i = 0; i < parallaxBoxes.length; i++) {
                parallaxBoxes[i].style.height = '50vh';
            }
        }
        let parallaxBoxP1 = document.querySelectorAll('body > main > figure > figcaption:first-of-type');
        if (parallaxBoxP1) {
            for (let i = 0; i < parallaxBoxP1.length; i++) {
                parallaxBoxP1[i].style.bottom = '10%';
            }
        }
        let parallaxBoxP2 = document.querySelectorAll('body > main > figure > figcaption:last-of-type');
        if (parallaxBoxP2) {
            for (let i = 0; i < parallaxBoxP2.length; i++) {
                parallaxBoxP2[i].style.top = '15%';
            }
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
        let parallaxBoxes = document.querySelectorAll('body > main > figure > figcaption');
        if (parallaxBoxes) {
            for (let i = 0; i < parallaxBoxes.length; i++) {
                parallaxBoxes[i].style.position = 'sticky';
                if (i % 2 == 0) {
                    parallaxBoxes[i].style.setProperty('top', '90%', 'important');
                    parallaxBoxes[i].style.paddingTop = '10px';
                }
                else {
                    parallaxBoxes[i].style.setProperty('top', '9%', 'important');
                }
            }
        }
    }
    setCopyright();
    setLayout();
});

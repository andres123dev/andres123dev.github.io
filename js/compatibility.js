/** Andrés Fernández Burón
 *  Noviembre de 2020
 *
 *  Copyright 2020
 *  Todos los derechos reservados
 *
 *  Aplicación web: Mi sitio web
 *
 *  Fichero con las funciones JS para gestionar la compatibilidad de mi sitio web con diferentes dispositivos.
 *
 */
"use strict";
export function isAndroidDevice() {
    if (navigator.userAgent.toLowerCase().indexOf('android') != -1) {
        return true;
    }
    return false;
}
export function isIosDevice() {
    if (/(iPhone|iPod|iPad)/.test(navigator.userAgent)) {
        return true;
    }
    return false;
}
export function isAppleDevice() {
    if (/(iPhone|iPod|iPad|Mac OS)/.test(navigator.userAgent)) {
        return true;
    }
    return false;
}
export function isMobileDevice() {
    if (isAndroidDevice() || isIosDevice()) {
        return true;
    }
    return false;
}
export function fixMain(mainStart) {
    let figures = document.querySelectorAll('body > figure');
    if (figures) {
        for (let i = 0; i < figures.length; i++) {
            figures[i].style.height = mainStart;
        }
    }
    let main = document.querySelector('body > main');
    if (main) {
        main.style.top = mainStart;
    }
}
export function fixMainForAndroid() {
    fixMain('97vh');
}
export function fixMainForIos() {
    fixMain('95vh');
}

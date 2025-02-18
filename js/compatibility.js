/** Andrés Fernández Burón
 *  Noviembre de 2020
 *
 *  Copyright 2020
 *  Todos los derechos reservados
 *
 *  Aplicación web: Mi sitio web
 *
 *  Fichero con las funciones JS para gestionar la compatibilidad de mi sitio web con MAC e IOS.
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
        console.log('HUA: ' + navigator.userAgent);
        console.log('HUA: ' + navigator.userAgent.toLowerCase());
        console.log('HUA: ' + navigator.userAgent.toLowerCase().indexOf('android'));
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

/** Andrés Fernández Burón
 *  Noviembre de 2020
 *
 *  Copyright 2020
 *  Todos los derechos reservados
 *
 *  Aplicación web: Mi sitio web
 *
 *  Fichero con las funciones JS para gestionarl la compatibilidad de mi sitio web con MAC e IOS.
 *
 */
"use strict";
export function isIosDevice() {
    if (/^(iPhone|iPod|iPad)/.test(navigator.userAgent)) {
        return true;
    }
    return false;
}
export function isAppleDevice() {
    if (/^(iPhone|iPod|iPad|Mac OS)/.test(navigator.userAgent)) {
        return true;
    }
    return false;
}

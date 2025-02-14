/** Andrés Fernández Burón
 *  Noviembre de 2020
 *
 *  Copyright 2020
 *  Todos los derechos reservados
 *
 *  Aplicación web: Mi sitio web frontend
 *  Fichero con las funciones JS comunes a mi sitio web.
 *
 */
"use strict";
export function getStrYear() {
    return (new Date()).getFullYear();
}
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
export function setCopyright() {
    let spanAnio = document.getElementById('anio');
    if (spanAnio) {
        spanAnio.innerText = getStrYear().toString();
    }
}
export function setLayout() {
    document.oncopy = function () {
        alert('Andres Fernandez Buron\nCopyright 2020-' + getStrYear() + '\nTodos los derechos reservados');
        return false;
    };
    document.oncut = function () {
        alert('Andres Fernandez Buron\nCopyright 2020-' + getStrYear() + '\nTodos los derechos reservados');
        return false;
    };
    window.onload = function () { document.onselectstart = function () { return false; }; };
    document.oncontextmenu = function () { return false; };
    window.onload = function () { document.onmousedown = function () { return false; }; };
}

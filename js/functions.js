/** Andrés Fernández Burón
 *  Noviembre de 2020
 *
 *  Copyright 2020
 *  Todos los derechos reservados
 *
 *  Aplicación web: Mi sitio web
 *
 *  Fichero con las funciones JS comunes a mi sitio web.
 *
 */
"use strict";
export function getStrYear() {
    return (new Date()).getFullYear();
}
export function setCopyright() {
    let spanAnio = document.getElementById('anio');
    if (spanAnio) {
        spanAnio.innerText = getStrYear().toString();
    }
    document.oncopy = function () {
        alert('Andres Fernandez Buron\nCopyright 2020-' + getStrYear() + '\nTodos los derechos reservados');
        return false;
    };
    document.oncut = function () {
        alert('Andres Fernandez Buron\nCopyright 2020-' + getStrYear() + '\nTodos los derechos reservados');
        return false;
    };
}
export function setLayout() {
    window.onload = function () { document.onselectstart = function () { return false; }; };
    document.oncontextmenu = function () { return false; };
    window.onload = function () { document.onmousedown = function () { return false; }; };
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

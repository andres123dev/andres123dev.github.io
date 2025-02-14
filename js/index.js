/** Andrés Fernández Burón
 *  Noviembre de 2020
 *
 *  Copyright 2020
 *  Todos los derechos reservados
 *
 *  Aplicación web: Mi sitio web frontend
 *  Fichero con el script JS de la página Principal de mi sitio web.
 *
 */
"use strict";
import { initMenuButtons } from './menu.js';
import { setCopyright, setLayout } from './functions.js';
document.addEventListener('DOMContentLoaded', function () {
    initMenuButtons();
    setCopyright();
    setLayout();
    if (!isAppleDevice()) {
        let back = document.querySelector('body > figure:last-of-type');
        if (back) {
            back.style.backgroundAttachment = 'fixed';
        }
    }
});

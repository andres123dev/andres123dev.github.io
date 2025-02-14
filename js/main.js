/** Andrés Fernández Burón
 *  Noviembre de 2020
 *
 *  Copyright 2020
 *  Todos los derechos reservados
 *
 *  Aplicación web: Mi sitio web
 *
 *  Fichero con el script JS Principal de mi sitio web.
 *
 */
"use strict";
import { initMenuButtons } from './menu.js';
import { setCopyright, setLayout } from './functions.js';
document.addEventListener('DOMContentLoaded', function () {
    initMenuButtons();
    setCopyright();
    setLayout();
});

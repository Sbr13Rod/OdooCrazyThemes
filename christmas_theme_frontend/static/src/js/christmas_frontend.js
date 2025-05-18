odoo.define('christmas_theme_frontend.icy_portal_style', function (require) {
    'use strict';

    const publicWidget = require('web.public.widget');

    publicWidget.registry.IcyPortalStyle = publicWidget.Widget.extend({
        selector: 'body',

        start: function () {
            const isPortal = window.location.pathname.startsWith('/my');

            if (isPortal) {
                document.body.classList.add('portal_page');
                console.log('❄️ Clase portal_page añadida al body');

                // Opción adicional: añadir un emoji a los encabezados si quieres
                const headers = document.querySelectorAll('h1, h2, h3');
                headers.forEach(header => {
                    if (!header.innerText.includes('❄️')) {
                        header.innerText = '❄️ ' + header.innerText;
                    }
                });
            }

            return this._super.apply(this, arguments);
        },
    });

    return publicWidget.registry;
});


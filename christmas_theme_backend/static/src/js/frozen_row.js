odoo.define('christmas_theme_backend.frozen_row', function (require) {
    "use strict";

    const domReady = require('web.dom_ready');
    $.when(domReady).then(function () {
        function applyFrozenRowEffect() {
            document.querySelectorAll('.o_list_view tbody tr').forEach(row => {
                const checkbox = row.querySelector('td.o_list_record_selector input[type="checkbox"]');
                if (!checkbox) return;

                // Inicializa el estado al cargar
                row.classList.toggle('frozen-row', checkbox.checked);

                // Evitar añadir múltiples listeners
                if (!checkbox.dataset.frozenListenerAttached) {
                    checkbox.addEventListener('change', () => {
                        row.classList.toggle('frozen-row', checkbox.checked);
                    });
                    checkbox.dataset.frozenListenerAttached = "true";
                }
            });
        }

        // Ejecutar al inicio
        applyFrozenRowEffect();

        // Reintentar tras posibles recargas de vista (seguridad extra)
        setTimeout(applyFrozenRowEffect, 1000);
        setTimeout(applyFrozenRowEffect, 2500);
    });
});

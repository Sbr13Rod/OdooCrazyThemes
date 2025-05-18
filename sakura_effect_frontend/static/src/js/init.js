odoo.define('sakura_effect_frontend.init', function (require) {
    'use strict';

    const publicWidget = require('web.public.widget');
    const registry = require('sakura_effect_frontend.sakura');

    // Instancia y ejecuta manualmente el widget
    const SakuraEffectWidget = registry.SakuraEffect;

    const widget = new SakuraEffectWidget(null, {});
    widget.appendTo(document.body);
});

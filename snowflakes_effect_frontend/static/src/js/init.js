odoo.define('snowflakes_effect_frontend.init', function (require) {
    'use strict';

    const publicWidget = require('web.public.widget');
    const registry = require('snowflakes_effect_frontend.snowflakes');

    // Instancia y ejecuta manualmente el widget
    const SnowEffectWidget = registry.SnowEffect;

    const widget = new SnowEffectWidget(null, {});
    widget.appendTo(document.body);
});

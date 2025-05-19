# Copyright 2025 Salvador Benlloch Romo
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).
{
    'name': 'Sakura Effect FrontEnd',
    'version': '16.0.1.0.0',
    'summary': 'Falling sakura (cherry blossom) petals effect in all frontend pages',
    'author': 'Salva Benlloch Romo',
    "license": "AGPL-3",
    'depends': [
        'web',
        'portal',
        'website'
    ],
    'assets': {
        'web.assets_frontend': [
            'sakura_effect_frontend/static/src/js/sakura.js',
            'sakura_effect_frontend/static/src/css/sakura.css',
            'sakura_effect_frontend/static/src/js/init.js',
        ],
    },
    'qweb': [],
    'installable': True,
    'application': False,
    'auto_install': False,
}

# Copyright 2025 Salvador Benlloch Romo
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).
{
    'name': 'Snowflakes Effect Backend',
    'version': '16.0.1.0.0',
    'summary': 'Falling snowflakes effect in all backend pages',
    'author': 'Salva Benlloch Romo',
    "license": "AGPL-3",
    'depends': ['web'],
    'assets': {
        'web.assets_backend': [
            'snowflakes_effect_backend/static/src/css/snowflakes.css',
            'snowflakes_effect_backend/static/src/js/snowflakes.js',
        ],
    },
    'qweb': [],
    'installable': True,
    'application': False,
    'auto_install': False,
}

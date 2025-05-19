# Copyright 2025 Salvador Benlloch Romo
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).
{
    'name': 'Christmas Frontend Theme',
    'version': '16.0.1.0.0',
    'summary': 'A festive Christmas theme for the Odoo frontend',
    'description': 'Brings a joyful Christmas spirit to the Odoo frontend with themed icons, and frosty UI enhancements.',
    'author': 'Salva Benlloch Romo',
    'category': 'Themes/Frontend',
    "license": "AGPL-3",
    'depends': ['web', 'website', 'portal'],
    'assets': {
        'web.assets_frontend': [
            'christmas_theme_frontend/static/src/css/christmas.css',
            'christmas_theme_frontend/static/src/css/navbar.css',
            'christmas_theme_frontend/static/src/js/christmas_frontend.js',
        ],
    },
    'qweb': [],
    'installable': True,
    'application': False,
    'auto_install': False,
}

# Copyright 2025 Salvador Benlloch Romo
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).
{
    'name': 'Christmas Backend Theme',
    'version': '16.0.1.0.1',
    'summary': 'A festive Christmas theme for the Odoo backend',
    'description': 'Brings a joyful Christmas spirit to the Odoo backend with snowfall effects, themed icons, and frosty UI enhancements.',
    'author': 'Salva Benlloch Romo',
    'category': 'Themes/Backend',
    "license": "AGPL-3",
    'depends': ['web'],
    'assets': {
        'web.assets_backend': [
            # 'christmas_theme_backend/static/src/css/christmas.css',
            'christmas_theme_backend/static/src/css/web_client.css',
            'christmas_theme_backend/static/src/css/form.css',
            'christmas_theme_backend/static/src/css/list.css',
            'christmas_theme_backend/static/src/css/kanban.css',
            'christmas_theme_backend/static/src/css/calendar.css',
            'christmas_theme_backend/static/src/css/pivot.css',
            'christmas_theme_backend/static/src/js/frozen_row.js',
        ],
    },
    'qweb': [],
    'installable': True,
    'application': False,
    'auto_install': False,
}

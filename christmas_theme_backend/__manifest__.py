{
    'name': 'Christmas Backend Theme',
    'version': '16.0.1.0.0',
    'summary': 'A festive Christmas theme for the Odoo backend',
    'description': 'Brings a joyful Christmas spirit to the Odoo backend with snowfall effects, themed icons, and frosty UI enhancements.',
    'author': 'Salva Benlloch Romo',
    'category': 'Themes/Backend',
    'depends': ['web'],
    'assets': {
        'web.assets_backend': [
            'christmas_theme_backend/static/src/css/christmas.css',
            'christmas_theme_backend/static/src/js/frozen_row.js',
        ],
    },
    'qweb': [],
    'installable': True,
    'application': False,
    'auto_install': False,
}

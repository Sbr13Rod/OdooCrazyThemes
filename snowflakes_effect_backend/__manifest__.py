{
    'name': 'Snowflakes Effect Backend',
    'version': '16.0.1.0.0',
    'summary': 'Falling snowflakes effect in all backend pages',
    'author': 'Salva Benlloch Romo',
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

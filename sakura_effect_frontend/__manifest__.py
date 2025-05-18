{
    'name': 'Sakura Effect FrontEnd',
    'version': '16.0.1.0.0',
    'summary': 'Falling sakura (cherry blossom) petals effect in all frontend pages',
    'author': 'Salva Benlloch Romo',
    'depends': ['web', 'portal', 'website'],
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

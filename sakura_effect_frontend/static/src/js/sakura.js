odoo.define('sakura_effect_frontend.sakura', function (require) {
    'use strict';

    const publicWidget = require('web.public.widget');

    const PETAL_CLASS = 'sakura-petal';
    const AUDIO_ID = 'sakura_audio';
    const BUTTON_ID = 'toggle-audio-btn';

    function createSakuraPetals() {
        console.log('🌸 Creando pétalos de sakura...');
        document.querySelectorAll(`.${PETAL_CLASS}`).forEach(petal => petal.remove());

        const colors = ['#f8b5d1', '#f9cee3', '#f7a3c3'];

        for (let i = 0; i < 100; i++) {
            const petal = document.createElement('div');
            petal.className = PETAL_CLASS;
            petal.textContent = '🌸';
            petal.style.left = `${Math.random() * 100}vw`;
            petal.style.animationDuration = `${10 + Math.random() * 10}s`;
            petal.style.animationDelay = `${Math.random() * 5}s`;
            petal.style.fontSize = `${Math.random() * 12 + 18}px`;
            petal.style.color = colors[Math.floor(Math.random() * colors.length)];
            document.body.appendChild(petal);
        }
    }
    
    function playSakuraAudio() {
        console.log('🎵 Intentando reproducir audio...');
        let audio = document.getElementById(AUDIO_ID);
        if (!audio) {
            audio = document.createElement('audio');
            audio.id = AUDIO_ID;
            audio.src = '/sakura_effect_frontend/static/src/audio/sakura.mp3';
            audio.loop = true;
            audio.volume = 0.3;
            audio.autoplay = true;
            audio.style.display = 'none';
            document.body.appendChild(audio);
        }

        return audio.play().catch(() => {
            console.log("Autoplay bloqueado. Esperando interacción del usuario.");
        });
    }

    function stopSakuraAudio() {
        const audio = document.getElementById(AUDIO_ID);
        if (audio) {
            audio.pause();
            audio.remove();
        }
    }

    function toggleAudio() {
        const audio = document.getElementById(AUDIO_ID);
        const btn = document.getElementById(BUTTON_ID);

        if (audio) {
            stopSakuraAudio();
            localStorage.setItem('SakuraAudio', 'off');
            if (btn) btn.textContent = '🔇 Silencio';
        } else {
            playSakuraAudio();
            localStorage.setItem('SakuraAudio', 'on');
            if (btn) btn.textContent = '🔊 Música';
        }
    }

    function createAudioToggleButton() {
        if (document.getElementById(BUTTON_ID)) return;

        const btn = document.createElement('button');
        btn.id = BUTTON_ID;
        btn.textContent = localStorage.getItem('SakuraAudio') === 'off' ? '🔇 Silencio' : '🔊 Música';
        btn.style.position = 'fixed';
        btn.style.bottom = '10px';
        btn.style.right = '10px';
        btn.style.zIndex = '10000';
        btn.style.padding = '8px 12px';
        btn.style.borderRadius = '8px';
        btn.style.border = 'none';
        btn.style.background = '#ff4081';
        btn.style.color = 'white';
        btn.style.cursor = 'pointer';
        btn.onclick = toggleAudio;

        document.body.appendChild(btn);
    }

    publicWidget.registry.SakuraEffect = publicWidget.Widget.extend({
        selector: 'body',
        start: function () {
            console.log("🌬️ Widget SakuraEffect activado");
            createSakuraPetals();
            createAudioToggleButton();

            if (localStorage.getItem('SakuraAudio') !== 'off') {
                playSakuraAudio();
            }
            return this._super.apply(this, arguments);
        },
    });

        // Por si el navegador bloquea autoplay, se intenta al primer clic
    document.addEventListener('click', playSakuraAudio, { once: true });

    return publicWidget.registry;
});
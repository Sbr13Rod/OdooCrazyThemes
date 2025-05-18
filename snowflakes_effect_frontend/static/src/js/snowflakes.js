odoo.define('snowflakes_effect_frontend.snowflakes', function (require) {
    'use strict';

    const publicWidget = require('web.public.widget');

    const AUDIO_ID = 'snow_audio';
    const BUTTON_ID = 'toggle-audio-btn';

    function createSnowflakes() {
        console.log('⛄ Creando copos de nieve...');
        document.querySelectorAll('.snowflake').forEach(flake => flake.remove());

        for (let i = 0; i < 150; i++) {
            const flake = document.createElement('div');
            flake.className = 'snowflake';
            flake.textContent = '❄';
            flake.style.left = `${Math.random() * 100}vw`;
            flake.style.fontSize = `${Math.random() * 10 + 10}px`;
            flake.style.animationDuration = `${Math.random() * 10 + 10}s`;
            flake.style.animationDelay = `${Math.random() * 5}s`;
            document.body.appendChild(flake);
        }
    }

    function playSnowAudio() {
        console.log('🎵 Intentando reproducir audio...');
        let audio = document.getElementById(AUDIO_ID);
        if (!audio) {
            audio = document.createElement('audio');
            audio.id = AUDIO_ID;
            audio.src = '/snowflakes_effect_frontend/static/src/audio/snow.mp3';
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

    function stopSnowAudio() {
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
            stopSnowAudio();
            localStorage.setItem('snowAudio', 'off');
            if (btn) btn.textContent = '🔇 Silencio';
        } else {
            playSnowAudio();
            localStorage.setItem('snowAudio', 'on');
            if (btn) btn.textContent = '🔊 Música';
        }
    }

    function createAudioToggleButton() {
        if (document.getElementById(BUTTON_ID)) return;

        const btn = document.createElement('button');
        btn.id = BUTTON_ID;
        btn.textContent = localStorage.getItem('snowAudio') === 'off' ? '🔇 Silencio' : '🔊 Música';
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

    publicWidget.registry.SnowEffect = publicWidget.Widget.extend({
        selector: 'body',
        start: function () {
            console.log("🌨️ Widget SnowEffect activado");

            createSnowflakes();
            createAudioToggleButton();

            if (localStorage.getItem('snowAudio') !== 'off') {
                playSnowAudio();
            }

            return this._super.apply(this, arguments);
        },
    });

    // Por si el navegador bloquea autoplay, se intenta al primer clic
    document.addEventListener('click', playSnowAudio, { once: true });

    return publicWidget.registry;
});
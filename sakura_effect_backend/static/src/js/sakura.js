odoo.define('sakura_effect_backend.sakura', function (require) {
    'use strict';

    const { onMounted } = require('@web/core/utils/hooks');
    const { Component } = require('@odoo/owl');

    const PETAL_CLASS = 'sakura-petal';
    const AUDIO_ID = 'sakura_audio';
    const BUTTON_ID = 'sakura-music-btn';

    function createSakuraPetals() {
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
        let audio = document.getElementById(AUDIO_ID);
        if (!audio) {
            audio = document.createElement('audio');
            audio.id = AUDIO_ID;
            audio.src = '/sakura_effect_backend/static/src/audio/sakura.mp3';
            audio.loop = true;
            audio.volume = 0.3;
            audio.autoplay = true;
            audio.style.display = 'none';
            document.body.appendChild(audio);
        }
        return audio.play().catch(() => {
            console.log("Autoplay bloqueado.");
        });
    }

    function stopSakuraAudio() {
        const audio = document.getElementById(AUDIO_ID);
        if (audio) {
            audio.pause();
            audio.remove();
        }
    }

    function updateButtonState() {
        const btn = document.getElementById(BUTTON_ID);
        const audio = document.getElementById(AUDIO_ID);
        if (btn) {
            btn.style.opacity = audio && !audio.paused ? '1' : '0.4';
        }
    }

    function insertSakuraButton() {
        if (document.getElementById(BUTTON_ID)) return;

        const btn = document.createElement('button');
        btn.id = BUTTON_ID;
        btn.innerHTML = '🌸';
        btn.title = 'Activar/desactivar música sakura';
        btn.style.background = 'none';
        btn.style.border = 'none';
        btn.style.fontSize = '20px';
        btn.style.cursor = 'pointer';
        btn.style.color = '#ff69b4';
        btn.style.marginLeft = '10px';

        btn.onclick = () => {
            const audio = document.getElementById(AUDIO_ID);
            if (audio && !audio.paused) {
                stopSakuraAudio();
            } else {
                playSakuraAudio();
            }
            updateButtonState();
        };

        const tryInsert = () => {
            const navbar = document.querySelector('.o_menu_systray');
            if (navbar) {
                navbar.insertBefore(btn, navbar.firstChild);
            } else {
                setTimeout(tryInsert, 500);
            }
        };

        tryInsert();
    }

    // Lanzar en carga inicial
    document.addEventListener('DOMContentLoaded', () => {
        createSakuraPetals();
        insertSakuraButton();
        playSakuraAudio().finally(() => updateButtonState());
    });

});

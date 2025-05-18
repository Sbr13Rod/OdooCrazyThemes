function createSnowflakes() {
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
  let audio = document.getElementById('snow_audio');
  if (!audio) {
    audio = document.createElement('audio');
    audio.id = 'snow_audio';
    audio.src = '/snowflakes_effect_backend/static/src/audio/snow.mp3';
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
  const audio = document.getElementById('snow_audio');
  if (audio) {
    audio.pause();
    audio.remove();
  }
}

function updateSantaButtonColor() {
  const btn = document.getElementById('santa-music-btn');
  const audio = document.getElementById('snow_audio');

  if (!btn) return;

  if (audio && !audio.paused) {
    btn.style.opacity = 1; // Rojo si está sonando
  } else {
    btn.style.opacity = 0.4; // Gris si está apagado o no existe
  }
}

function insertSantaButton() {
  if (document.getElementById('santa-music-btn')) return;

  const btn = document.createElement('button');
  btn.id = 'santa-music-btn';
  btn.innerHTML = '🎅';
  btn.title = 'Activar/desactivar música navideña';
  btn.style.background = 'none';
  btn.style.border = 'none';
  btn.style.fontSize = '20px';
  btn.style.cursor = 'pointer';
  btn.style.color = '#ff0000';
  btn.style.marginLeft = '10px';

    btn.onclick = () => {
      const audio = document.getElementById('snow_audio');
      if (audio && !audio.paused) {
        stopSnowAudio();
      } else {
        playSnowAudio();
      }
      updateSantaButtonColor(); // ← Actualiza color tras el cambio
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

document.addEventListener('DOMContentLoaded', () => {
  createSnowflakes();
  insertSantaButton();
  // Esperamos a que el intento de reproducción termine antes de actualizar el color
  playSnowAudio().finally(() => {
    updateSantaButtonColor();
  });
});

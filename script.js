const nomor = '089696488647';
const info = document.getElementById('info');
const copyBtn = document.getElementById('copy-btn');

document.getElementById('btn-dana').onclick = () => showNumber('DANA');
document.getElementById('btn-ovo').onclick = () => showNumber('OVO');
document.getElementById('btn-gopay').onclick = () => showNumber('GOPAY');
document.getElementById('btn-qris').onclick = showQRIS;

copyBtn.onclick = () => {
  navigator.clipboard.writeText(nomor)
    .then(() => copyBtn.textContent = '✅ Disalin!')
    .catch(() => copyBtn.textContent = 'Gagal disalin');
};

function showNumber(m) {
  info.innerHTML = `<p>${m} ke nomor:</p><h2 style="margin-top:4px">${nomor}</h2>`;
  copyBtn.style.display = 'inline-block';
  copyBtn.textContent = 'Salin Nomor';
}

function showQRIS() {
  info.innerHTML = `<p>Scan QRIS berikut:</p><img src="https://files.catbox.moe/81ugpm.jpeg" alt="QRIS" width="200" style="margin-top:10px;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.1)"/>`;
  copyBtn.style.display = 'none';
}

// Musik toggle
let playing = false;
const audio = document.getElementById("bgm");
const btn = document.getElementById("music-btn");

function toggleMusic() {
  if (!playing) {
    audio.play();
    btn.textContent = "🔇 Matikan Musik";
  } else {
    audio.pause();
    btn.textContent = "🔊 Hidupkan Musik";
  }
  playing = !playing;
}
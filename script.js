document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        sidebar.classList.toggle('open');
        body.classList.toggle('sidebar-open');
    });

    const timeEl = document.getElementById('time');
    const dateEl = document.getElementById('date');

    function updateClock() {
        const now = new Date();

        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        timeEl.textContent = `${hours}:${minutes}:${seconds}`;

        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        dateEl.textContent = `${year}-${month}-${day}`;
    }

    setInterval(updateClock, 1000);
    updateClock();

    function updateBackground() {
        const currentHour = new Date().getHours();

        if (currentHour >= 6 && currentHour < 18) {
            body.classList.add('day-theme');
            body.classList.remove('night-theme');
        } else {
            body.classList.add('night-theme');
            body.classList.remove('day-theme');
        }
    }

    updateBackground();
    setInterval(updateBackground, 60000);

    const versionCards = document.querySelectorAll('.version-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
            // Opsional: Hapus 'visible' saat keluar layar agar animasi berulang
            // else {
            //     entry.target.classList.remove('visible');
            // }
        });
    }, {
        threshold: 0.2 // Muncul saat 20% kartu terlihat
    });

    versionCards.forEach(card => {
        observer.observe(card);
    });

    const musicPlayer = document.getElementById('bg-music');
    let hasInteracted = false;

    const musicPlaylist = [
        'https://xycoolcraft.vercel.app/music/chilled_style_minecraft.mp3',
        'https://xycoolcraft.vercel.app/music/Cooked_phonk_aura.mp3',
        'https://xycoolcraft.vercel.app/music/Anti__Hero.mp3',
        'https://xycoolcraft.vercel.app/music/Arabic_sound_theme_good_to_hear.mp3',
        'https://xycoolcraft.vercel.app/music/DJ_Bloodline.mp3',
        'https://xycoolcraft.vercel.app/music/NO_ERA_AMO.mp3', 
        'https://xycoolcraft.vercel.app/music/montagem_rugada.mp3',
        'https://xycoolcraft.vercel.app/music/Matuskha_Phonk.mp3',
        'https://xycoolcraft.vercel.app/music/Spinning_cat.mp3', 
        'https://xycoolcraft.vercel.app/music/veki_music.mp3', 
        'https://xycoolcraft.vercel.app/music/Yung_kai_-_Blue.mp3',
        'https://xycoolcraft.vercel.app/music/Joyful_Chese_Rat_Dance.mp3',
        'https://xycoolcraft.vercel.app/music/El_Giggante_de_hierro_trend.mp3'
    ];

    function playRandomMusic() {
        if (!hasInteracted) {
            hasInteracted = true;
            
            const randomIndex = Math.floor(Math.random() * musicPlaylist.length);
            musicPlayer.src = musicPlaylist[randomIndex];
            
            musicPlayer.play().catch(error => {
                console.warn("Autoplay musik dicegah oleh browser. Perlu klik langsung.", error);
            });
        }
    }

    document.body.addEventListener('mousemove', playRandomMusic, { once: true });
    document.body.addEventListener('touchstart', playRandomMusic, { once: true });
    document.body.addEventListener('click', playRandomMusic, { once: true });

    musicPlayer.addEventListener('ended', () => {
        const randomIndex = Math.floor(Math.random() * musicPlaylist.length);
        musicPlayer.src = musicPlaylist[randomIndex];
        musicPlayer.play();
    });

});

function playVersion1_8() {
    const select = document.getElementById('v1_8_select');
    const selectedValue = select.value;

    if (selectedValue === 'wasm') {
        window.open('https://xycoolcraft.vercel.app/ninja', '_blank');
    } else if (selectedValue === 'vanilla') {
        window.open('https://xycoolcraft.vercel.app/ninja-js', '_blank');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Cek preferensi dark mode saat halaman dimuat
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if(savedDarkMode) {
        document.body.classList.add('dark-mode');
        document.querySelector('.dark-mode-toggle i').classList.add('fa-sun');
        document.querySelector('.dark-mode-toggle i').classList.remove('fa-moon');
    }

    // Inisialisasi fungsi utama
    createLanterns();
    animateText();
    setupTakbirAudio();
    setupHoverEffects();
    setupParticles();
});

// ========== DARK MODE SYSTEM ==========
function toggleDarkMode() {
    const body = document.body;
    const toggleBtn = document.querySelector('.dark-mode-toggle i');
    
    body.classList.toggle('dark-mode');
    
    // Simpan preferensi pengguna
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    // Ganti ikon
    toggleBtn.classList.toggle('fa-moon');
    toggleBtn.classList.toggle('fa-sun');
}

// ========== FUNGSI UTAMA ==========
// Fungsi untuk membuat lentera bergerak
function createLanterns() {
    const container = document.createElement("div");
    container.classList.add("lantern-container");
    document.body.appendChild(container);

    for (let i = 0; i < 5; i++) {
        let lantern = document.createElement("div");
        lantern.classList.add("lantern");
        lantern.style.left = `${Math.random() * 80 + 10}%`;
        lantern.style.animationDuration = `${Math.random() * 5 + 8}s`;
        lantern.style.animationDelay = `${Math.random() * 3}s`;
        container.appendChild(lantern);
    }
}

// Fungsi untuk memutar atau menghentikan suara takbir
function playTakbir() {
    let audio = document.getElementById("takbir-audio");
    let button = document.querySelector(".takbir-btn");

    if (audio.paused) {
        audio.play();
        button.innerHTML = '<i class="fas fa-pause"></i> Hentikan Takbir';
        button.classList.add("playing");
    } else {
        audio.pause();
        audio.currentTime = 0;
        button.innerHTML = '<i class="fas fa-music"></i> Putar Takbir';
        button.classList.remove("playing");
    }
}

// Fungsi untuk mengatur kontrol volume
function setupTakbirAudio() {
    const takbirAudio = document.getElementById("takbir-audio");
    const volumeControl = document.getElementById("volume");

    takbirAudio.volume = volumeControl.value;

    volumeControl.addEventListener("input", function () {
        takbirAudio.volume = this.value;
    });
}

// Efek konfeti saat halaman dimuat
window.onload = function () {
    setTimeout(() => {
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 }
        });
    }, 500);
};

// Fungsi animasi teks greeting
function animateText() {
    let greeting = document.querySelector(".animated-text h1");
    greeting.style.opacity = 0;
    let text = greeting.innerHTML;
    greeting.innerHTML = "";

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            greeting.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            greeting.style.opacity = 1;
        }
    }
    typeWriter();
}

// Fungsi untuk menampilkan galeri dalam modal
function showGallery() {
    let galleryModal = document.createElement("div");
    galleryModal.classList.add("gallery-modal");
    galleryModal.innerHTML = `
        <div class="gallery-content">
            <span class="close-btn" onclick="closeGallery()">&times;</span>
            <h2>Galeri Kopi Sangah</h2>
            <div class="gallery-images">
                <img src="kopi1.jpg" alt="Kopi 1">
                <img src="kopi2.jpg" alt="Kopi 2">
                <img src="kopi3.jpg" alt="Kopi 3">
            </div>
        </div>
    `;
    document.body.appendChild(galleryModal);
}

// Fungsi untuk menutup modal galeri
function closeGallery() {
    document.querySelector(".gallery-modal").remove();
}

// Efek bintang berkilau
const stars = document.querySelectorAll(".star");
stars.forEach(star => {
    let duration = Math.random() * 3 + 2;
    star.style.animationDuration = `${duration}s`;
});

// Fungsi untuk menutup popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Efek hover pada fitur
function setupHoverEffects() {
    document.querySelectorAll(".feature-box").forEach(box => {
        box.addEventListener("mouseenter", function () {
            this.classList.add("hovered");
            setTimeout(() => {
                this.classList.remove("hovered");
            }, 500);
        });
    });
}

// Inisialisasi animasi latar belakang partikel
function setupParticles() {
    particlesJS("particles", {
        particles: {
            number: { value: 120, density: { enable: true, value_area: 800 } },
            color: { value: "#8e44ad" },
            shape: { type: "circle" },
            opacity: { value: 0.6, random: true },
            size: { value: 3, random: true },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out"
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        },
        retina_detect: true
    });
}

function openGift() {
    document.getElementById("giftMessage").style.display = "block";
}

function closeGift() {
    document.getElementById("giftMessage").style.display = "none";
}

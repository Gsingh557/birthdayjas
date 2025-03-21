function playSurprise() {
    confettiEffect();
    alert("🎊 Happy Birthday Jaspreet! Wishing you lots of happiness and success! 🎂🎁");
}

// Function to Play Birthday Voice Wish
function playBirthdayWish() {
    let msg = new SpeechSynthesisUtterance();
    msg.text = "Happy Birthday Jaspreet Ji! Wishing you a wonderful year ahead!";
    msg.lang = "en-IN"; // Indian English accent
    msg.rate = 0.9; // Adjust speed
    msg.pitch = 1.2; // Adjust pitch
    window.speechSynthesis.speak(msg);
}

// Confetti Animation
const confettiCanvas = document.createElement("canvas");
confettiCanvas.classList.add("confetti");
document.body.appendChild(confettiCanvas);
const ctx = confettiCanvas.getContext("2d");

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let confettiArray = [];

class Confetti {
    constructor(x, y, size, speedX, speedY, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        if (this.y > confettiCanvas.height) {
            this.y = 0;
            this.x = Math.random() * confettiCanvas.width;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function confettiEffect() {
    confettiArray = []; // Reset array
    for (let i = 0; i < 100; i++) {
        let size = Math.random() * 5 + 2;
        let x = Math.random() * confettiCanvas.width;
        let y = Math.random() * confettiCanvas.height;
        let speedX = (Math.random() - 0.5) * 2;
        let speedY = Math.random() * 3 + 1;
        let color = `hsl(${Math.random() * 360}, 100%, 70%)`;

        confettiArray.push(new Confetti(x, y, size, speedX, speedY, color));
    }

    function animate() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confettiArray.forEach((confetti) => {
            confetti.update();
            confetti.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();
}
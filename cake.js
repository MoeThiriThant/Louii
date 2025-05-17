const showCake = () => {
    document.querySelector('#cake-holder').classList.add('done')
}
const fireworkSound = new Audio('fireworks.mp3');  // Load the firework sound file

const showFireworks = () => {
    const fireworkCanvas = document.getElementById("canvas");
    fireworkCanvas.style.display = 'block';  // Ensure canvas is visible
    
    // Optional: You can reset or adjust the canvas size here if needed
    fireworkCanvas.width = window.innerWidth;
    fireworkCanvas.height = window.innerHeight;
    fireworkSound.play();

    // Start the animation loop
  //  window.requestAnimationFrame(updateWorld);
};

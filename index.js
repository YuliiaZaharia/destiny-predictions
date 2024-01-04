const button = document.querySelector("#btn");
const quoteImage = document.querySelector("#fortune");

const images = [
  "fortune1.png",
  "fortune2.png",
  "fortune3.png",
  "fortune4.png",
  "fortune5.png",
  "fortune6.png",
  "fortune7.png",
  "fortune8.png",
  "fortune9.png",
  "fortune10.png",
  "fortune11.png"
];


button.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImagePath = images[randomIndex];
    
    gsap.to(quoteImage, {
        x: "+=20", 
        duration: 0.3,
        ease: "power1.inOut",
        repeat: 1,
        yoyo: true,
        onComplete: () => {
          quoteImage.src = randomImagePath; 
          quoteImage.classList.remove('hidden');
        },
      });
    });

const reloadButton = document.querySelector("#reloadButton");

reloadButton.addEventListener('click', () => {
  location.reload(); 
});



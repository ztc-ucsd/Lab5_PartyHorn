let slider = document.getElementById("volume-slider");
let number = document.getElementById("volume-number");
let sound = document.getElementById("horn-sound");
let btn = document.getElementById("honk-btn");
var volumeImage = document.getElementById("volume-image");

btn.type = "button";

slider.addEventListener("input", function(){
    number.value = slider.value;
    sound.volume = slider.value/100;
    btn.disabled = false;
    if(slider.value >= 67) {
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
    } else if(slider.value >= 34) {
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    } else if(slider.value >= 1) {
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
    } else {
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
        btn.disabled = true;
    }
});

number.addEventListener("input", function(){
    slider.value = number.value;
    sound.volume = number.value/100;
    btn.disabled = false;
    if(slider.value >= 67) {
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
    } else if(slider.value >= 34) {
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    } else if(slider.value >= 1) {
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
    } else {
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
        btn.disabled = true;
    }
});

document.getElementById("audio-selection").addEventListener("input", function(){
    if(document.getElementById("radio-air-horn").checked) {
        sound.src = "./assets/media/audio/air-horn.mp3";
        document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
    } else if (document.getElementById("radio-car-horn").checked) {
        sound.src = "./assets/media/audio/car-horn.mp3";
        document.getElementById("sound-image").src = "./assets/media/images/car.svg";
    } else {
        sound.src = "./assets/media/audio/party-horn.mp3";
        document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
    }
});

btn.addEventListener("click", function(){
    sound.play();
});
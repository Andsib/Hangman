function showListOfCatagoryes() {
    if (document.querySelector('.musicButtonOn')) {
        okSound.play();
    }
    let catagories = document.querySelector('.catagories');
    let game = document.querySelector('.game');
    location.reload();
    game.style.display = 'none';
    catagories.style.display = 'block';
}

function hideListOfCatagoryes() {
    let catagories = document.querySelector('.catagories');
    let game = document.querySelector('.game');
    catagories.style.display = 'none';
    game.style.display = 'block';
}

function hideModalWindow() {
    if (document.querySelector('.musicButtonOn')){
        okSound.play();
    }
    let layer = document.querySelector('.layer');
    layer.classList.remove('layerBlock');
    layer.classList.add('layer');
    userLetter.focus();
}

function switchAudio(button) {
    if (audio.paused) {
        button.classList.add('musicButtonOn');
        button.classList.remove('musicButtonOff');
        audio.play();
    } else {
        audio.pause();
        button.classList.add('musicButtonOff');
        button.classList.remove('musicButtonOn');
    }
}
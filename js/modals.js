function showInfo(text) {
    if (document.querySelector('.musicButtonOn')){
        windowSound.play();
    }
    let layer = document.querySelector('.layer');
    layer.innerHTML = '';
    layer.classList.add('layerBlock');
    let info = document.createElement('p');
    info.classList.add('infoText');
    info.innerText = text;
    layer.append(info);
    createOkButton(info);
}

function createGallow(box, newClass) {
    let line = document.createElement('div');
    line.classList.add(newClass);
    box.append(line);
}

function endGame(text, thisClass) {
    let layer = document.querySelector('.layer');
    layer.innerHTML = '';
    layer.classList.add('layerBlock');
    let info = document.createElement('p');
    info.classList.add(thisClass);
    info.innerText = text;
    layer.append(info);
    createEndGameButton(info);
}

function createSoundTool() {
    let soundBox = document.createElement('div');
    soundBox.classList.add('soundBox');
    document.body.append(soundBox);
    createMusicButton(soundBox);
}
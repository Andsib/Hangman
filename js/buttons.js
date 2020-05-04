function createArrayButton(wrapper, name) {
    let category = document.createElement('input');
    category.setAttribute('type', 'button');
    category.setAttribute('value', name);
    category.classList.add('category');
    wrapper.append(category);
    category.addEventListener('click', hideListOfCatagoryes);
}
function createBackButton() {
    let game = document.querySelector('.game');
    let button = document.createElement('input');
    button.classList.add('backButton');
    button.setAttribute('type', 'button');
    button.setAttribute('value', '<< Back');
    game.append(button);
    button.addEventListener('click', showListOfCatagoryes);
}
function createOkButton(wrapper) {
    let button = document.createElement('input');
    button.classList.add('okButton');
    button.setAttribute('type', 'button');
    button.setAttribute('value', 'OK');
    wrapper.append(button);
    button.addEventListener('click', hideModalWindow);
    setTimeout(() => button.focus(), 50);
}

function createEndGameButton(wrapper) {
    let button = document.createElement('input');
    button.classList.add('endButton');
    button.setAttribute('type', 'button');
    button.setAttribute('value', 'END');
    wrapper.append(button);
    button.addEventListener('click', showListOfCatagoryes);
    setTimeout(() => button.focus(), 50);
}

function createMusicButton(box) {
    let musicButton = document.createElement('input');
    musicButton.classList.add('musicButtonOff');
    musicButton.setAttribute('type', 'button');
    box.append(musicButton);
    musicButton.addEventListener('click', function () {
        switchAudio(musicButton);
    });
}
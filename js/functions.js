function showCategories() {
    let lists = document.querySelector('.lists');
    createArrayButton(lists, 'Animals');
    createArrayButton(lists, 'Jobs');
}

function showGame() {
    createBackButton();
    let categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        let array = chooseCategory(category);
        category.addEventListener('click', (event) => {
            if (event.target === category) {
                if (document.querySelector('.musicButtonOn')) {
                    chooseSound.play();
                }
                chooseRandomWord(array);
            }
        });
    });
}

function chooseRandomWord(array) {
    let word = array[Math.floor(Math.random() * array.length)];
    console.log(word);
    let guessWord = document.querySelector('.guessWord');
    for (let i = 0; i < word.length; i++) {
        secretWord[i] = createLetterBox(guessWord, word[i]);
    }
    guessLetter(word);
}

function guessLetter(word) {
    let userLetter = document.getElementById('userLetter');
    userLetter.focus();
    let submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', function () {
        userLetter.value = userLetter.value.toLowerCase();
        enterLetter(word);
    });

    userLetter.addEventListener('keydown', function () {
        if (event.which === 13 || event.keyCode == 13) {
            userLetter.value = userLetter.value.toLowerCase();
            enterLetter(word);
        }
    });
}

function enterLetter(word) {
    let letters = document.querySelectorAll('.hiddenLetter');
    let chosenLettersBox = document.querySelector('.chosenLettersBox');
    let pattern = new RegExp('[a-zA-z]');
    if (userLetter.value.length === 1 && pattern.test(userLetter.value)) {
        validChosenLetter(chosenLettersBox, userLetter);
        for (let i = 0; i < word.length; i++) {
            if (word[i] === userLetter.value) {
                if (document.querySelector('.musicButtonOn')) {
                    submitSound.play();
                }
                secretWord[i] = letters[i].style.visibility = 'visible';
                checkSecretWord();
            } else if (word.search(userLetter.value) === -1) {
                if (document.querySelector('.musicButtonOn')) {
                    wrongSound.play();
                }
                wrongLetters.push(userLetter.value);
                userLetter.value = '';
                createHangMan(wrongLetters);
            }
        }
    } else {
        userLetter.blur();
        showInfo('Enter one English letter!');
        userLetter.value = '';
    }
    userLetter.value = '';
}

function createLetterBox(guessWord, text) {
    let letterBox = document.createElement('div');
    letterBox.classList.add('letterBox');
    guessWord.append(letterBox);

    let letter = document.createElement('p');
    letter.innerHTML = text;
    letter.classList.add('hiddenLetter');
    letterBox.append(letter);
}

function validChosenLetter(box, letter) {
    let reg = new RegExp(letter.value, 'i');
    if (!reg.test(box.innerHTML)) {
        box.innerHTML += `${letter.value}`;
    } else {
        showInfo(`You've entered this letter!`);
        userLetter.value = '';
        userLetter.blur();
    }
}

function createHangMan(wrongLetters) {
    let hungManBox = document.querySelector('.hungManBox');
    if (wrongLetters.length === 1) {
        createGallow(hungManBox, 'bottomLine');
    }
    if (wrongLetters.length === 2) {
        createGallow(hungManBox, 'mainLine');
    }
    if (wrongLetters.length === 3) {
        createGallow(hungManBox, 'upperLine');
    }
    if (wrongLetters.length === 4) {
        createGallow(hungManBox, 'supportLine');
    }
    if (wrongLetters.length === 5) {
        createGallow(hungManBox, 'ropeLine');
    }
    if (wrongLetters.length === 6) {
        createGallow(hungManBox, 'headOfMan');
    }
    if (wrongLetters.length === 7) {
        createGallow(hungManBox, 'bodyOfMan');
    }
    if (wrongLetters.length === 8) {
        createGallow(hungManBox, 'leftHand');
    }
    if (wrongLetters.length === 9) {
        createGallow(hungManBox, 'rightHand');
    }
    if (wrongLetters.length === 10) {
        createGallow(hungManBox, 'leftLeg');
    }
    if (wrongLetters.length === 11) {
        createGallow(hungManBox, 'rightLeg');
        userLetter.blur();
        endGame(`YOU ARE DEAD!`, 'endGame');
        if (document.querySelector('.musicButtonOn')) {
            endGameSound.play();
        }
    }
}

function checkSecretWord() {
    if (secretWord.indexOf(undefined) === -1) {
        if (document.querySelector('.musicButtonOn')) {
            audio.pause();
            winSound.play();
        }
        endGame(`Congratulations! You've survived!`, 'winGame');
    }
}
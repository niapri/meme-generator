//Time to Complete: 4.88 hrs

const body = document.querySelector('body');
const selectedMeme = document.querySelector('#meme');
const firstLine = document.querySelector('#first-line');
const secondLine = document.querySelector('#second-line');
const form = document.querySelector('#generator');

const memeImages = {
    "brian": "Bad-Luck-Brian", 
    "girlfriend": "Overly-Attached-Girlfriend",
    "business": "But-Thats-None-Of-My-Business",
    "steve": "Scumbag-Steve",
    "greg": "Good-Guy-Greg", 
}
const button = document.querySelector('#generate-meme');
button.addEventListener('click', function(event) {
    event.preventDefault();
    makeMeme();
});

function makeMeme() {
    const memeImg = document.createElement('img');
    memeImg.src = `https://imgflip.com/s/meme/${memeImages[selectedMeme.value]}.jpg`

    const memeDiv = document.createElement('div');
    memeDiv.classList.add('meme-div');
    memeDiv.appendChild(getImage())
    memeDiv.appendChild(getTopText());
    memeDiv.appendChild(getBottomText());
    memeDiv.appendChild(getRemoveButton());

    body.appendChild(memeDiv);
    form.reset();
}

function makeCaps(text) {
    return(text.toUpperCase());
}

function getImage() {
    const memeImg = document.createElement('img');
    memeImg.src = `https://imgflip.com/s/meme/${memeImages[selectedMeme.value]}.jpg`
    return(memeImg)
}

function getTopText() {
    const topLine = document.createElement('div');
    topLine.innerText = makeCaps(firstLine.value);
    topLine.classList.add('top-line');
    topLine.id = 'meme-text'
    return(topLine);
}

function getBottomText() {
    if (secondLine != null ) {
        const bottomLine = document.createElement('div');
        bottomLine.innerText = makeCaps(secondLine.value);
        bottomLine.classList.add('bottom-line');
        //id's should be unique - so basically DRY with IDs
        bottomLine.id = 'meme-text';
        return(bottomLine);
    }  
}

function getRemoveButton() {
    const rmvBtn = document.createElement('button');
    rmvBtn.innerText = "Remove Meme"
    rmvBtn.addEventListener('click', function(event) {
        event.target.parentElement.remove();
    })
    return(rmvBtn);
}
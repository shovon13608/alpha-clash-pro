// function play(){
//     const homeSection = document.getElementById("home-section");
//     homeSection.classList.add('hidden');

//     const plaGroundSection = document.getElementById('play-ground');
//     plaGroundSection.classList.remove('hidden');
// }

function handleKeyBoardButtonPress(event) {
    const playpressed = event.key;
    console.log("played press:", playpressed);
    // stop the game if player press 'ESC'
    if(playpressed ==='Escape'){
        gameOver();
    }
    // get the expected to the press
    const currentAlphabetElements = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElements.innerText;
    const expectedAlphabed = currentAlphabet.toLowerCase();
    console.log(playpressed, expectedAlphabed);

    // cheaked match
    if (playpressed === expectedAlphabed) {
        console.log("You got the point");

        const currentScore = getTextElementValueById('current-score');
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore);
        // .................................................................................
        // update score
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // 2.lincarese the score by 1
        // const newValue = currentScore + 1;
        //  3.Show the update score
        // currentScoreElement.innerText= newValue;
        //  start a new round
        removeBackgroundColorById(expectedAlphabed);

        continueGame();
    }
    else {
        console.log("wrong press, your life is finish");
        const currentlife = getTextElementValueById('current-life');
        const NewLife = currentlife -1;
        setTextElementValueById('current-life',NewLife);
        if(NewLife === 0){
            gameOver();
        }


        // ......................................................
        // 1.get the current life number
        // const currentScoreElement = document.getElementById('current-life');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // reduce the life count
        // const NewLife = currentScore -1;
        // diplay the update life count 
        // currentScoreElement.innerText = NewLife;
    }
}
// capture key press
document.addEventListener('keyup', handleKeyBoardButtonPress);

function continueGame() {
    const alphabet = getARanmodAlphabet();
    // console.log("Your random alphabet is:", alphabet);

    // show display alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play() {
    // hide everything show only playgroud
    hideElementById('home-section');
    hideElementById('final-score');
    showElementById('play-ground');
    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    const lastScore =getTextElementValueById('current-score');
    // console.log(lastScore);
    setTextElementValueById('last-score', lastScore);
    // clear the last section alphabet highlighter
    const currentAlphabed = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabed);
}


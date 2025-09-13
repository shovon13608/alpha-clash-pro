// function play(){
//     const homeSection = document.getElementById("home-section");
//     homeSection.classList.add('hidden');

//     const plaGroundSection = document.getElementById('play-ground');
//     plaGroundSection.classList.remove('hidden');
// }
    
function continueGame(){
    const alphabet = getARanmodAlphabet();
    console.log("Your random alphabet is:", alphabet);

    // show display alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-section');
    showElementById('play-ground');
    continueGame()
}



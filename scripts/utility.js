function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function getARanmodAlphabet() {
    // get or careate a alphabet
    const alpabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alpabetString.split('');
    // console.log(alphabets);

    //  get a random index 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabet = alphabets[index];
    return alphabet;

}
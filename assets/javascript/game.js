/* INITAL COMMENTS
 ----------------------------------------------------------------------------------------------------------------*/
 /*
    NOTE: Images coming soon. They're commented out for now. 
    NOTE: Countries with spaces in their name are commented out for now,
         until I find a satisfactory way to show space in the name
         both in the answerArray and in the revealedAnswerArray.
    NOTE: country names started with a lower case letter until I find a way to show 
          both lower and upper case letters without requiring the user to use caps
*/

/* INITIAL GLOBAL SCOPE VARIABLES
 ----------------------------------------------------------------------------------------------------------------*/
/*  
Array of country objects each with the properties: 
    word: (country name), 
    image1: (map of continent with country highlighed), 
    image2: (flag Reveal),
*/
var countryArray = [
    {
        word: "algeria"
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "angola"
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "benin",
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "botswana",
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "burkina faso",
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "burundi",
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "cabo verde"
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "cameroon",
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "central african republic",
        // image1: "assets/images/---.png",
        // image2: "assets/images/---.png"
    },
    {
        word: "chad"
        ///image1: "assets/images/------.png",
        //image2: "assets/images/------.png"
    },
    {
        word: "comoros",
        //image1: "assets/images/------.png",
        //image2: "assets/images/------.png"
    },
    {
        word: "congo",
        // image1: "assets/images/------.png",
        //image2: "assets/images/------.png"
    },
    {
        word: "cote d'ivoire",
        //image1: "assets/images/------.png",
        // image2: "assets/images/------.png"
    },
    {
        word: "djibouti",
        //image1: "assets/images/------.png",
        //image2: "assets/images/------.png"
    },
    {
        word: "egypt",
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "equatorial guinea",
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "eritrea",
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "ethiopia",
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "gabon",
        // image1: "assets/images/---.png",
        // image2: "assets/images/---.png"
    },
    {
        word: "the gambia",
        // image1: "assets/images/---.png",
        // image2: "assets/images/---.png"
    },
    {
        word: "ghana",
        //image1: "assets/images/---.png",
        // image2: "assets/images/---.png"
    },
    {
        word: "guinea",
        // image1: "assets/images/---.png",
        // image2: "assets/images/---.png"
    },
    {
        word: "guinea-bissau",
        // image1: "assets/images/---.png",
        // image2: "assets/images/---.png"
    },
    {
        word: "kenya"
        //  image1: "assets/images/---.png",
        //  image2: "assets/images/---.png"
    },
    {
        word: "lesotho"
       // image1: "assets/images/---.png",
      //  image2: "assets/images/---.png"
    },
    {
        word: "liberia"
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "libya"
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "madagascar",
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "malawi",
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "mali",
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "mauritania",
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "mauritius"
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "mozambique",
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "namibia",
        // image1: "assets/images/---.png",
        // image2: "assets/images/---.png"
    },
    {
        word: "niger"
        ///image1: "assets/images/------.png",
        //image2: "assets/images/------.png"
    },
    {
        word: "nigeria",
        //image1: "assets/images/------.png",
        //image2: "assets/images/------.png"
    },
    {
        word: "rwanda",
        // image1: "assets/images/------.png",
        //image2: "assets/images/------.png"
    },
    {
        word: "western sahara",
        //image1: "assets/images/------.png",
        // image2: "assets/images/------.png"
    },
    {
        word: "sao tome and principe",
        //image1: "assets/images/------.png",
        //image2: "assets/images/------.png"
    },
    {
        word: "senegal",
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "seychelles",
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "sierra leone",
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "somalia",
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "south africa",
        // image1: "assets/images/---.png",
        // image2: "assets/images/---.png"
    },
    {
        word: "south sudan",
        // image1: "assets/images/---.png",
        // image2: "assets/images/---.png"
    },
    {
        word: "sudan",
        //image1: "assets/images/---.png",
        // image2: "assets/images/---.png"
    },
    {
        word: "swaziland",
        // image1: "assets/images/---.png",
        // image2: "assets/images/---.png"
    },
    {
        word: "tanzania",
        // image1: "assets/images/---.png",
        // image2: "assets/images/---.png"
    },
    {
        word: "togo"
        //  image1: "assets/images/---.png",
        //  image2: "assets/images/---.png"
    },
    {
        word: "tunisia"
        // image1: "assets/images/---.png",
        //  image2: "assets/images/---.png"
    },
    {
        word: "uganda"
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "zambia"
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    },
    {
        word: "zimbabwe",
        //image1: "assets/images/---.png",
        //image2: "assets/images/---.png"
    }]

//Check the status of the game to start/stop the game between words
var gameStatus = false;

//Generate a random number between 0 and countryArray.length
var randomNumber = Math.floor(Math.random() * countryArray.length);

//Use randomNumber generated above to get the corresponding object from countryArray
//Store the property values of the randomly chosen object: 
//1. word in country variable.
var country = countryArray[randomNumber].word;
/*
//2. images in countryImage1 and countryImage2.  
var countryImage1 = countryArray[randomNumber].image1
var countryImage2 = countryArray[randomNumber].image2 
*/

//Store number of letters in country, aka answer in lettersRemaining variable.
//lettersRemaining goes to zero as user makes correct guesses.
//user wins when lettersRemaining === 0
var lettersRemaining = country.length;

//Store user guesses that are part of country in answerArray.
var answerArray = []; 

/* LISTENERS
 ----------------------------------------------------------------------------------------------------------------*/

//Capture the key the user presses with this keyup event listener
//Check gameStatus to determine is a game is ongoing or one is being initialized
document.addEventListener("keyup", function(event){
    //If gameStatus is true a game is ongoing. Go to letterCheck function.
    if(gameStatus) {
        letterCheck(event);
    } else {
        //If gameStatus is false the game has completed, re-initialize the game.
        init();
    }
});

//Store all keys/characters user is allowed to type in the alphabet array.
var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "'", "-", " "];

/*WHEN USER MAKES A GUESS:
---------------------------*/
/*1--- Check if the captured key is ALLOWED.
--------------------------------------------*/
function letterCheck(guess) {
    //An allowed character is a character found in alphabetArray.
    if (alphabetArray.indexOf(guess.key) > -1) {        
        correctGuessCheck(guess);
    }
}

//Set inital score to 0. 
//winScore goes up by 1 when user guesses every character in country (when answerArray is completed).
var winScore = 0;

//If the captured key is allowed:
/*2--- Check whether the guess is CORRECT
-------------------------------------------*/
function correctGuessCheck(guess) {
    //A correct guess is a guess found in country.
    if (country.indexOf(guess.key) > -1) {
        //A. if guess is correct, run correctGuess function.
        correctGuess(guess);
    } else {
        //B. If guess is incorrect, run incorrectGuess function.
        incorrectGuess(guess);
    }
}

/*A--- If guess is correct:
===========================*/
/*A1.--- Check whether the character IS NOT ALREADY IN answerArray (in capital letter form if applicable).
-----------------------------------------------------------------------------------------------------------------*/
function correctGuess(guess) {
    if (answerArray.indexOf(guess.key.toUpperCase()) < 0) {
        //If the correctGuess is not already in the answerArray, run addCorrectLetter function.
        addCorrectLetter(guess);
    }
}

//If the correct character isn't already in answerArray
/*A2.--- PUSH the character to answerArray.
-------------------------------------------*/                                                       
function addCorrectLetter(guess) {                                  //BUG: not adding first letter (capitalized letters in general).
    for (var j = 0; j < country.length; j++) {                      //FIX: made word property all lowercase in the code then showed all caps to users                                     
        //Repeat the steps below for every correct guess
        //First: FIND THE POSITION of the the guessed character in country.
        if (guess.key === country[j] && lettersRemaining > 0 && guessesLeft > 0) {
            //Second: PUSH the guessed character to corresponding index in answerArray.
            answerArray[j] = guess.key.toUpperCase();
            /*A3.--- DISPLAY current word with newly pushed character
            -----------------------------------------------------------*/
            displayCurrentWord();
            /*A4.--- REDUCE letters remaining for a win by one.
            ---------------------------------------------------*/
            lettersRemaining--;
            //After reducing lettersRemaining by 1:
            /*A5.--- CHECK whether lettersRemaining has reached 0.
            -----------------------------------------------------*/ 
            if (lettersRemaining === 0) {
                /*A6.--- If lettersRemaining has reached 0: ***user wins***
                ----------------------------------------------------------*/
                winScore++;              //ADD 1 to winScore.
                displayWins();           //Display new score.
                changeImage();           //Reveal the country's flag.
                addCorrect();            //Turn correct answer green.
                displayCurrentWord();    //display currentWord with new green font.
            }
        }
    }
}

//Set up an array for incorrect guesses
var incorrectGuessesMade = [];
//Set the maximum number of guesses allowed.
var guessesLeft = 9;                     //goes down only when user makes an incorrect guess

/*B--- If guess is incorrect:
=============================*/
/*B1.--- Check whether the character IS NOT ALREADY IN incorrectGuessesMade array (in capital letter form if applicable).
-------------------------------------------------------------------------------------------------------------------------*/
function incorrectGuess(guess) {
    if (incorrectGuessesMade.indexOf(guess.key.toUpperCase()) < 0) {
        //If not, run addIncorrectLetter function.
        addIncorrectLetter(guess);
    }
}

//Incorrect character isn't already in incorrectGuessesMade array
/*B2.--- PUSH the character to incorrectGuessesMade array.
----------------------------------------------------------*/
function addIncorrectLetter(guess) {
    incorrectGuessesMade.push(guess.key.toUpperCase());
    displayGuessesMade();             //display updated incorrectGuessesMade for the user
    guessesLeft--;                    //Lower guessesLeft by 1
    displayGuessesLeft();             //display updated guessesLeft for the user
    if (guessesLeft === 0) {          //If guesses left reaches 0, ***Game Over***.
        changeImage();                //Reveal the country's flag.
        displayAnswer();              //Display correct word.
    }
}

/* HANDLERS
----------------------------------------------------------------------------------------------------------------*/

//Displays wins! (The number of country names user has guessed correctly).
function displayWins() {
    var winsDisplay = document.querySelector("#winsDisplay");
    winsDisplay.textContent = winScore;
}

//Displays incorrect letters the user has guessed, caps and coma separated
function displayGuessesMade() {
    var guessesMadeDisplay = document.querySelector("#guessesMadeDisplay");
    guessesMadeDisplay.textContent = incorrectGuessesMade.join(", ");
}

//Displays the number of guesses user has left.
function displayGuessesLeft() {
    var guessesLeftDisplay = document.querySelector("#guessesLeftDisplay");
    guessesLeftDisplay.textContent = guessesLeft;
}

//Displays correctly guessed characters in their positions in the current word.
function displayCurrentWord() {
    var currentWordDisplay = document.querySelector("#currentWordDisplay");
    currentWordDisplay.innerHTML = answerArray.join(" ");                       //use .innerHTML to fix space key problem
}

//Displays map of continent with country highlighed when game initalizes.


function displayImage() {
    var pictureDisplay = document.querySelector("#pictureDisplay");
    pictureDisplay.src = countryImage1;
}


//Reveals country flag whether user wins or loses.
 
function changeImage() {
    var pictureDisplay = document.querySelector("#pictureDisplay");
    pictureDisplay.src = countryImage2;
    gameStatus = false;
}
 

//Reveals answer if user loses.
function displayAnswer() {
    var revealedAnswerDisplay = document.querySelector("#revealedAnswerDisplay");
    revealedAnswerDisplay.textContent = country.toUpperCase();
}

//Turns current word green when user guesses all characters correctly.
function addCorrect() {
    var currentWordDisplay = document.querySelector("#currentWordDisplay");
    currentWordDisplay.classList.add('correct');
}

//Removes green color of completed word to reset the game.
function removeCorrect() {
    var currentWordDisplay = document.querySelector("#currentWordDisplay");
    currentWordDisplay.classList.remove('correct');
}


/* Initalize (or reset) the game.
----------------------------------------------------------------------------------------------------------------*/

function init() {
    //Changes gameStatus to ready.
    gameStatus = true;
    
    //Generate a new random number between 0 and countryArray.length
    randomNumber = Math.floor(Math.random() * countryArray.length);
    
    //Use new randomNumber generated above to get the corresponding object from countryArray
    //Store the property values of the newly randomly chosen object: 
    //1. word - in country variable.
    country = countryArray[randomNumber].word;
    
    //images in countryImage1 and countryImage2.  
    countryImage1 = countryArray[randomNumber].image1
    countryImage2 = countryArray[randomNumber].image2
    

    //Set lettersRemaining for win to country.lenght of new country name.
    lettersRemaining = country.length;

    //Set new answer array for newly chosen country name.
    answerArray = []; 

    //Convert word answer into an array.
    for (var i = 0; i < country.length; i++) {
        
        //A space in the dashed line will be displayed when currentWord is displayed. 
        //BUG: for country with a space in the name space disapears when spacebar is pressed
        if (country[i] === " ") {
            answerArray[i] = "&nbsp;";
        } else if (country[i] = "-") {
            answerArray[i] = "&#8209";
        } else if (country[i] = "'") {
            answerArray[i] = "&apos";
        } else {
            //Replace word answer with "_"s
            answerArray[i] = "_";
        }
    }

    /* //Re-establish lettersRemaining (for win)
    lettersRemaining = country.length; */

    //Reset guessesLeft for user.
    guessesLeft = 9;
    displayGuessesLeft()

    //Reset incorrect guessesMade array.
    incorrectGuessesMade = [];
    displayGuessesMade()
    
    //Display current word.
    displayCurrentWord();

    //Display country flag.
    displayImage();

    //Empty revealedAnswer display if user was unsuccessful previously.
    revealedAnswerDisplay.textContent = " ";

    //Play "Guess that country?" audio.
    document.getElementById('whosThat').play();

    //Remove greenColor from currentWord if user was successful previously.
    removeCorrect();
}
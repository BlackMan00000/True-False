
var answersound = new Howl({
  src: ['https://matt.moses.name/sites/P34A/sounds/answersounds.mp3'], // Replace with the path to your sound file
  preload: true,
  autoplay: false,
  loop: false,
  html5: true,
  // onend: () => { answersound.unload(); },
  sprite: {
    wrong1: [0, 1000],    
    wrong2: [1090, 1345], 
    wrong3: [2554, 2204], 
    wrong4: [5075, 650],
    wrong5: [5912, 752],
    right1: [7366, 1400], 
    right2: [9138, 1142], 
    right3: [10922, 1665],
    right4: [12992, 1455],
    right5: [14743, 1000],
    NEXT: [16934, 1503],
    RESET: [18343, 1276],
  }
});
      
var finishsound = new Howl({
  src: ['https://matt.moses.name/sites/P34A/sounds/finishsounds.mp3'], // Replace with the path to your sound file
  preload: true,
  autoplay: false,
  loop: false,
  html5: true,
  // onend: () => { answersound.unload(); },
  sprite: {
    bad: [0, 4574],    
    good: [4720, 4475], 
    great: [10053, 5665],
  }
});

const statements = [
    { question: "People used dental floss in the old West.", answer: "Dental floss was invented in 1815 by a New Orleans dentist, showing that dental hygiene was a concern even in the old West.", isFact: true },
    { question: "Camels were used in the old West.", answer: "The U.S. Army experimented with using camels in the desert regions of the West for transport.", isFact: true },
    { question: "Tombstone had and advanced water system.", answer: "Tombstone, Arizona, known for the O.K. Corral shootout, had one of the West's first organized water systems.", isFact: true },
    { question: "Women could own property in the old West.", answer: "In some Western territories, women had the right to own property earlier than in other parts of the U.S.", isFact: true },
    { question: "Many cowboys were African Americans.", answer: "It's estimated that about one in four cowboys were African American.", isFact: true },
    { question: "Native Americans used the telegraph to communicate.", answer: "Some Native American tribes used the U.S. Army telegraph lines to communicate over long distances.", isFact: true },
    { question: "In the old West, everyone carried a gun.", answer: "Contrary to popular belief, not everyone in the Old West carried a gun. Many towns had strict gun control laws.", isFact: false },
    { question: "Towns in the wild West were lawless.", answer: "While some towns had periods of lawlessness, many had local sheriffs and enforced laws.", isFact: false },
    { question: "Quick draw duels were common.", answer: "The iconic quick draw duel of Western movies was actually rare in real life.", isFact: false },
    { question: "Cowboys always wore cowboy hats.", answer: "The iconic cowboy hat was not as common as portrayed. Many wore a variety of hats.", isFact: false },
    { question: "Bank robberies were frequent in the old West.", answer: "Bank robberies were actually quite rare, as banks were typically well-secured.", isFact: false },
    { question: "Native Americans were always hostile towards pioneers.", answer: "This stereotype ignores the complexity of Native American relations with settlers and each other.", isFact: false },
    { question: "Cowboys were maninly white men.", answer: "Cowboys were ethnically diverse, including African Americans, Hispanics, and Native Americans.", isFact: false },
    { question: "Bathhouses were popular.", answer: "Many Western towns had public bathhouses, considered a luxury at the time.", isFact: true },
    { question: "The West was sparsely populated.", answer: "Some areas were densely populated, particularly near gold rush sites.", isFact: false },
    { question: "Saloon fights were everyday occurences.", answer: "Saloon brawls were not as common as portrayed in films.", isFact: false },
    { question: "The wild West was only deserts and dusty plains.", answer: "The geography was actually diverse, including mountains, forests, and rivers.", isFact: false },
    { question: "The Pony Express did not last long.", answer: "The Pony Express only operated for about 18 months before being replaced by the telegraph.", isFact: true },
    { question: "Outlaws were glamourous rebels.", answer: "Many outlaws were violent criminals, not the romantic figures often depicted in movies.", isFact: false },
    { question: "Indigenous peoples lived in Teepees.", answer: "Not all Native American tribes lived in teepees; housing varied widely.", isFact: false },
    { question: "Everyone lived in ranches or farms.", answer: "Many people in the West lived in towns and cities.", isFact: false },
    { question: "Stagecoach robberies were daily dangers.", answer: "Stagecoach robberies happened, but they were not as frequent as often portrayed.", isFact: false },
    { question: "The gold rush made everyone rich.", answer: "Most people who participated in gold rushes did not strike it rich in any meaningful way at all.", isFact: false },
    { question: "The old West was entirely untamed and wild.", answer: "Many parts of the West were civilized and developed.", isFact: false },
    { question: "People wore Levi's jeans in the old West.", answer: "Levi Strauss invented his famous jeans in San Francisco during the Gold Rush.", isFact: true },
    { question: "All lawmen were heroic and brave.", answer: "Some lawmen were corrupt or ineffectual.", isFact: false },
    { question: "The cattle drive was not used for long.", answer: "The era of the great cattle drives lasted only about 20 years, from the end of the Civil War to the late 1880s.", isFact: true },
    { question: "Chinese laborers built most of the railroads in the West.", answer: "A significant portion of the Transcontinental Railroad was built by Chinese immigrants.", isFact: true },
    { question: "Train robberies happened all the time.", answer: "Like bank robberies, train robberies were rare and risky.", isFact: false },
    { question: "Outlaws had fan mail.", answer: "Notorious outlaws like Jesse James received fan mail and other forms of admiration from the public.", isFact: true },
    { question: "There were National Parks in the old West.", answer: "Yellowstone became the world's first national park in 1872.", isFact: true },
    { question: "Barbed wire existed in the old West.", answer: "The introduction of barbed wire in the late 1800s revolutionized farming and land ownership in the West.", isFact: true },
    { question: "The West was full of ghost towns.", answer: "While some towns were abandoned, many thrived.", isFact: false },
    { question: "Cowboys were always on the move.", answer: "Many cowboys worked on the same ranch for years.", isFact: false },
    { question: "There were female doctors in the old West.", answer: "Dr. Susan Anderson, known as Doc Susie, practiced in Colorado in the late 1800s.", isFact: true },
    { question: "There were rich cities in the old West.", answer: "In the late 1800s, Helena Montana had more millionaires per capita than any other city in the world.", isFact: true },
    { question: "Frontier justice was the only law.", answer: "Formal legal systems existed and were used.", isFact: false },
    { question: "Horses were the only mode of transport.", answer: "People also traveled by foot, wagons, and, later, trains.", isFact: false },
    { question: "Drugs were common and legal in the old West.", answer: "During the heyday of the Old West, drugs were pretty common and legal. The Chinese introduced opium when they came to America to build railroad lines.", isFact: true },
    { question: "The West was a man's world.", answer: "Women played significant roles in the development and culture of the Old West.", isFact: false },
    { question: "Wyatt Earp wasn't just a lawman.", answer: "Wyatt Earp also worked as a buffalo hunter, miner, boxing referee, and saloon keeper.", isFact: true },
    // Add all your statements here
];

let currentStatementIndex = 0;
let correctCount = 0;
let incorrectCount = 0;

// Function to play a random sound effect
function playRandomWrong() {
  var effects1 = ['wrong1', 'wrong2', 'wrong3', 'wrong4', 'wrong5'];
  var randomEffect1 = effects1[Math.floor(Math.random() * effects1.length)];
  answersound.play(randomEffect1);
}

function playRandomRight() {
  var effects2 = ['right1', 'right2', 'right3', 'right4', 'right5'];
  var randomEffect2 = effects2[Math.floor(Math.random() * effects2.length)];
  answersound.play(randomEffect2);
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

function displayStatement() {
    answersound.play('NEXT');
    document.getElementById("statement").innerText = statements[currentStatementIndex].question;
    document.getElementById("answer").innerText = "";
    document.getElementById("check-mark").style.display = 'none';
    document.getElementById("red-x").style.display = 'none';
}

function updateScore(isCorrect) {
    if (isCorrect) {
        correctCount++;
        document.getElementById("correct-count").innerText = correctCount;
    } else {
        incorrectCount++;
        document.getElementById("incorrect-count").innerText = incorrectCount;
    }
}

function checkAnswer(isFact) {
    let isCorrect = statements[currentStatementIndex].isFact === isFact;
    updateScore(isCorrect);
        if (isCorrect) {
        playRandomRight();
        document.getElementById("check-mark").style.display = 'block';
        document.getElementById("red-x").style.display = 'none';
        // Correct.play();
    } else {
        playRandomWrong();
        document.getElementById("check-mark").style.display = 'none';
        document.getElementById("red-x").style.display = 'block';
        // Incorrect.play();
    }

    let feedbackText = isCorrect ? "Correct! " : "Incorrect! ";
    feedbackText += statements[currentStatementIndex].answer;
    document.getElementById("answer").innerText = feedbackText;
    document.getElementById("next-button").style.display = 'block';
}

function resetGame() {
    correctCount = 0;
    incorrectCount = 0;
    answersound.play('RESET');
    document.getElementById("feedback").innerText = "";
    document.getElementById("correct-count").innerText = correctCount;
    document.getElementById("incorrect-count").innerText = incorrectCount;
    shuffleArray(statements);
    currentStatementIndex = 0;
    displayStatement();
    document.getElementById("feedback").innerText = "";
    document.getElementById("check-mark").style.display = 'none';
    document.getElementById("red-x").style.display = 'none';
    document.getElementById("next-button").style.display = 'none';
}

document.getElementById("fact-button").addEventListener("click", function() { checkAnswer(true); });
document.getElementById("myth-button").addEventListener("click", function() { checkAnswer(false); });
document.getElementById("next-button").addEventListener("click", function() {
currentStatementIndex++;
if (currentStatementIndex < 10 && currentStatementIndex < statements.length) {
displayStatement();
this.style.display = 'none';
//document.getElementById("feedback").innerText = "";
//document.getElementById("check-mark").style.display = 'none';
//document.getElementById("red-x").style.display = 'none';
} else {
// All statements shown, you can handle end of game scenario here
        document.getElementById("answer").innerText = "";
        document.getElementById("statement").innerText = "";
        let totalQuestions = 10;
        let percentCorrect = (correctCount / totalQuestions) * 100;

        let resultMessage = "";
        if (percentCorrect >= 75) {
            finishsound.play('great');
            resultMessage = "How'd you git so smart? You got " + percentCorrect.toFixed(2) + "% right!";
        } else if (percentCorrect >= 50) {
            finishsound.play('good');
            resultMessage = "Pretty good! You got " + percentCorrect.toFixed(2) + "% right!";
        } else {
            finishsound.play('bad');
            resultMessage = "Better do some more fancy book learnin'! Ya' only got "+ percentCorrect.toFixed(2) + "% right!";
        }
        document.getElementById("feedback").innerText = resultMessage;
        document.getElementById("next-button").style.display = 'none'; // Optionally hide the Next button
        // Optionally, display the reset button to allow starting over
        document.getElementById("reset-button").style.display = 'block';
}
});
document.getElementById("reset-button").addEventListener("click", resetGame);

shuffleArray(statements); // Shuffle the statements at the start of the game
displayStatement();

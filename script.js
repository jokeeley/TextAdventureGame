// Text Adventure Game

const enter= "Please enter 1 or 2 for your answer";

const gameOver = "sorry GAME OVER";

const start = "Welcome to the Ghostbusters Text Adventure Game. Click 'OK' to start the game";

const q1 = `You are trying to catch a ghost called "Slimer" at the Sedgwick Hotel but have not seen him yet. Should you. . .
1. Take the elevator to look on the 12th floor 
OR 
2. Wait in the lobby to see if he shows up there

${enter}`; 

const gameOver1 = 'You never see Slimer so you give up on catching ghosts and become a talk show host instead'

const q2 = `When you get off the elevator, something startles you! Should you ...
1. Look to see what it is
OR
2. Shoot at it immediately with your proton pack.

${enter}`;

const gameOver2 = `It was the hotel maid and you nearly killed her. You are forced to leave the hotel${gameOver}`;

const q3 = `It was the just the hotel maid. So you walk around to look for Slimer and You spot him! Should you...
1. Call to let the other Ghostbusters know you found him
OR
2. Hide and wait to see where he goes

${enter}`;

const gameOver3 = `Slimer hears you, immediately flies at you, and YOU GET SLIMED! ${gameOver}`

const q4 = `You see that Slimer goes into the ballroom so you quickly tell the other Ghostbusters and you all head in. You see him flying around when you walk in. Should you. . .
1. Shoot at him with your proton
OR
2. Put two proton packs together to try and create a more powerful shot (aka crossing the streams)

${enter}`;

const gameOver4 = `All live as you know it stops instantaneously and every molecule in your body explodes at the speed of light. ${gameOver}`;

const q5 = `You wrangled Slimer with your shot and the ghost trap is set underneath him. You noticed there is a bright light coming from the trap and are tempted to look at it. Should you...
1. Look at the trap
OR
2. Keep your focus on Slimer

${enter}`;

const gameOver5 = `You looked at the trap and the light BLINDED YOU ${gameOver}`;

const win = "The ghost trap sucked Slimer in and closed. HOORAY! YOU CAUGHT SLIMER!"

// Alert the user to start the game
alert(start);

// Sets the value of userInput to enter the user's entry and allows for change with let
let userInput = prompt(q1);

// Nested Conditional Statements

// 1st
if (userInput == 1 ) {
    console.log("this works q1");
    userInput = prompt (q2);

    // 2nd
    if(userInput == 1){
        console.log("Correct q2");
        userInput = prompt(q3);

        // 3rd
        if (userInput == 2) {
            console.log("Correct q3");
            userInput = prompt(q4);

            // 4th
            if (userInput == 1) {
                console.log("Correct q4");
                userInput = prompt(q5);

                // 5th
                if (userInput == 2) {
                    alert(win);
                } else{
                    alert (gameOver5);
                }

            } else {
                alert(gameOver4)
                console.log();
            }

        } else{
        alert (gameOver2)
        console.log("Game Over 2");
    }
} else{
    alert(gameOver1)
};
}

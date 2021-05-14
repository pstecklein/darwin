var player = {health: 200, strength: 25};
var darwin = {health: 200, strength: 40};
var pLuck = 0;
var dLuck = 0;
var pAccuracy = 0;
var dAccuracy = 0;
function playerAccuracy() {
    "use strict";
    pAccuracy = Math.floor(Math.random() * 100) + 1;
    return playerAccuracy;
}
function darwinAccuracy() {
    "use strict";
    dAccuracy = Math.floor(Math.random() * 100) + 1;
    return darwinAccuracy;
}
function updateDarwinStrength() {
    "use strict";
    if (darwin.health > 175) {
        return darwin.strength;
    } else if (darwin.health > 125) {
        darwin.strength = 70;
        return darwin.strength;
    } else if (darwin.health > 75) {
        darwin.strength = 90;
        return darwin.strength;
    } else if (darwin.health > 0) {
        darwin.strength = 110;
        return darwin.strength;
    }
}
function playerLuck() {
    "use strict";
    pLuck = Math.floor(Math.random() * 100) + 1;
    return pLuck;
}
function darwinLuck() {
    "use strict";
    dLuck = Math.floor(Math.random() * 100) + 1;
    return dLuck;
}
function chooseAttack() {
    "use strict";
    var pChoice = prompt("You have " + player.health + " HP and Darwin has " + darwin.health + " HP, would you like to (K) kick, (D) dive, or (J) jab Darwin? Or do you want to drink a potion? (H) for a health potion, (S) for a strength potion");
    if (pChoice.toLowerCase() === "k") {
        alert("Risky");
        if (pAccuracy <= 80) {
            alert("You idiot! You missed and Darwin makes a counter attack! You take 20 damage!");
            player.health -= 20;
            return player.health;
        } else if (player.strength > 80 && pLuck > 90) {
            alert("Critical hit! Darwin suffers 100 damage!");
            darwin.health -= 100;
            return darwin.health;
        } else if (player.strength > 60 && pLuck > 90) {
            alert("Critical hit! Darwin suffers 70 damage!");
            darwin.health -= 70;
            return darwin.health;
        } else if (player.strength > 40 && pLuck > 90) {
            alert("Critical hit! Darwin suffers 50 damage!");
            darwin.health -= 50;
            return darwin.health;
        } else if (pLuck > 90) {
            alert("Critical hit! Darwin suffers 40 damage!");
            darwin.health -= 40;
            return darwin.health;
        } else if (player.strength > 80) {
            alert("That's a powerful kick! Darwin suffers 35 damage!");
            darwin.health -= 35;
            return darwin.health;
        } else if (player.strength > 60) {
            alert("That's a tough kick! Darwin suffers 30 damage!");
            darwin.health -= 30;
            return darwin.health;
        } else if (player.strength > 40) {
            alert("That's a nice kick! Darwin suffers 25 damage!");
            darwin.health -= 25;
            return darwin.health;
        } else {
            alert("That's a weak kick son. Darwin takes only 20 damage!");
            darwin.health -= 20;
            return darwin.health;
        }
        
    } else if (pChoice.toLowerCase() === "d") {
        alert("Lets dive at Darwin!");
        if (pAccuracy <= 50) {
            alert('Darwin dodged the attack! a little bit of strength whittles away. Also, Darwin wanted to say something... "SUCK IT FOOL!"');
            player.strength -= 5;
            return player.strength;
        } else if (player.strength > 80 && pLuck > 90) {
            alert("Critical hit! Darwin suffers 60 damage!");
            darwin.health -= 60;
            return darwin.health;
        } else if (player.strength > 60 && pLuck > 90) {
            alert("Critical hit! Darwin suffers 40 damage!");
            darwin.health -= 40;
            return darwin.health;
        } else if (player.strength > 40 && pLuck > 90) {
            alert("Critical hit! Darwin suffers 30 damage!");
            darwin.health -= 30;
            return darwin.health;
        } else if (pLuck > 90) {
            alert("Critical hit! Darwin suffers 25 damage!");
            darwin.health -= 25;
            return darwin.health;
        } else if (player.strength > 80) {
            alert("That's an insane dive! Darwin suffers 40 damage!");
            darwin.health -= 40;
            return darwin.health;
        } else if (player.strength > 60) {
            alert("That's a smart dive! Darwin suffers 30 damage!");
            darwin.health -= 30;
            return darwin.health;
        } else if (player.strength > 40) {
            alert("That's a decent dive! Darwin suffers 20 damage!");
            darwin.health -= 20;
            return darwin.health;
        } else {
            alert("That's not a great dive, but Darwin still suffers 10 damage!");
            darwin.health -= 10;
            return darwin.health;
        }
        
    } else if (pChoice.toLowerCase() === "j") {
        alert("quick jab!");
        if (pAccuracy <= 1) {
            alert("Ahh! you missed the jab and lost a great deal of strength You are butthole!");
            player.strength -= 50;
            return player.strength;
        } else if (player.strength > 80 && pLuck > 90) {
            alert("Critical hit! Darwin suffers 50 damage!");
            darwin.health -= 35;
            return darwin.health;
        } else if (player.strength > 60 && pLuck > 90) {
            alert("Critical hit! Darwin suffers 35 damage!");
            darwin.health -= 20;
            return darwin.health;
        } else if (player.strength > 40 && pLuck > 90) {
            alert("Critical hit! Darwin suffers 20 damage!");
            darwin.health -= 15;
            return darwin.health;
        } else if (pLuck > 90) {
            alert("Critical hit! Darwin suffers 10 damage!");
            darwin.health -= 10;
            return darwin.health;
        } else if (player.strength > 60) {
            alert("That's a lean jab! Darwin takes 15 damage!");
            darwin.health -= 15;
            return darwin.health;
        } else if (player.strength > 40) {
            alert("That's a sick jab! Darwin suffers 10 damage!");
            darwin.health -= 10;
            return darwin.health;
        } else {
            alert("That's like hitting someone with a napkin! Darwin takes only 5 damage!");
            darwin.health -= 5;
            return darwin.health;
        }
        
    } else if (pChoice.toLowerCase() === "h") {
        alert("You're drinking a health potion...");
        if (pLuck < 10) {
            alert("Oh no! You were poisoned by the potion, you lost some health");
            player.health -= 25;
        } else {
            alert("You were given the benefits of the potion, extra health!");
            player.health += 25;
        }

    } else if (pChoice.toLowerCase() === "s") {
        alert("You're drinking a strength potion...");
        if (pLuck < 10) {
            alert("Oh no! You were poisoned by the potion, you lost some strength");
            player.strength -= 20;
        } else {
            alert("You were given the benefits of the potion, extra strength!");
            player.strength += 20;
        }

    } else {
        alert("You did nothing... waste of an attack...");
    }
}
function chooseDefense() {
    "use strict";
    var pDefense = prompt("Darwin is going to attack with a firm whack. You have " + player.health + " HP, Darwin has " + darwin.health + " HP, do you want to try to (C) counter, (D) dodge, or (B) Block the attack? (Remember: the more risk the more reward, but also better safe than sorry)");
    if (pDefense.toLowerCase() === "c") {
        alert("You have courage");
        if (dAccuracy <= 20) {
            alert("Your counter succeeded! 25 damage dealt");
            darwin.health -= 25;
            return darwin.health;
        } else if (darwin.strength >= 100 && dLuck > 20) {
            alert("You failed, Darwin landed a huge critical hit, it's an instant kill, good try friend");
            player.health = 0;
            return player.health;
        } else if (darwin.strength >= 80 && dLuck > 40) {
            alert("That's tough, Darwin landed a critical hit that does 100 damage!");
            player.health -= 100;
            return player.health;
        } else if (darwin.strength >= 60 && dLuck > 70) {
            alert("You're dumb, now Darwin landed a critical hit that deals 75 damage");
            player.health -= 75;
            return player.health;
        } else if (darwin.strength >= 40 && dLuck > 80) {
            alert("Ouch! Critical hit! Darwin's whack does 50 damage!");
            player.health -= 50;
            return player.health;
        } else if (darwin.strength >= 100) {
            alert("Darwin has turned to a powerful beast, he whacks you dealing 90 damage!");
            player.health -= 90;
            return player.health;
        } else if (darwin.strength >= 80) {
            alert("You haven't learned your lesson, Darwin's powerful whack deals 70 damage!");
            player.health -= 70;
            return player.health;
        } else if (darwin.strength >= 60) {
            alert("Nice, now you just lost 50 HP because you are stupid!");
            player.health -= 50;
            return player.health;
        } else {
            alert("You were over confident! Darwin deals 30 damage!");
            player.health -= 30;
            return player.health;
        }
    } else if (pDefense.toLowerCase() === "d") {
        if (dAccuracy <= 50) {
            alert("You succesully dodged the attack! Keep going!");
        } else if (darwin.strength >= 100 && dLuck > 50) {
            alert("You failed to dodge the attack, and Darwin lands a critical hit! He's also in rage mode, kicking your butt and dealing 100 damage!");
            player.health -= 100;
            return player.health;
        } else if (darwin.strength >= 80 && dLuck > 60) {
            alert("You failed to dodge the attack, and Darwin lands a critical hit! Darwin, AKA THE BEAST, deals a 80 damage whack!");
            player.health -= 80;
            return player.health;
        } else if (darwin.strength >= 60 && dLuck > 70) {
            alert("You failed to dodge the attack, and Darwin lands a critical hit! You lose 50 HP");
            player.health -= 50;
            return player.health;
        } else if (darwin.strength >= 40 && dLuck > 80) {
            alert("You failed to dodge the attack, and Darwin lands a critical hit! It dealt 30 damage!");
            player.health -= 30;
            return player.health;
        } else if (darwin.strength >= 100) {
            alert("Darwin is in rage mode, he destroys you with a whack worth 75 damage!");
            player.health -= 75;
            return player.health;
        } else if (darwin.strength >= 80) {
            alert("You did not successfully dodge Darwin. Darwin powers through you dealing 50 damage!");
            player.health -= 50;
            return player.health;
        } else if (darwin.strength >= 60) {
            alert("You failed to dodge the attack, Darwin deals 30 damage!");
            player.health -= 30;
            return player.health;
        } else {
            alert("You failed to dodge the attack, but it's okay, it only dealt 15 damage");
            player.health -= 15;
            return player.health;
        }
    } else if (pDefense.toLowerCase() === "b") {
        alert("You have played it safe");
        if (darwin.strength >= 100) {
            alert("Darwin is in rage mode, he destoys you like a can of corn, dealing 50 damage");
            player.health -= 50;
            return player.health;
        } else if (darwin.strength >= 80) {
            alert("Darwin whacks the s$%t out of you! dealing 35 damage!");
            player.health -= 35;
            return player.health;
        } else if (darwin.strength >= 60) {
            alert("Darwin is clutch, but your block helps, he deals 25 damage");
            player.health -= 25;
            return player.health;
        } else if (darwin.strength >= 40) {
            alert("Good block, Darwin still lands a solid attack though, you lose 10 HP");
            player.health -= 10;
            return player.health;
        }
    } else {
        alert("You have to counter, dodge, or block, you lose 100 HP for not choosing");
        player.health -= 100;
        return player.health;
    }
}
function game() {
    "use strict";
    alert("If you are new, it is highly recomended that you first check out the directions manual on the home page");
    confirm("Let's start the fight!");
    do {
        updateDarwinStrength();
        playerAccuracy();
        darwinAccuracy();
        playerLuck();
        darwinLuck();
        chooseAttack();
        chooseDefense();
    } while (player.health > 0 && darwin.health > 0);
    if (player.health <= 0) {
        alert("Darwin killed you!");
        player = {health: 200, strength: 25};
        darwin = {health: 200, strength: 40};
    } else if (darwin.health <= 0) {
        alert("You beat Darwin, you're the champ!");
        player = {health: 200, strength: 25};
        darwin = {health: 200, strength: 40};
    } else if (player.health <= 0 && darwin.health <= 0) {
        alert("You both died, no one wins!");
        player = {health: 200, strength: 25};
        darwin = {health: 200, strength: 40};
    }
}
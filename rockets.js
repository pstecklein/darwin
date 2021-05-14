function dealer() {
    "use strict";
    var dealerHand = Math.floor(Math.random() * 91) + 1;
    if (dealerHand === 1) {
        dealerHand = { cards: "2 and 4", value: 1 };
    } else if (dealerHand === 2) {
        dealerHand = { cards: "3 and 4", value: 2 };
    } else if (dealerHand === 3) {
        dealerHand = { cards: "2 and 5", value: 3 };
    } else if (dealerHand === 4) {
        dealerHand = { cards: "3 and 5", value: 4 };
    } else if (dealerHand === 5) {
        dealerHand = { cards: "4 and 5", value: 5 };
    } else if (dealerHand === 6) {
        dealerHand = { cards: "2 and 6", value: 6 };
    } else if (dealerHand === 7) {
        dealerHand = { cards: "3 and 6", value: 7 };
    } else if (dealerHand === 8) {
        dealerHand = { cards: "4 and 6", value: 8 };
    } else if (dealerHand === 9) {
        dealerHand = { cards: "5 and 6", value: 9 };
    } else if (dealerHand === 10) {
        dealerHand = { cards: "2 and 7", value: 10 };
    } else if (dealerHand === 11) {
        dealerHand = { cards: "3 and 7", value: 11 };
    } else if (dealerHand === 12) {
        dealerHand = { cards: "4 and 7", value: 12 };
    } else if (dealerHand === 13) {
        dealerHand = { cards: "5 and 7", value: 13 };
    } else if (dealerHand === 14) {
        dealerHand = { cards: "6 and 7", value: 14 };
    } else if (dealerHand === 15) {
        dealerHand = { cards: "2 and 8", value: 15 };
    } else if (dealerHand === 16) {
        dealerHand = { cards: "3 and 8", value: 16 };
    } else if (dealerHand === 17) {
        dealerHand = { cards: "4 and 8", value: 17 };
    } else if (dealerHand === 18) {
        dealerHand = { cards: "5 and 8", value: 18 };
    } else if (dealerHand === 19) {
        dealerHand = { cards: "6 and 8", value: 19 };
    } else if (dealerHand === 20) {
        dealerHand = { cards: "7 and 8", value: 20 };
    } else if (dealerHand === 21) {
        dealerHand = { cards: "2 and 9", value: 21 };
    } else if (dealerHand === 22) {
        dealerHand = { cards: "3 and 9", value: 22 };
    } else if (dealerHand === 23) {
        dealerHand = { cards: "4 and 9", value: 23 };
    } else if (dealerHand === 24) {
        dealerHand = { cards: "5 and 9", value: 24 };
    } else if (dealerHand === 25) {
        dealerHand = { cards: "6 and 9", value: 25 };
    } else if (dealerHand === 26) {
        dealerHand = { cards: "7 and 9", value: 26 };
    } else if (dealerHand === 27) {
        dealerHand = { cards: "8 and 9", value: 27 };
    } else if (dealerHand === 28) {
        dealerHand = { cards: "2 and 10", value: 28 };
    } else if (dealerHand === 29) {
        dealerHand = { cards: "3 and 10", value: 29 };
    } else if (dealerHand === 30) {
        dealerHand = { cards: "4 and 10", value: 30 };
    } else if (dealerHand === 31) {
        dealerHand = { cards: "5 and 10", value: 31 };
    } else if (dealerHand === 32) {
        dealerHand = { cards: "6 and 10", value: 32 };
    } else if (dealerHand === 33) {
        dealerHand = { cards: "7 and 10", value: 33 };
    } else if (dealerHand === 34) {
        dealerHand = { cards: "8 and 10", value: 34 };
    } else if (dealerHand === 35) {
        dealerHand = { cards: "9 and 10", value: 35 };
    } else if (dealerHand === 36) {
        dealerHand = { cards: "2 and Jack", value: 36 };
    } else if (dealerHand === 37) {
        dealerHand = { cards: "3 and Jack", value: 37 };
    } else if (dealerHand === 38) {
        dealerHand = { cards: "4 and Jack", value: 38 };
    } else if (dealerHand === 39) {
        dealerHand = { cards: "5 and Jack", value: 39 };
    } else if (dealerHand === 40) {
        dealerHand = { cards: "6 and Jack", value: 40 };
    } else if (dealerHand === 41) {
        dealerHand = { cards: "7 and Jack", value: 41 };
    } else if (dealerHand === 42) {
        dealerHand = { cards: "8 and Jack", value: 42 };
    } else if (dealerHand === 43) {
        dealerHand = { cards: "9 and Jack", value: 43 };
    } else if (dealerHand === 44) {
        dealerHand = { cards: "10 and Jack", value: 44 };
    } else if (dealerHand === 45) {
        dealerHand = { cards: "2 and Queen", value: 45 };
    } else if (dealerHand === 46) {
        dealerHand = { cards: "3 and Queen", value: 46 };
    } else if (dealerHand === 47) {
        dealerHand = { cards: "4 and Queen", value: 47 };
    } else if (dealerHand === 48) {
        dealerHand = { cards: "5 and Queen", value: 48 };
    } else if (dealerHand === 49) {
        dealerHand = { cards: "6 and Queen", value: 49 };
    } else if (dealerHand === 50) {
        dealerHand = { cards: "7 and Queen", value: 50 };
    } else if (dealerHand === 51) {
        dealerHand = { cards: "8 and Queen", value: 51 };
    } else if (dealerHand === 52) {
        dealerHand = { cards: "9 and Queen", value: 52 };
    } else if (dealerHand === 53) {
        dealerHand = { cards: "10 and Queen", value: 53 };
    } else if (dealerHand === 54) {
        dealerHand = { cards: "Jack and Queen", value: 54 };
    } else if (dealerHand === 55) {
        dealerHand = { cards: "2 and King", value: 55 };
    } else if (dealerHand === 56) {
        dealerHand = { cards: "3 and King", value: 56 };
    } else if (dealerHand === 57) {
        dealerHand = { cards: "4 and King", value: 57 };
    } else if (dealerHand === 58) {
        dealerHand = { cards: "5 and King", value: 58 };
    } else if (dealerHand === 59) {
        dealerHand = { cards: "6 and King", value: 59 };
    } else if (dealerHand === 60) {
        dealerHand = { cards: "7 and King", value: 60 };
    } else if (dealerHand === 61) {
        dealerHand = { cards: "8 and King", value: 61 };
    } else if (dealerHand === 62) {
        dealerHand = { cards: "9 and King", value: 62 };
    } else if (dealerHand === 63) {
        dealerHand = { cards: "10 and King", value: 63 };
    } else if (dealerHand === 64) {
        dealerHand = { cards: "Jack and King", value: 64 };
    } else if (dealerHand === 65) {
        dealerHand = { cards: "Queen and King", value: 65 };
    } else if (dealerHand === 66) {
        dealerHand = { cards: "2 and Ace", value: 66 };
    } else if (dealerHand === 67) {
        dealerHand = { cards: "3 and Ace", value: 67 };
    } else if (dealerHand === 68) {
        dealerHand = { cards: "4 and Ace", value: 68 };
    } else if (dealerHand === 69) {
        dealerHand = { cards: "5 and Ace", value: 69 };
    } else if (dealerHand === 70) {
        dealerHand = { cards: "6 and Ace", value: 70 };
    } else if (dealerHand === 71) {
        dealerHand = { cards: "7 and Ace", value: 71 };
    } else if (dealerHand === 72) {
        dealerHand = { cards: "8 and Ace", value: 72 };
    } else if (dealerHand === 73) {
        dealerHand = { cards: "9 and Ace", value: 73 };
    } else if (dealerHand === 74) {
        dealerHand = { cards: "10 and Ace", value: 74 };
    } else if (dealerHand === 75) {
        dealerHand = { cards: "Jack and Ace", value: 75 };
    } else if (dealerHand === 76) {
        dealerHand = { cards: "Queen and Ace", value: 76 };
    } else if (dealerHand === 77) {
        dealerHand = { cards: "King and Ace", value: 77 };
    } else if (dealerHand === 78) {
        dealerHand = { cards: "pair of 2s", value: 78 };
    } else if (dealerHand === 79) {
        dealerHand = { cards: "pair of 3s", value: 79 };
    } else if (dealerHand === 80) {
        dealerHand = { cards: "pair of 4s", value: 80 };
    } else if (dealerHand === 81) {
        dealerHand = { cards: "pair of 5s", value: 81 };
    } else if (dealerHand === 82) {
        dealerHand = { cards: "pair of 6s", value: 82 };
    } else if (dealerHand === 83) {
        dealerHand = { cards: "pair of 7s", value: 83 };
    } else if (dealerHand === 84) {
        dealerHand = { cards: "pair of 8s", value: 84 };
    } else if (dealerHand === 85) {
        dealerHand = { cards: "pair of 9s", value: 85 };
    } else if (dealerHand === 86) {
        dealerHand = { cards: "pair of 10s", value: 86 };
    } else if (dealerHand === 87) {
        dealerHand = { cards: "pair of Jacks", value: 87 };
    } else if (dealerHand === 88) {
        dealerHand = { cards: "pair of Queens", value: 88 };
    } else if (dealerHand === 89) {
        dealerHand = { cards: "pair of Kings", value: 89 };
    } else if (dealerHand === 90) {
        dealerHand = { cards: "pair of Aces", value: 90 };
    } else if (dealerHand === 91) {
        dealerHand = { cards: "2 - 3", value: 0 };
    } else {
        alert("misdeal");
    }

    return dealerHand;
}
function computer() {
    "use strict";
    var computerHand = Math.floor(Math.random() * 91) + 1;
    if (computerHand === 1) {
        computerHand = { cards: "2 and 4", value: 1 };
    } else if (computerHand === 2) {
        computerHand = { cards: "3 and 4", value: 2 };
    } else if (computerHand === 3) {
        computerHand = { cards: "2 and 5", value: 3 };
    } else if (computerHand === 4) {
        computerHand = { cards: "3 and 5", value: 4 };
    } else if (computerHand === 5) {
        computerHand = { cards: "4 and 5", value: 5 };
    } else if (computerHand === 6) {
        computerHand = { cards: "2 and 6", value: 6 };
    } else if (computerHand === 7) {
        computerHand = { cards: "3 and 6", value: 7 };
    } else if (computerHand === 8) {
        computerHand = { cards: "4 and 6", value: 8 };
    } else if (computerHand === 9) {
        computerHand = { cards: "5 and 6", value: 9 };
    } else if (computerHand === 10) {
        computerHand = { cards: "2 and 7", value: 10 };
    } else if (computerHand === 11) {
        computerHand = { cards: "3 and 7", value: 11 };
    } else if (computerHand === 12) {
        computerHand = { cards: "4 and 7", value: 12 };
    } else if (computerHand === 13) {
        computerHand = { cards: "5 and 7", value: 13 };
    } else if (computerHand === 14) {
        computerHand = { cards: "6 and 7", value: 14 };
    } else if (computerHand === 15) {
        computerHand = { cards: "2 and 8", value: 15 };
    } else if (computerHand === 16) {
        computerHand = { cards: "3 and 8", value: 16 };
    } else if (computerHand === 17) {
        computerHand = { cards: "4 and 8", value: 17 };
    } else if (computerHand === 18) {
        computerHand = { cards: "5 and 8", value: 18 };
    } else if (computerHand === 19) {
        computerHand = { cards: "6 and 8", value: 19 };
    } else if (computerHand === 20) {
        computerHand = { cards: "7 and 8", value: 20 };
    } else if (computerHand === 21) {
        computerHand = { cards: "2 and 9", value: 21 };
    } else if (computerHand === 22) {
        computerHand = { cards: "3 and 9", value: 22 };
    } else if (computerHand === 23) {
        computerHand = { cards: "4 and 9", value: 23 };
    } else if (computerHand === 24) {
        computerHand = { cards: "5 and 9", value: 24 };
    } else if (computerHand === 25) {
        computerHand = { cards: "6 and 9", value: 25 };
    } else if (computerHand === 26) {
        computerHand = { cards: "7 and 9", value: 26 };
    } else if (computerHand === 27) {
        computerHand = { cards: "8 and 9", value: 27 };
    } else if (computerHand === 28) {
        computerHand = { cards: "2 and 10", value: 28 };
    } else if (computerHand === 29) {
        computerHand = { cards: "3 and 10", value: 29 };
    } else if (computerHand === 30) {
        computerHand = { cards: "4 and 10", value: 30 };
    } else if (computerHand === 31) {
        computerHand = { cards: "5 and 10", value: 31 };
    } else if (computerHand === 32) {
        computerHand = { cards: "6 and 10", value: 32 };
    } else if (computerHand === 33) {
        computerHand = { cards: "7 and 10", value: 33 };
    } else if (computerHand === 34) {
        computerHand = { cards: "8 and 10", value: 34 };
    } else if (computerHand === 35) {
        computerHand = { cards: "9 and 10", value: 35 };
    } else if (computerHand === 36) {
        computerHand = { cards: "2 and Jack", value: 36 };
    } else if (computerHand === 37) {
        computerHand = { cards: "3 and Jack", value: 37 };
    } else if (computerHand === 38) {
        computerHand = { cards: "4 and Jack", value: 38 };
    } else if (computerHand === 39) {
        computerHand = { cards: "5 and Jack", value: 39 };
    } else if (computerHand === 40) {
        computerHand = { cards: "6 and Jack", value: 40 };
    } else if (computerHand === 41) {
        computerHand = { cards: "7 and Jack", value: 41 };
    } else if (computerHand === 42) {
        computerHand = { cards: "8 and Jack", value: 42 };
    } else if (computerHand === 43) {
        computerHand = { cards: "9 and Jack", value: 43 };
    } else if (computerHand === 44) {
        computerHand = { cards: "10 and Jack", value: 44 };
    } else if (computerHand === 45) {
        computerHand = { cards: "2 and Queen", value: 45 };
    } else if (computerHand === 46) {
        computerHand = { cards: "3 and Queen", value: 46 };
    } else if (computerHand === 47) {
        computerHand = { cards: "4 and Queen", value: 47 };
    } else if (computerHand === 48) {
        computerHand = { cards: "5 and Queen", value: 48 };
    } else if (computerHand === 49) {
        computerHand = { cards: "6 and Queen", value: 49 };
    } else if (computerHand === 50) {
        computerHand = { cards: "7 and Queen", value: 50 };
    } else if (computerHand === 51) {
        computerHand = { cards: "8 and Queen", value: 51 };
    } else if (computerHand === 52) {
        computerHand = { cards: "9 and Queen", value: 52 };
    } else if (computerHand === 53) {
        computerHand = { cards: "10 and Queen", value: 53 };
    } else if (computerHand === 54) {
        computerHand = { cards: "Jack and Queen", value: 54 };
    } else if (computerHand === 55) {
        computerHand = { cards: "2 and King", value: 55 };
    } else if (computerHand === 56) {
        computerHand = { cards: "3 and King", value: 56 };
    } else if (computerHand === 57) {
        computerHand = { cards: "4 and King", value: 57 };
    } else if (computerHand === 58) {
        computerHand = { cards: "5 and King", value: 58 };
    } else if (computerHand === 59) {
        computerHand = { cards: "6 and King", value: 59 };
    } else if (computerHand === 60) {
        computerHand = { cards: "7 and King", value: 60 };
    } else if (computerHand === 61) {
        computerHand = { cards: "8 and King", value: 61 };
    } else if (computerHand === 62) {
        computerHand = { cards: "9 and King", value: 62 };
    } else if (computerHand === 63) {
        computerHand = { cards: "10 and King", value: 63 };
    } else if (computerHand === 64) {
        computerHand = { cards: "Jack and King", value: 64 };
    } else if (computerHand === 65) {
        computerHand = { cards: "Queen and King", value: 65 };
    } else if (computerHand === 66) {
        computerHand = { cards: "2 and Ace", value: 66 };
    } else if (computerHand === 67) {
        computerHand = { cards: "3 and Ace", value: 67 };
    } else if (computerHand === 68) {
        computerHand = { cards: "4 and Ace", value: 68 };
    } else if (computerHand === 69) {
        computerHand = { cards: "5 and Ace", value: 69 };
    } else if (computerHand === 70) {
        computerHand = { cards: "6 and Ace", value: 70 };
    } else if (computerHand === 71) {
        computerHand = { cards: "7 and Ace", value: 71 };
    } else if (computerHand === 72) {
        computerHand = { cards: "8 and Ace", value: 72 };
    } else if (computerHand === 73) {
        computerHand = { cards: "9 and Ace", value: 73 };
    } else if (computerHand === 74) {
        computerHand = { cards: "10 and Ace", value: 74 };
    } else if (computerHand === 75) {
        computerHand = { cards: "Jack and Ace", value: 75 };
    } else if (computerHand === 76) {
        computerHand = { cards: "Queen and Ace", value: 76 };
    } else if (computerHand === 77) {
        computerHand = { cards: "King and Ace", value: 77 };
    } else if (computerHand === 78) {
        computerHand = { cards: "pair of 2s", value: 78 };
    } else if (computerHand === 79) {
        computerHand = { cards: "pair of 3s", value: 79 };
    } else if (computerHand === 80) {
        computerHand = { cards: "pair of 4s", value: 80 };
    } else if (computerHand === 81) {
        computerHand = { cards: "pair of 5s", value: 81 };
    } else if (computerHand === 82) {
        computerHand = { cards: "pair of 6s", value: 82 };
    } else if (computerHand === 83) {
        computerHand = { cards: "pair of 7s", value: 83 };
    } else if (computerHand === 84) {
        computerHand = { cards: "pair of 8s", value: 84 };
    } else if (computerHand === 85) {
        computerHand = { cards: "pair of 9s", value: 85 };
    } else if (computerHand === 86) {
        computerHand = { cards: "pair of 10s", value: 86 };
    } else if (computerHand === 87) {
        computerHand = { cards: "pair of Jacks", value: 87 };
    } else if (computerHand === 88) {
        computerHand = { cards: "pair of Queens", value: 88 };
    } else if (computerHand === 89) {
        computerHand = { cards: "pair of Kings", value: 89 };
    } else if (computerHand === 90 || computerHand === 2) {
        computerHand = { cards: "pair of Aces", value: 90 };
    } else if (computerHand === 91) {
        computerHand = { cards: "2 - 3", value: 0 };
    } else {
        alert("misdeal");
    }

    return computerHand;
}
function player() {
    "use strict";
    var playerHand = Math.floor(Math.random() * 91) + 1;
    if (playerHand === 1) {
        playerHand = { cards: "2 and 4", value: 1};
    } else if (playerHand === 2) {
        playerHand = { cards: "3 and 4", value: 2 };
    } else if (playerHand === 3) {
        playerHand = { cards: "2 and 5", value: 3 };
    } else if (playerHand === 4) {
        playerHand = { cards: "3 and 5", value: 4 };
    } else if (playerHand === 5) {
        playerHand = { cards: "4 and 5", value: 5 };
    } else if (playerHand === 6) {
        playerHand = { cards: "2 and 6", value: 6 };
    } else if (playerHand === 7) {
        playerHand = { cards: "3 and 6", value: 7 };
    } else if (playerHand === 8) {
        playerHand = { cards: "4 and 6", value: 8 };
    } else if (playerHand === 9) {
        playerHand = { cards: "5 and 6", value: 9 };
    } else if (playerHand === 10) {
        playerHand = { cards: "2 and 7", value: 10 };
    } else if (playerHand === 11) {
        playerHand = { cards: "3 and 7", value: 11 };
    } else if (playerHand === 12) {
        playerHand = { cards: "4 and 7", value: 12 };
    } else if (playerHand === 13) {
        playerHand = { cards: "5 and 7", value: 13 };
    } else if (playerHand === 14) {
        playerHand = { cards: "6 and 7", value: 14 };
    } else if (playerHand === 15) {
        playerHand = { cards: "2 and 8", value: 15 };
    } else if (playerHand === 16) {
        playerHand = { cards: "3 and 8", value: 16 };
    } else if (playerHand === 17) {
        playerHand = { cards: "4 and 8", value: 17 };
    } else if (playerHand === 18) {
        playerHand = { cards: "5 and 8", value: 18 };
    } else if (playerHand === 19) {
        playerHand = { cards: "6 and 8", value: 19 };
    } else if (playerHand === 20) {
        playerHand = { cards: "7 and 8", value: 20 };
    } else if (playerHand === 21) {
        playerHand = { cards: "2 and 9", value: 21 };
    } else if (playerHand === 22) {
        playerHand = { cards: "3 and 9", value: 22 };
    } else if (playerHand === 23) {
        playerHand = { cards: "4 and 9", value: 23 };
    } else if (playerHand === 24) {
        playerHand = { cards: "5 and 9", value: 24 };
    } else if (playerHand === 25) {
        playerHand = { cards: "6 and 9", value: 100 };
    } else if (playerHand === 26) {
        playerHand = { cards: "7 and 9", value: 26 };
    } else if (playerHand === 27) {
        playerHand = { cards: "8 and 9", value: 27 };
    } else if (playerHand === 28) {
        playerHand = { cards: "2 and 10", value: 28 };
    } else if (playerHand === 29) {
        playerHand = { cards: "3 and 10", value: 29 };
    } else if (playerHand === 30) {
        playerHand = { cards: "4 and 10", value: 30 };
    } else if (playerHand === 31) {
        playerHand = { cards: "5 and 10", value: 31 };
    } else if (playerHand === 32) {
        playerHand = { cards: "6 and 10", value: 32 };
    } else if (playerHand === 33) {
        playerHand = { cards: "7 and 10", value: 33 };
    } else if (playerHand === 34) {
        playerHand = { cards: "8 and 10", value: 34 };
    } else if (playerHand === 35) {
        playerHand = { cards: "9 and 10", value: 35 };
    } else if (playerHand === 36) {
        playerHand = { cards: "2 and Jack", value: 36 };
    } else if (playerHand === 37) {
        playerHand = { cards: "3 and Jack", value: 37 };
    } else if (playerHand === 38) {
        playerHand = { cards: "4 and Jack", value: 38 };
    } else if (playerHand === 39) {
        playerHand = { cards: "5 and Jack", value: 39 };
    } else if (playerHand === 40) {
        playerHand = { cards: "6 and Jack", value: 40 };
    } else if (playerHand === 41) {
        playerHand = { cards: "7 and Jack", value: 41 };
    } else if (playerHand === 42) {
        playerHand = { cards: "8 and Jack", value: 42 };
    } else if (playerHand === 43) {
        playerHand = { cards: "9 and Jack", value: 43 };
    } else if (playerHand === 44) {
        playerHand = { cards: "10 and Jack", value: 44 };
    } else if (playerHand === 45) {
        playerHand = { cards: "2 and Queen", value: 45 };
    } else if (playerHand === 46) {
        playerHand = { cards: "3 and Queen", value: 46 };
    } else if (playerHand === 47) {
        playerHand = { cards: "4 and Queen", value: 47 };
    } else if (playerHand === 48) {
        playerHand = { cards: "5 and Queen", value: 48 };
    } else if (playerHand === 49) {
        playerHand = { cards: "6 and Queen", value: 49 };
    } else if (playerHand === 50) {
        playerHand = { cards: "7 and Queen", value: 50 };
    } else if (playerHand === 51) {
        playerHand = { cards: "8 and Queen", value: 51 };
    } else if (playerHand === 52) {
        playerHand = { cards: "9 and Queen", value: 52 };
    } else if (playerHand === 53) {
        playerHand = { cards: "10 and Queen", value: 53 };
    } else if (playerHand === 54) {
        playerHand = { cards: "Jack and Queen", value: 54 };
    } else if (playerHand === 55) {
        playerHand = { cards: "2 and King", value: 55 };
    } else if (playerHand === 56) {
        playerHand = { cards: "3 and King", value: 56 };
    } else if (playerHand === 57) {
        playerHand = { cards: "4 and King", value: 57 };
    } else if (playerHand === 58) {
        playerHand = { cards: "5 and King", value: 58 };
    } else if (playerHand === 59) {
        playerHand = { cards: "6 and King", value: 59 };
    } else if (playerHand === 60) {
        playerHand = { cards: "7 and King", value: 60 };
    } else if (playerHand === 61) {
        playerHand = { cards: "8 and King", value: 61 };
    } else if (playerHand === 62) {
        playerHand = { cards: "9 and King", value: 62 };
    } else if (playerHand === 63) {
        playerHand = { cards: "10 and King", value: 63 };
    } else if (playerHand === 64) {
        playerHand = { cards: "Jack and King", value: 64 };
    } else if (playerHand === 65) {
        playerHand = { cards: "Queen and King", value: 65 };
    } else if (playerHand === 66) {
        playerHand = { cards: "2 and Ace", value: 66 };
    } else if (playerHand === 67) {
        playerHand = { cards: "3 and Ace", value: 67 };
    } else if (playerHand === 68) {
        playerHand = { cards: "4 and Ace", value: 68 };
    } else if (playerHand === 69) {
        playerHand = { cards: "5 and Ace", value: 69 };
    } else if (playerHand === 70) {
        playerHand = { cards: "6 and Ace", value: 70 };
    } else if (playerHand === 71) {
        playerHand = { cards: "7 and Ace", value: 71 };
    } else if (playerHand === 72) {
        playerHand = { cards: "8 and Ace", value: 72 };
    } else if (playerHand === 73) {
        playerHand = { cards: "9 and Ace", value: 73 };
    } else if (playerHand === 74) {
        playerHand = { cards: "10 and Ace", value: 74 };
    } else if (playerHand === 75) {
        playerHand = { cards: "Jack and Ace", value: 75 };
    } else if (playerHand === 76) {
        playerHand = { cards: "Queen and Ace", value: 76 };
    } else if (playerHand === 77) {
        playerHand = { cards: "King and Ace", value: 77 };
    } else if (playerHand === 78) {
        playerHand = { cards: "pair of 2s", value: 78 };
    } else if (playerHand === 79) {
        playerHand = { cards: "pair of 3s", value: 79 };
    } else if (playerHand === 80) {
        playerHand = { cards: "pair of 4s", value: 80 };
    } else if (playerHand === 81) {
        playerHand = { cards: "pair of 5s", value: 81 };
    } else if (playerHand === 82) {
        playerHand = { cards: "pair of 6s", value: 82 };
    } else if (playerHand === 83) {
        playerHand = { cards: "pair of 7s", value: 83 };
    } else if (playerHand === 84) {
        playerHand = { cards: "pair of 8s", value: 84 };
    } else if (playerHand === 85) {
        playerHand = { cards: "pair of 9s", value: 85 };
    } else if (playerHand === 86) {
        playerHand = { cards: "pair of 10s", value: 86 };
    } else if (playerHand === 87) {
        playerHand = { cards: "pair of Jacks", value: 87 };
    } else if (playerHand === 88) {
        playerHand = { cards: "pair of Queens", value: 88 };
    } else if (playerHand === 89) {
        playerHand = { cards: "pair of Kings", value: 89 };
    } else if (playerHand === 90) {
        playerHand = { cards: "pair of Aces", value: 90 };
    } else if (playerHand === 91) {
        playerHand = { cards: "2 - 3", value: 0 };
    } else {
        alert("misdeal");
    }

    return playerHand;
}
var dealerHand = dealer();
var computerHand = computer();
var playerHand = player();
function computerChoice() {
    "use strict";
    var computerDecide = "0";
    if (computerHand.value >= 66 || (computerHand.value > playerHand.value && computerHand.value > dealerHand.value) || (computerHand.value === 0 && playerHand.value <= 72)) {
        computerDecide = "hold";
    } else {
        computerDecide = "drop";
    }
    return computerDecide;
}
var chips = { P: 10, C: 10, pot: 0 };
function anti() {
    "use strict";
    if (chips.pot === 0) {
        chips.C -= 1;
        chips.P -= 1;
        chips.pot += 2;
        return chips;
    } else {
        return chips;
    }
}
function core() {
    "use strict";
    var userHoldDrop = prompt("You have a " + playerHand.cards + ". Do you wanna hold (H) or drop (D)?");
    if (userHoldDrop.toLowerCase() === "d" || userHoldDrop.toLowerCase() === "drop") {
        if (computerChoice() === "drop") {
            alert("Darwin chooses to drop, it's a tie.");
        } else if (computerChoice() === "hold") {
            alert("Darwin chooses to hold. Let's see if he beats the dealer.");
            if (dealerHand.value === computerHand.value) {
                alert("Darwin and the dealer both have " + computerHand.cards + " so it's a tie. The pot remains as is.");
            } else if (computerHand.value === 0) {
                alert("Darwin has a 2 and 3, he won with the 23 rule.");
                chips.C += chips.pot;
                chips.pot -= chips.pot;
                return chips;
            } else if (dealerHand.value > computerHand.value) {
                alert("Darwin had a " + computerHand.cards + ", and the dealer had a " + dealerHand.cards + ". Darwin lost to the dealer, and has to pay up.");
                chips.C -= chips.pot;
                chips.pot *= 2;
                return chips;
            } else if (dealerHand.value < computerHand.value) {
                alert("Darwin had a " + computerHand.cards + ", and the dealer had a " + dealerHand.cards + ". Darwin beat the dealer, and wins the pot.");
                chips.C += chips.pot;
                chips.pot -= chips.pot;
                return chips;
            }
        }
    } else if (userHoldDrop.toLowerCase() === "h" || userHoldDrop.toLowerCase() === "hold") {
        if (computerChoice() === "hold") {
            alert("Darwin chooses to hold too. Let's see which one of yall win.");
            if (playerHand.value === computerHand.value) {
                alert("Darwin and you both have " + computerHand.cards + " so it's a tie. The pot remains as is.");
            } else if (playerHand.value > computerHand.value) {
                alert("Darwin had a " + computerHand.cards + ", and you had a " + playerHand.cards + ". You beat Darwin, you win the pot and Darwin has to pay up.");
                chips.P += chips.pot;
                chips.C -= chips.pot;
                return chips;
            } else if (playerHand.value < computerHand.value) {
                alert("Darwin had a " + computerHand.cards + ", and you had a " + playerHand.cards + ". Your are an idiot, Darwin beat you.");
                chips.C += chips.pot;
                chips.P -= chips.pot;
                return chips;
            }
        } else if (computerChoice() === "drop") {
            alert("Darwin chooses to drop. Let's see if you beat the dealer.");
            if (dealerHand.value === playerHand.value) {
                alert("You and the dealer both have " + playerHand.cards + " so it's a tie. The pot remains as is.");
            } else if (playerHand.value === 0) {
                alert("You won with the 2 3 rule.");
                chips.P += chips.pot;
                chips.pot -= chips.pot;
                return chips;
            } else if (dealerHand.value > playerHand.value) {
                alert("The dealer had a " + dealerHand.cards + ", and you had a " + playerHand.cards + ". You lost to the dealer, and you have to pay up, YOU SUCK.");
                chips.P -= chips.pot;
                chips.pot *= 2;
                return chips;
            } else if (dealerHand.value < playerHand.value) {
                alert("The dealer had a " + dealerHand.cards + ", and you had a " + playerHand.cards + ". You beat the dealer, and you win the pot.");
                chips.P += chips.pot;
                chips.pot -= chips.pot;
                return chips;
            }
        }
    } else {
        alert("you have to type in H for hold, or D for drop, you lose chips for cheating.");
        chips.P -= chips.pot;
        chips.pot *= 2;
        return chips;
    }
}
function gameOn() {
    "use strict";
    alert("If you are new, it is highly recomended that you first check out the directions manual on the home page");
    confirm("Lets play, you each have 10 chips to start.");
    do {
        anti();
        confirm("Darwin has " + chips.C + " chips, and you have " + chips.P + " chips.");
        dealerHand = dealer();
        computerHand = computer();
        playerHand = player();
        computerChoice();
        core();
    } while (chips.C > 0 && chips.P > 0);
    if (chips.C <= 0) {
        alert("Darwin has no more chips, YOU BEAT DARWIN!");
        chips.P = 10;
        chips.C = 10;
        chips.pot = 0;
        return chips;
    } else if (chips.P <= 0) {
        alert("You LOSE!, no pay no play!");
        chips.P = 10;
        chips.C = 10;
        chips.pot = 0;
        return chips;
    }
}
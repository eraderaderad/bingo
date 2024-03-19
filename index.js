console.log("me myself and i");

let B = false,
 I = false,
 N = false,
 G = false,
 O = false;

generateRandomNumber(30);

function generateRandomNumber(max) 
    {
        let randomNum = Math.floor(Math.random() * max) + 1;

        if(randomNum <= 15)
        {
            B = true;
            console.log(`Random Number ${randomNum} is in B. 1 - 15`)
        } 

        else if (randomNum >= 16 && randomNum <= 30) {
            I = true
            console.log(`Random Number ${randomNum} is I. 16 - 30`)
        }

        else if (randomNum >= 31 && randomNum <= 45) {
            N = true
            console.log(`Random Number ${randomNum} is N. 31 - 46`)
        }
        
        else if (randomNum >= 46 && randomNum <= 60) {
            G = true
            console.log(`Random Number ${randomNum} is G. 46 - 61`)
        }
        
        else if (randomNum >= 61 && randomNum <= 75) { 
            O = true
            console.log(`Random Number ${randomNum} is O. 61 - 75`)
        }

        else {
            console.log(`Random Number is invalid.`)
        }
        if (B == true && I == true && N == true && G == true && O == true){
            console.log(`Bingo!!!`);
        }
    }

        // switch(randomNum){
        //     case 1:{
        //         console.log(`Random number is in B.`);
        //         break;
        //     }
        //     case 16:{
        //         console.log(`Random number is in I.`);
        //         break;
        //     }
        //     case 31:{
        //         console.log(`Random number is in N.`);
        //         break;
        //     }
        //     case 46:{
        //         console.log(`Random number is in G.`);
        //         break;
        //     }
        //     case 61:{
        //         console.log(`Random number is in O.`);
        //         break;
        //     }
        // }

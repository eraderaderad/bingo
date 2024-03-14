console.log("me myself and i");

generateRandomNumber(30);

function generateRandomNumber(max) 
    {
        let randomNum = Math.floor(Math.random() * max) + 1;

        if(randomNum <= 15)
        {
            return console.log(`Random Number ${randomNum} is in B. 1 - 15`)
        } 

        else if (randomNum >= 16 && randomNum <= 30) {
            return console.log(`Random Number ${randomNum} is I. 16 - 30`)
        }

        else if (randomNum >= 31 && randomNum <= 45) {
            return console.log(`Random Number ${randomNum} is N. 31 - 46`)
        }

        else if (randomNum >= 46 && randomNum <= 60) {
            return console.log(`Random Number ${randomNum} is G. 46 - 61`)
        }
        
        else if (randomNum >= 61 && randomNum <= 75) {
            return console.log(`Random Number ${randomNum} is O. 61 - 75`)
        }

        else {
            return console.log(`Random Number is invalid.`)
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

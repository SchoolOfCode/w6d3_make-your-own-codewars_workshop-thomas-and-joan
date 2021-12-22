/* 
👉 Write your kata here!

A knight needs to defeat an army of giants.  He needs to fire 3 arrows into the each giant to kill it.  

How many arrows does the knight need in his quiver to defeat an army of a given size?

*/



//👉 Write the function your CodeWarriors will start with below here:


function battleOutcome (giantsNumber, arrowNumber){
    if (arrowNumber === giantsNumber*3){
        return true;
    }
    else if(arrowNumber > giantsNumber*3){return true;}
    else {return false;};



// if arrowNumber is 3 times the number of giantsNumber, then return true.

// if arrowNumber is not 3 times the giantsNumber, return false + message?

}

export default battleOutcome;
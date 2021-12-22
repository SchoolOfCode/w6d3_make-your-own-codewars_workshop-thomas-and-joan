//👉 Write your tests below here:

//import function 

import battleOutcome from "./main.js";

// Arrange 

// expected can be true or false 

// actual should be true or false

// test examples: 

//  if giantsNumber = 3 then arrowNumber should be 9, then return true;

// if giantsNumber = 3 and arrowNumber = 8, then return false;

// if giantsNumber = 3 and arrowNumber = 10, then return true;

// if giantsNumber != Number 

// Act 

// Assert 


test.each([
    //variable of the input called letter, each input should be from a to z
    {giantsNumber:3, arrowNumber:9, expected: true},
    {giantsNumber:3, arrowNumber:8, expected: false},
    {giantsNumber:3, arrowNumber:10, expected: true},

])("you should have enough arrows to kill the giants", function({ giantsNumber, arrowNumber, expected}) {
    expect(battleOutcome(giantsNumber, arrowNumber)).toBe(expected);
})



// let census2020 = [
//         {"state": "Connecticut", "ppl": 3605944, "isNE": true},
//         {"state": "Maine", "ppl": 1362359, "isNE": true},
//         {"state": "Massachusetts", "ppl": 7029917, "isNE": true},
//         {"state": "New Hampshire", "ppl": 1377529, "isNE": true},
//         {"state": "New Jersey", "ppl": 9288994, "isNE": false},
//         {"state": "New York", "ppl": 20201249, "isNE": false},
//         {"state": "Pennsylvania", "ppl": 13002700, "isNE": false},
//         {"state": "Rhode Island", "ppl": 1097379, "isNE": true},
//         {"state": "Vermont", "ppl": 643077, "isNE": true},
//         ];
//          let stateSize = [
//         {"state": "Vermont", "sqm": 9623},
//         {"state": "New York", "sqm": 54556},
//         {"state": "Connecticut", "sqm": 5543},
//         {"state": "Pennsylvania", "sqm": 46055},
//         {"state": "New Jersey", "sqm": 8729},
//         {"state": "Massachusetts", "sqm": 10565},
//         {"state": "New Hampshire", "sqm": 9350},
//         {"state": "Maine", "sqm": 35385},
//         {"state": "Rhode Island", "sqm": 1214},
// ];

// function calDensity(ppl,sqm,raw=true) {
//     return (raw ?   Math.round(ppl/sqm) : (ppl/sqm));
// }

// let newObj = census2020.map( i => {

//     const result = stateSize.find(item => item.state === i.state);
//     let newObj = {
//         state:i.state,
//         density: calDensity(i.ppl,result.sqm,false)
//     }
//     return newObj;
// });

// console.log(newObj)
   // let lookup_table = [
    // {
    //         digit:1,
    //         alphabets : []
    // },
    // {
    //     digit:2,
    //     alphabets : [a,b,c]
    // },
    // {
    //     digit:3,
    //     alphabets : [d,e,f]
    // },
    // {
    //     digit:4,
    //     alphabets : [g,h,i]
    // },
    // {
    //     digit:5,
    //     alphabets : [j,k,l]
    // },
    // {
    //     digit:6,
    //     alphabets : [m,n,o]
    // },
    // {
    //     digit:7,
    //     alphabets : [p,q,r,s]
    // },
    // {
    //     digit:8,
    //     alphabets : [t,u,v]
    // },
    // {
    //     digit:9,
    //     alphabets : [w,x,y,z]
    // }

    // ]

/*
const lookup_table =
    {
        A: 2,
        B: 2,
        C: 2,
        D: 3,
        E: 3,
        F: 3,
        G: 4,
        H: 4,
        I: 4,
        J: 5,
        K: 5,
        L: 5,
        M: 6,
        N: 6,
        O: 6,
        P: 7,
        Q: 7,
        R: 7,
        S: 7,
        T: 8,
        U: 8,
        V: 8,
        W: 9,
        X: 9,
        Y: 9,
        Z: 9,
        1:1,
        2:2,
        3:3,
        4:4,
        5:5,
        6:6,
        7:7,
        8:8,
        9:9,
        0:0,
        "+":"+",
        "(":"",
        ")":""
      }

let input = "+1(800)FLOWER";

function getNumber(input){
    
    let ret = input.split("").map(i=>{

        return keypadConverter(i);
    });
    return ret;
}

function keypadConverter (str){
return lookup_table[str]
}

console.log(getNumber(input).join(""));

//1 [new array],3,4
*/



////---------////---------////---------////---------////---------////---------////---------////---------////---------////---------////---------
//Homework Wednesday June 7 2023


//1. If you have been given a time of a day(eg: 2:37 in the form of (hour, minutes) 
//then you have to calculate the degree between the hour and minute hand.

let inputTime = "2:37";
//Split hour and minute
let timeArray = inputTime.split(":");

//every 12 hours is 360 so each hour is 360/12 = 30 , likewise  60 min is 360 so each min is 360/60 = 6
console.log("question 1: " +  Math.abs(timeArray[0]*30 - timeArray[1]*6));

////---------////---------////---------////---------////---------////---------////---------////---------////---------////---------////---------

/*
3.   If we are giv2en an input string which is a long paragraph
, then we have to return the longest sentence of that paragraph.
*/

//thought process a sentence is seperated by a . so use string.split(), then return used reduce()& string.len to find max

let paragraph = "His parents continued to question him. He didn't know what to say to them since they refused to believe the truth. He explained again and again, and they dismissed his explanation as a figment of his imagination. There was no way that grandpa, who had been dead for five years, could have told him where the treasure had been hidden. Of course, it didn't help that grandpa was roaring with laughter in the chair next to him as he tried to explain once again how he'd found it.";

let sentenceArray = paragraph.split(".");

//Variable stores longest sentence when mapping
let longest_sentence =""
//initial is 0
let maxLength = 0

sentenceArray.map((i)=>{
    (i.length> maxLength ? (longest_sentence = i.slice(), maxLength = i.length):null)
})
console.log("Question 2 :" + longest_sentence)


////---------////---------////---------////---------////---------////---------////---------////---------////---------////---------////---------

//What is let a = 1 + 2 + "3" ?
// Ans 33 > starts from right to left 1+2 = 3 then concats






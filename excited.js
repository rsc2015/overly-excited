console.log("excited.js");

// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];


function addExcitement(theWordArray) {
    let sentence1 = " ";
for (let i = 0; i < sentence.length; i++) {
    sentence1 += sentence[i] + " ";
    console.log(sentence1);  
  }  
}
addExcitement(sentence);


function addExclamation(theWordArray) {
    let sentence2 = " ";
        for (let i = 0; i < sentence.length; i++) {
            sentence2 += sentence[i] + " ";
            //console.log(sentence2);
            var pos = i + 1;
            if (pos % 3 === 0) {
                sentence2 += "!" + " ";
                console.log(sentence2);
            }else {
                console.log(sentence2)
            }
          }  
        }

addExclamation(sentence);




    function addMoreExclamation(theWordArray, punctuation) {
        let sentence3 = " ";
        for (let i = 0; i < sentence.length; i++) {
            sentence3 += sentence[i] + " ";
            //console.log(sentence2);
            var pos = i + 1;
            if (pos % 3 === 0) { 
               //console.log(sentence2);
               var pos = pos/3;
               var exlam = punctuation;
                sentence3 += exlam.repeat(pos) + " ";
                console.log(sentence3);
            }
            
          }  
        }

    addMoreExclamation(sentence, "!");
    
   //// I want to use a question mark instead of exclamation
    addMoreExclamation(sentence, "?");

    
// Complete this arrow function template to make your
// function work with it.

let betterSentence = ["I", "am", "finally", "excited", "to", "complete", "overly", "excited", "excercise"];
let addMoreAmpersand  = (newSentence, ampersand) => {
    let sentence4 = " ";
        for (let i = 0; i < betterSentence.length; i++) {
            sentence4 += betterSentence[i] + " ";
            //console.log(sentence4);
            var pos = i + 1;
            if (pos % 3 === 0) { 
               //console.log(sentence4);
               var pos = pos/3;
               var add = ampersand;
                sentence4 += add.repeat(pos) + " ";
                console.log(sentence4);
            }
          }  
 };

 addMoreAmpersand(betterSentence, "&");
/*The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
-------------------------------------------
Impure functions produce different results upon execution...
  const noise = function () {
  return Math.random()  
}
console.log(noise())   // ​​​​​0.8521188650079663​​​​​
console.log(noise())   // 0.311073492244087​​​​​
-----------------------------------
or affect other parts of the system when executed.

const updateDOM = function (message) {
    const el = document.getElementById("messages")
    el.innerHTML += message  
}
 https://toddmotto.com/pure-versus-impure-functions

*/
/*function addExcitement(theWordArray) {
      for (let i=0; i<sentence.length; i++){
          console.log(sentence[i]);
          return 
    
}

// Invoke the function and pass in the array
addExcitement(sentence);*/

/*var str = ["a", "b", "c", "d", "e", "f"];
var str1 = "";
for (var i = 0; i < str.length; i++) {
    //str1 = str[i];
   
    //str1 = str[i] + str.slice(i - (i + 1));
    //str1 = str1 + str.slice(i - (i + 1));
    str1 = str1 + str.slice(i);
    //str1 = str[i] + str.slice(i);
   
}

console.log(str1);*/
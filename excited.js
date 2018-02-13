console.log("excited.js");

// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let sentence1 = " ";


function addExcitement(theWordArray) {
for (let i = 0; i < sentence.length; i++) {
    sentence1 += sentence[i] + " ";
    console.log(sentence1);  
  }  
}
addExcitement(sentence);

let sentence2 = " ";

    function addExclamation(theWordArray) {
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
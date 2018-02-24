// dependencies and modules
var Letter = require("./Letter");

/*var test = new Letter("e");
console.log(test);
console.log(test.guess("a"));*/

function Word(word){
  this.word = word.split(""); //turns word into an array of characters
  //for each letter, create an object
  var letterWord = [];
  for (var i=0; i<this.word.length; i++){
    //console.log(this.word[i]);
    letterWord.push(new Letter(this.word[i]));
  }
  //the object Word can return the letter objects
  this.letterWord = letterWord;
  this.display = function(){
    var output = "";
    for (var j=0; j<this.letterWord.length;j++){
      output += this.letterWord[j].display();
    }
    //this output is array of letter objects
    return output;
  }
  this.guess = function(c){
     var output = [];
     for (var k=0; k<this.letterWord.length;k++){
      output.push(this.letterWord[k].guess(c));
     }
     //this output is array of true and false
     return output;
  }
}

/*var test = new Word("cat");
console.log(test.display());
console.log(test.letterWord);
console.log(test.guess("c"));*/

module.exports = Word;
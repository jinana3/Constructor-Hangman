function Letter(character, guessed = false){
  this.character = character;//underlying character
  this.guessed = guessed;//guessed yet? nope
  this.toString = function(){
    if (this.guessed === false){
      //return underscore
      return " _";
    }
    else {
      //return character
      return this.character;
    }
  }
  this.guess = function(c){
    if (c === this.character){
      this.guessed = true;
    }
    //this returns the current guessed value
    return this.guessed;
  }
}


var test = new Letter("e");
console.log(test);
console.log(test.guess("e"));
console.log(test + "testing");

module.exports = Letter;


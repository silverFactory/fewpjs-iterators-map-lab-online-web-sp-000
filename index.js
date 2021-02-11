const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
function titleCaseWord(word){
  return word[0].toUpperCase() + word.slice(1)
}
function titleCaseSentence(sentence){
  let bits = sentence.split(" ")
  let capBits = bits.map(word => titleCaseWord(word))
  return capBits.join(" ")
}
function titleCased(){
   return tutorials.map(tutorial => titleCaseSentence(tutorial))
 }


function forLoop(array) {
  var i; 
  for (let i = 0; i < 25; i++) {
    if (i === 1) {console.log(`"I am 1 strange loop."`)}
    else {console.log(`"I am ${i} strange loops."`)}
  }
  return array  
}

//let Spy = 86; 
function whileLoop(n){
  while (n >= 0){
    console.log(n--) 
  }
  return 'done'
}


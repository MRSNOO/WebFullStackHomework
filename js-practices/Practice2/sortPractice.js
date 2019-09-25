'use strict'

function sort(input) {
  let tg 
  let n = input.length
  for(let i = 0; i<n-1; i++){
    for(let j = i+1; j<n; j++){
      if(input[i]>input[j]){
      tg = input[i]
      input[i] = input[j]
      input[j] = tg
      }
    }
  }
  return input
  // return input.sort((a,b) => a-b); // Remove this line and change to your own algorithm
}

module.exports = sort

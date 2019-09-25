'use strict'

function generate(testLengthArray){
  let dataset = []
  for(let i = 0; i<testLengthArray.length-3;i++){
    let inputArray = []
    inputArray.length = testLengthArray[i]
    // nhap input
    for(let j = 0;j<inputArray.length;j++){
      inputArray[j] = Math.floor((Math.random())*10000)
    }
    //sort input
      let tg 
      let n = inputArray.length
      for(let x = 0; x<n-1; x++){
        for(let y = i+1; y<n; y++){
          if(inputArray[x]>inputArray[y]){
          tg = inputArray[x]
          inputArray[x] = inputArray[y]
          inputArray[y] = tg
          }
        }
      }
    //search
    function search(input, target) {
      for(let l = 0; l < input.length; l++){
        if(target == input[l]){
          return l
        }
      }
      return -1
    }
    let target = Math.floor(Math.random()*10000)
    if(target == inputArray[0] && testLengthArray.length >=4){
      return truthy
    }
    else if(target == inputArray[inputArray.length-1] && testLengthArray.length >=4){
      return truthy
    }


    let output = search(inputArray,target)

    let object = {
      "input":inputArray,
      "target":target,
      "output":output
    }

    let inputArray1 = []
    let inputArray2 = []
    let inputArray3 = []

    inputArray1.length = testLengthArray[testLengthArray.length -3]  
    inputArray2.length = testLengthArray[testLengthArray.length -2]  
    inputArray3.length = testLengthArray[testLengthArray.length -1]  

    for(let a1 = 0;a1<inputArray1.length;a1++){
      inputArray1[a1] = Math.floor((Math.random())*10000)
      var target1 = inputArray1[0]
    }

    for(let a2 = 0;a2<inputArray2.length;a2++){
      inputArray2[a2] = Math.floor((Math.random())*10000)
      var target2 = inputArray2[inputArray2.length-1]
    }

    for(let a3 = 0;a3<inputArray3.length;a3++){
      inputArray3[a3] = Math.floor((Math.random())*10000)
      var target3 = 20000
    }

    let output1 = search(inputArray1,target1)
    let output2 = search(inputArray2,target2)
    let output3 = search(inputArray3,target3)

    var object1 = {
      "input":inputArray1,
      "target":target1,
      "output":output1
    }
    var object2 = {
      "input":inputArray2,
      "target":target2,
      "output":output2
    }
    var object3 = {
      "input":inputArray3,
      "target":target3,
      "output":output3
    }

    dataset.push(object)
  }
  dataset.push(object1)
  dataset.push(object2)
  dataset.push(object3)
  return dataset
}

module.exports = generate

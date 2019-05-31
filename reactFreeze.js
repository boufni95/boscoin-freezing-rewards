'use strict';

var freezeTot = "loading"

document.querySelector('#accounts').addEventListener("input",function(e){
    if(freezeTot == "loading"){
        document.querySelector('#gain').innerHTML = isNaN(e.target.value)? "insert a number":"loading"
    }
    if(!isNaN(freezeTot)){
        document.querySelector('#gain').innerHTML = isNaN(e.target.value)? "insert a number": (440640 * e.target.value*10000)/freezeTot
    }
    
})
fetcherFreeze()
function fetcherFreeze(){
  //fetch('https://us-central1-bosexpback.cloudfunctions.net/Retrive')
  fetch('https://boscoin.io/data/frozen-accounts')
  .then((response) => {
    return response.text();
    
  })
  .then((resString) => {
    var a = resString.split(",")
    var v = a[6]
    var vf = v.split(".")
    freezeTot = vf[0]
    console.log(freezeTot)
  });
}

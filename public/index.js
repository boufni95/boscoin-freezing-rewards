var nextRewards
var freezeTot = "loading"
var months

window.addEventListener('load', (event) => {
    'use strict';




document.querySelector('#accounts').addEventListener("input",function(e){
    if(freezeTot == "loading"){
        document.querySelector('#gain').innerHTML = isNaN(e.target.value)? "insert a number":"loading"
    }
    if(!isNaN(freezeTot)){
        document.querySelector('#gain').innerHTML = isNaN(e.target.value)? "insert a number": "Monthly reward : "+Math.round((440640 * e.target.value*10000*30)/freezeTot)+" BOS"
    }
    
})
fetcherFreeze()
nextRewards = [
  new Date("8-April-2019"),
  new Date("6-May-2019"),
  new Date("3-June-2019"),
  new Date("1-July-2019"),
  new Date("29-July-2019"),
  new Date("26-August-2019"),
  new Date("23-September-2019"),
  new Date("21-October-2019"),
  new Date("18-November-2019"),
  new Date("7-December-2019"),
]
months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

});






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
    document.querySelector("#n-frozen").innerHTML = new Intl.NumberFormat("fr-FR",{ style: 'currency', currency: 'BOS' }).format(vf[0])
    document.querySelector("#n-account").innerHTML = new Intl.NumberFormat("fr-FR").format(a[5])
    for(var i=0; i<nextRewards.length;i++){
      var b = Date.now()
      if(b<nextRewards[i]){
        document.querySelector("#next-r").innerHTML = nextRewards[i].getDate()+"-"+months[nextRewards[i].getMonth()]+"-"+nextRewards[i].getFullYear()
        break
      }
    }
    console.log(resString)
    document.querySelector("#daily").innerHTML = ((440640 * 10000)/freezeTot).toFixed(2)
  });
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
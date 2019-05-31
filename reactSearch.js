'use strict';


document.getElementById("search-block").addEventListener("click",()=>{
  var bar = document.getElementById("search-bar").value
  var prefix = "api/v1/blocks/"
  fetcher(prefix+bar)
})
document.getElementById("search-tx").addEventListener("click",()=>{
  var bar = document.getElementById("search-bar").value
  var prefix = "api/v1/transactions/"
  fetcher(prefix+bar)
})
document.getElementById("search-account").addEventListener("click",()=>{
  var bar = document.getElementById("search-bar").value
  var prefix = "api/v1/accounts/"
  fetcher(prefix+bar)
})
function fetcher(s){
  fetch('https://mainnet.blockchainos.org/'+s)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
    document.querySelector('#react-search').innerHTML = JSON.stringify(myJson)
  });
}

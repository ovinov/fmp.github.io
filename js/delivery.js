import { sendEmail } from 'functions.js'
var data=[]
function reload(){
 for (let i = 0; i < localStorage.length; i++) {
data.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
  }}
reload()
  function cost(){return data.reduce(function(a,b){
    return a + b.price*b.count;
  },0)}
function quantity(){return data.reduce(function(a,b){
  return a + b.count;
},0)}
  document.getElementById("total").innerHTML =`Вы выбрали ${quantity()} товара на сумму ${cost()} `


sendEmail()

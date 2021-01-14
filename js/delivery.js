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

  export function sendEmail(){Email.send({
     secureToken:"6c9f59d7-27fd-46a9-854b-88331c7f3667",
      Host : "smtp.gmail.com",
      Username : "fmpshop.mos@gmail.com",
      Password : "Viva0000",
      To : 'fmpshop.mos@gmail.com',
      From : "fmpshop.mos@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  })}

sendEmail()

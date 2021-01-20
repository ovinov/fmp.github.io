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
  var now = new Date();
  function makeOrder(clother){
  return  `
  Продукт: ${clother.name}
  Количество: ${clother.count}
  Размер: ${clother.size}
  Цена: ${clother.price}
  Цвет: ${clother.color}
  `  }

  function contactInfo(){
  var form = document.querySelectorAll('input')
  return `
  ФИО ${form[0].value}
  ПОЧТА ${form[1].value}
  ТЕЛЕФОН  ${form[2].value}
  ГОРОД  ${form[3].value}
  УЛИЦА  ${form[4].value}
  ДОМ  ${form[5].value}
  ПОДЪЕЗД ${form[6].value}
  КВАРТИРА  ${form[7].value}
  ИНДЕКС  ${form[8].value}
    `
  }

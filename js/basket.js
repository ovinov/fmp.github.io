var data=[]
function reload(){
 for (let i = 0; i < localStorage.length; i++) {
data.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
  }}
  reload()
  var clotherpic
function clotherTemplate(clother) {
  return `
      <div class="card" id='${clother.picture}'>
        <div class="card_image"  alt=""><img class="clotherImg"src="${clother.picture}" alt="lorem"></div>
  </style>
        <div class="card_product">
          <p class="card_name">${clother.name}</p>
      <p class="price">${clother.price} руб.</p>
      <div class="button-wrapper">
        <button class="add plus btns"type="button" name="button" data-direction="minus" onclick="clotherchec('${clother.picture}')">-</button>
      <div class="numOfCloth">
    <input type="text" value="${clother.count}" class="counter__value">
      </div>
        <button class="add minus btns"type="button" name="button" data-direction="plus" onclick="clotherchec('${clother.picture}')">+</button>
      </div>
      <h5 class="sostav" onclick="del('${clother.picture}')">Удалить</h5>
        </div>
          </div>
      </div>
  `
}

function cost(){return data.reduce(function(a,b){
  return a + b.price*b.count;
},0)}

document.getElementById("cost").innerHTML =`ИТОГ: ${cost()} `

function clotherchec(clother){
  clotherpic=clother
}
function changeCount(){
  const btns = document.querySelectorAll('.btns');
  btns.forEach(btn => {
      btn.addEventListener('click', function () {
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.counter__value');
        const currentValue = +inp.value;
        let newValue;
        if (direction === 'plus') {
          newValue = currentValue+ 1;
        } else {
         newValue = currentValue - 1;
        }
        inp.value =newValue;
        var oldDate = JSON.parse(localStorage.getItem(JSON.stringify(clotherpic)));
        oldDate.count=newValue

        if(oldDate.count===0){
          del(clotherpic)
        }else {
        localStorage.setItem(JSON.stringify(clotherpic), JSON.stringify(oldDate))}
        data=[]
          reload()
        document.getElementById("cost").innerHTML =`ИТОГ: ${cost()} `
      })
    })

  }



  function del(deliting)
  {
    document.getElementById(deliting).remove()
   localStorage.removeItem(JSON.stringify(deliting))
   data= data.filter(dat => dat.picture!==deliting)
   document.getElementById("cost").innerHTML =`ИТОГ ${cost()} `
   }

document.getElementById("cards-wrapper").innerHTML = `
  ${data.map(clotherTemplate).join("")}
`;
changeCount()

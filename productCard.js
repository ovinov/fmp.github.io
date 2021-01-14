
const clotherData = [
{
  name:"Толстовка свободного кроя с нашивкой",
  price:1400,
  color:["черный","красный","синий"],
  sizes:["xs","s","l","xl"],
  picture:"1.jpg",
  type:"hoo1dy",
  articule:"1"
},
  {
  name:"Толстовка свобоsй",
  price:1840,
  color:["черный","красный","синий"],
  sizes:["xs","s", "m","l", "xl"],
  picture:"https://sun9-76.userapi.com/impf/GMFYWzc18F8YIL5cbBpZvnobciRH2G_YSSEmiQ/A9CzVvxU00U.jpg?size=720x720&quality=96&proxy=1&sign=2df12ef4d576c8743a89fe823aacf26e",
    type:"hoo3dy",
    articule:"2"
},
{
  name:"Толстовка свободного кроя с нашивкой",
  price:1400,
  color:["черный","красный"],
  sizes:["xs","s", "m","l", "xl"],
  picture:"2.jpg",
  type:"hoody"
},
  {
  name:"Толстовка свободного кроя с нашивкой",
  price:1200,
  color:["черный","красный","синий"],
  sizes:["xs","s", "m","l", "xl"],
  picture:"3.jpg",
  type:"hoody"

}
];


function size(sizes) {
  return `

${sizes.map(size => `<option value="${size}">${size}</option>`).join("")}

`;
}
function clotherTemplate(clother) {

  return `
      <div class="card">
        <div class="card_image"  alt=""><img class="clotherImg"src="${clother.picture}" alt="lorem"></div>
  </style>
        <div class="card_product">
          <p class="card_name">${clother.name}</p>
      <p class="price">${clother.price} руб.</p>
      <div class="wrapperselector">
    <select class="select-css no" id="${clother.name + clother.color}" > ${size(clother.color)}</select>
        <select class="select-css no"  id="${clother.name + clother.sizes}"> ${size(clother.sizes)} </select>
        </div>
        <button class="add"type="button" name="button" onclick="addInbasket('${clother.name}',${clother.price},'${clother.color}','${clother.sizes}','${clother.picture}')">ДОБАВИТЬ</button>
                  <h5 class="sostav">Состав и уход за изделием</h5>
          </div>
      </div>
  `;
}

document.getElementById("cards-wrapper").innerHTML = `
  ${clotherData.map(clotherTemplate).join("")}
`;
function addInbasket(clotherName,clotherPrice,clotherColor,clotherSize,clotherPicture){
var color = document.getElementById(clotherName + clotherColor).value;
var size = document.getElementById(clotherName + clotherSize).value;
if((clotherPicture) === JSON.parse(localStorage.key(clotherPicture)))
{
var oldDate = JSON.parse(localStorage.getItem(JSON.stringify(clotherPicture)));
oldDate.count++
console.log(oldDate.count)
 localStorage.setItem(JSON.stringify(clotherPicture), JSON.stringify(oldDate))} else {
   localStorage.setItem(JSON.stringify(clotherPicture), JSON.stringify({name:clotherName, price:clotherPrice, color:color, size:size, picture:clotherPicture, count:1}))
 }


}

function filtred(type){
var filt =clotherData.filter(clother => clother.type === type)
for(var i=0;i<filt.length;i++){
  document.getElementById("cards-wrapper").innerHTML = `
    ${filt.map(clotherTemplate).join("")}
  `;
}}

//Detail - HW 4  
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');
// Update the header text
const headerElement = document.querySelector('#detail-header-title');
headerElement.innerText =  rollType + " cinnamon roll"
// Update the image
const rollImage = document.querySelector('#detail-image');
rollImage.src = 'https://github.com/angelaoh01/pui-hw/blob/main/assets/products/' + rolls[rollType].imageFile + "?raw=true";
const rollPrice = document.querySelector('#detail-price');
rollPrice.innerText = "$" + rolls[rollType].basePrice;
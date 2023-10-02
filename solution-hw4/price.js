// create list of glazing options
// create list of pack size options

let glazingOptions = [
    {
        glazing: 'Keep original',
        price: 0,
    },
    {
        glazing: 'Sugar milk',
        price: 0,
    },
    {
        glazing: 'Vanilla milk',
        price: 0.5,
    },
    {
        glazing: 'Double chocolate',
        price: 1.5,
    }
  ];

  let packSizeOptions = [
    {
        size : 1,
        pack: 1, //integer? string?
    },
    {
        size: 3,
        pack: 3,
    },
    {
        size: 6,
        pack: 5,
    },
    {
        size: 12,
        pack: 10,
    },
  ];

  //find the glazing and pack size option the user picks
  //based on those two choices, recompute the price
  //change the price on html?
  const queryStringPrice = window.location.search;
  const paramsPrice = new URLSearchParams(queryStringPrice);
  const rollTypePrice = paramsPrice.get('roll');

  function glazingChange(element) {
    // get value of selected glazing option
    const priceChange = element.value; //selected glazing option value
    let basePrice = rolls[rollTypePrice].basePrice;
    let currentPrice = document.querySelector('#detail-price'); //get the total
    let priceIndex = parseInt(priceChange); //turn into int
    let glazingChoice = glazingOptions[priceIndex].price; //get the price addition
    let currentPackSize = parseInt(document.querySelector('#size').value);
    let packSizeMultiple = packSizeOptions[currentPackSize].pack;
    let glazingChange = (basePrice + glazingChoice)*packSizeMultiple;
    currentPrice.innerText = "$" + Math.round(100*glazingChange)/100;
  }

  function packChange(element){
    // get value of selected glazing option
    const priceChange = element.value; //selected glazing option value
    let basePrice = rolls[rollTypePrice].basePrice;
    let priceIndex = parseInt(priceChange); //turn into int
    let currentPrice = document.querySelector('#detail-price'); //get the total
    let packChoice = packSizeOptions[priceIndex].pack; //get the price addition
    let glazingChoice = parseInt(document.querySelector('#glazing').value);
    let glazingChoiceInt = glazingOptions[glazingChoice].price;
    let packChange = (basePrice + glazingChoiceInt)*packChoice;
    currentPrice.innerText = "$" + Math.round(100*packChange)/100;
  }

//Detail - HW 4  
const cart = [];
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');
console.log(rolls.Apple)
// Update the header text
const headerElement = document.querySelector('#detail-header-title');
console.log(headerElement);
headerElement.innerText =  rollType + " cinnamon roll"
// Update the image
const rollImage = document.querySelector('#detail-image');
rollImage.src = 'https://github.com/angelaoh01/pui-hw/blob/main/assets/products/' + rolls[rollType].imageFile + "?raw=true";
console.log(rollImage.src)
const rollPrice = document.querySelector('#detail-price');
rollPrice.innerText = "$" + rolls[rollType].basePrice;

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        console.log(this.type)
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}


function addToCart(element){
    let glazingChoice = parseInt(document.querySelector('#glazing').value);
    let glazing = glazingOptions[glazingChoice].glazing;
    let packSizeChoice = parseInt(document.querySelector('#size').value);
    let packSizeMultiple = packSizeOptions[packSizeChoice].size;
    let myRoll = new Roll(rollType, glazing, packSizeMultiple, rolls[rollType].basePrice);
    cart.push(myRoll);
    console.log(cart)
}

  
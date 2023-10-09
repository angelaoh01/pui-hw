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

const cart = [];
let totalPrice = 0;

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function addToCart(element){
    let glazingChoice = parseInt(document.querySelector('#glazing').value);
    let glazing = glazingOptions[glazingChoice].glazing;
    let glazingPrice = glazingOptions[glazingChoice].price;
    let packSizeChoice = parseInt(document.querySelector('#size').value);
    let packSizeMultiple = packSizeOptions[packSizeChoice].size;
    let packSize = packSizeOptions[packSizeChoice].pack;
    let myRoll = new Roll(rollType, glazing, packSizeMultiple, Math.round(100*(rolls[rollType].basePrice+glazingPrice)*packSize)/100);
    cart.push(myRoll);
    total = total + Math.round(100*(rolls[rollType].basePrice+glazingPrice)*packSize)/100;
    return cart;
}

let itemOne = new Roll(Object.keys(rolls)[0], glazingOptions[1].glazing, packSizeOptions[0].size, Math.round(100*(rolls.Original.basePrice+glazingOptions[1].price)*packSizeOptions[0].pack)/100);
let itemTwo = new Roll(Object.keys(rolls)[3], glazingOptions[2].glazing, packSizeOptions[3].size, Math.round(100*(rolls.Walnut.basePrice+glazingOptions[2].price)*packSizeOptions[3].pack)/100);
let itemThree = new Roll(Object.keys(rolls)[2], glazingOptions[1].glazing, packSizeOptions[1].size, Math.round(100*(rolls.Raisin.basePrice+glazingOptions[1].price)*packSizeOptions[1].pack)/100);
let itemFour = new Roll(Object.keys(rolls)[1], glazingOptions[0].glazing, packSizeOptions[1].size, Math.round(100*(rolls.Apple.basePrice+glazingOptions[0].price)*packSizeOptions[1].pack)/100);
cart.push(itemOne);
cart.push(itemTwo);
cart.push(itemThree);
cart.push(itemFour);

function addRoll(roll){
    const template = document.querySelector('#cart-template');
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('.cart-items');
    const cartPageElement = document.querySelector('#cart-page');
    cartPageElement.prepend(roll.element);
    updateElement(roll);
}

function updateElement(roll){
    const cartImageElement = roll.element.querySelector('#cart-roll-image');
    const cartDescriptionElement = roll.element.querySelector('#cart-type');
    const cartGlazingElement = roll.element.querySelector('#cart-glazing');
    const cartPackElement = roll.element.querySelector('#cart-pack')
    const cartPriceElement = roll.element.querySelector('.cart-price');
    const cartTotalPrice = document.querySelector('#checkout-price');

    // copy our notecard content over to the corresponding HTML elements
    cartImageElement.src = 'https://github.com/angelaoh01/pui-hw/blob/main/assets/products/' + rolls[roll.type].imageFile + "?raw=true";
    cartDescriptionElement.innerText = roll.type + " Cinnamon Roll";
    cartGlazingElement.innerText = roll.glazing;
    cartPackElement.innerText = "Pack Size: " + roll.size;
    cartPriceElement.innerText = "$ " + roll.basePrice;
    totalPrice = totalPrice + roll.basePrice;
    cartTotalPrice.innerText = "$ " + totalPrice;
}
addRoll(itemOne);
addRoll(itemTwo);
addRoll(itemThree);
addRoll(itemFour);

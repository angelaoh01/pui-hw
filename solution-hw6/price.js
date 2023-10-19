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

const cart = new Set();
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
    cart.add(myRoll);
    let cartToArray = Array.from(cart);
    let updatedCart = JSON.stringify(cartToArray);
    localStorage.setItem("updatedCart", updatedCart);
    console.log(updatedCart);
    return cart;
}

    

//let itemOne = new Roll(Object.keys(rolls)[0], glazingOptions[1].glazing, packSizeOptions[0].size, Math.round(100*(rolls.Original.basePrice+glazingOptions[1].price)*packSizeOptions[0].pack)/100);
//let itemTwo = new Roll(Object.keys(rolls)[3], glazingOptions[2].glazing, packSizeOptions[3].size, Math.round(100*(rolls.Walnut.basePrice+glazingOptions[2].price)*packSizeOptions[3].pack)/100);
//let itemThree = new Roll(Object.keys(rolls)[2], glazingOptions[1].glazing, packSizeOptions[1].size, Math.round(100*(rolls.Raisin.basePrice+glazingOptions[1].price)*packSizeOptions[1].pack)/100);
//let itemFour = new Roll(Object.keys(rolls)[1], glazingOptions[0].glazing, packSizeOptions[1].size, Math.round(100*(rolls.Apple.basePrice+glazingOptions[0].price)*packSizeOptions[1].pack)/100);
//cart.add(itemOne);
//cart.add(itemTwo);
//cart.add(itemThree);
//cart.add(itemFour);




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
        galzing: 'Double chocolate',
        price: 1.5,
    }
  ];

  let packSizeOptions = [
    {
        pack: 1, //integer? string?
    },
    {
        pack: 3,
    },
    {
        pack: 5,
    },
    {
        pack: 10,
    },
  ];

  //find the glazing and pack size option the user picks
  //based on those two choices, recompute the price
  //change the price on html?

  function glazingChange(element) {
    // get value of selected glazing option
    const priceChange = element.value; //selected glazing option value
    let basePrice = 2.49;
    let currentPrice = document.querySelector('#detail-price'); //get the total
    let priceIndex = parseInt(priceChange); //turn into int
    let glazingChoice = glazingOptions[priceIndex].price; //get the price addition
    let currentPackSize = parseInt(document.querySelector('#size').value);
    let packSizeMultiple = packSizeOptions[currentPackSize].pack;
    let glazingChange = (basePrice + glazingChoice)*packSizeMultiple;
    currentPrice.innerText = Math.round(100*glazingChange)/100;


    
  // add your code to do update the price ...
  }

  function packChange(element){
    // get value of selected glazing option
    const priceChange = element.value; //selected glazing option value
    let basePrice = 2.49;
    let currentPrice = document.querySelector('#detail-price'); //get the total
    let priceIndex = parseInt(priceChange); //turn into int
    let packChoice = packSizeOptions[priceIndex].pack; //get the price addition
    let glazingChoice = parseInt(document.querySelector('#glazing').value);
    let glazingChoiceInt = glazingOptions[glazingChoice].price
    let packChange = (basePrice + glazingChoiceInt)*packChoice;
    currentPrice.innerText = Math.round(100*packChange)/100;
  }
    
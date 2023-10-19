//async function getData() {
    //let response = await fetch('/solution-hw6/detail.html' , {
        //method: 'POST',
        //headers: {
       // 'Content-Type' : 'application/json' ,
       // },
       // body: JSON.stringify(data),
       // });
    //let result = await response.json();
   // }   

function addRoll(roll){
    let newCart = JSON.parse(localStorage.getItem("updatedCart"));
    const template = document.querySelector('#cart-template');
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('.cart-items');
    const cartPageElement = document.querySelector('#cart-page');
    cartPageElement.prepend(roll.element);

    const removeItem = document.querySelector(".cart-remove");
    removeItem.addEventListener('click', () =>{
        cart.delete(roll);
        let cartToArray = Array.from(cart);
        let updatedCart = JSON.stringify(cartToArray);
        localStorage.setItem("updatedCart", updatedCart);
        let newCart = JSON.parse(localStorage.getItem("updatedCart"));
        console.log(newCart);
        const parentImageRoll = removeItem.parentElement;
        const parentRoll = parentImageRoll.parentElement;
        parentRoll.remove();
        const cartTotalPrice = document.querySelector('#checkout-price');
        totalPrice = totalPrice - roll.basePrice;
        cartTotalPrice.innerText = "$ " + Math.round(100*totalPrice)/100;
    });
    updateElement(roll);
}

function updateElement(roll){
    const cartImageElement = roll.element.querySelector('#cart-roll-image');
    const cartDescriptionElement = roll.element.querySelector('#cart-type');
    const cartGlazingElement = roll.element.querySelector('#cart-glazing');
    const cartPackElement = roll.element.querySelector('#cart-pack')
    const cartPriceElement = roll.element.querySelector('.cart-price');
    const cartTotalPrice = document.querySelector('#checkout-price');

    cartImageElement.src = 'https://github.com/angelaoh01/pui-hw/blob/main/assets/products/' + rolls[roll.type].imageFile + "?raw=true";
    cartDescriptionElement.innerText = roll.type + " Cinnamon Roll";
    cartGlazingElement.innerText = roll.glazing;
    cartPriceElement.innerText = "$ " + Math.round(100*roll.basePrice)/100;
    cartPackElement.innerText = "Pack Size: " + roll.size;
    totalPrice = totalPrice + roll.basePrice;
    cartTotalPrice.innerText = "$ " + Math.round(100*totalPrice)/100;
}

function updateCart(){
    let newCart = JSON.parse(localStorage.getItem("updatedCart"));
    if (newCart.length > 0){
        for (const roll of newCart){
            addRoll(roll);
        }
    }
}

updateCart();

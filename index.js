const Cart = require('./Cart');
const Knapsack = require('./Knapsack');

const items  = require('./input.json');

const maxAmount = 100;

try {
    //const cart = new Cart(maxAmount, items).getBasket();
    const knapsack = new Knapsack(maxAmount, items).getBasket(); 
    
    //console.log('Sol 1===>', cart);
    
    console.log('Sol 2===>', knapsack);
}
catch(err) {
    console.log('===>', err);
}
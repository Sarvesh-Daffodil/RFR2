/**
 * @class Knapsack
 * @classdesc 0-1 Knapsack Algo - Greedy Approach
 */
class Knapsack {

    constructor(maxAmount, items) {
        this._maxAmount = maxAmount;
        this._length = items.length;
        
        this._items = [];    
        this._basket = [];
        this.setItems(items);
    };

    /**
     * Set Items
     * @param {Array} items 
     */
    setItems(items) {
        //Added Key - flag = true;
        this._items = items.map((item) => {
            return {
                ...item,
                flag: true
            };
        }); 
        
        //Sort items a/t amount
        this._items = this._items.sort((a, b) => {
            return b.amount - a.amount 
        });
    };

    /**
     * Get Items
     */
    getItems() {
        return this._items;
    };

    /**
     * Knapsack Algo
     */
    knapsack() {
        for (let i = 0; i < this._length; i++) {
            
            // Reset currAmount and deliveryWindow
            let currAmount = 0, deliveryWindow = [];

            for(let j = 0; j < this._length; j++) {
                // Check condition
                if(this._items[j].flag && this._items[j].amount + currAmount <= this._maxAmount) {
                    // Marked done
                    this._items[j].flag = false;
                    // Revised currAmount and deliveryWindow
                    currAmount += this._items[j].amount;
                    deliveryWindow.push(this._items[j]);
                }
            }

            if(deliveryWindow.length) {
                this._basket.push(deliveryWindow);
            }
        };
    };

    /**
     * Get Basket
     */
    getBasket() {
        this.knapsack();
        return this._basket;
    };
}

/**
 * @type {Knapsack}
 */
module.exports = Knapsack;



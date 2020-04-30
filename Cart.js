'use strict';

/**
 * @class Cart
 * @classdesc To implemet basket
 */
class Cart {

    constructor(deliveryWindowSize, items) {
        this._items = [];
        this._basket = [];
        this._deliveryWindow = [];
        this._deliveryWindowSize = deliveryWindowSize;   
        
        this.setItems(items);
    }

    /**
     * Set items
     * @param {Array} items 
     */
    setItems(items) {
        //Sort items a/t amount
        this._items = items.sort((a, b) => {
            return b.amount - a.amount 
        });
    }

    /**
     * Get items
     */
    getItems() {
        return this._items;
    }

    /**
     * Get basket
     */
    getBasket() {
        let currDeliveryWindowSize = 0;

        this._items.map((item) => { 
        
            if(item.amount + currDeliveryWindowSize <= this._deliveryWindowSize) {
                
                //Push in delivery window array
                this._deliveryWindow.push(item);
                currDeliveryWindowSize += item.amount;
            }
            else {
                //Push in basket array
                this._basket.push(this._deliveryWindow);
    
                //Reset
                this._deliveryWindow = [];
                this._deliveryWindowSize = 0;

                //Push in delivery window array
                this._deliveryWindow.push(item);
                currDeliveryWindowSize = item.amount;
            }
        });
        
        //Push in basket array
        this._basket.push(this._deliveryWindow);

        return this._basket;
    }
};

/**
 * @type {Cart}
 */
module.exports = Cart;


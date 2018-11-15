'use strict;'
//Include crypto to generate the item id
var crypto = require('crypto');

module.exports = function() {
    return {
        itemList : [],
        /*
         * Save the item inside the "db".
         */
        save(item) {
            item.id = crypto.randomBytes(20).toString('hex'); // fast enough for our purpose
            this.itemList.push(item);
            return 1;            
        },
        /*
         * Retrieve an item with a given id or return all the items if the id is undefined.
         */
        find(id) {
            if(id) {
                return this.itemList.find(element => {
                        return element.id === id;
                    });    
            }else {
                return this.itemList;
            }
        },
        /*
         * Delete an item with the given id.
         */
        remove(id) {
            var found = 0;
            this.itemList = this.itemList.filter(element => {
                    if(element.id === id) {
                        found = 1;
                    }else {
                        return element.id !== id;
                    }
                });
            return found;            
        },
        /*
         * Update an item with the given id
         */
        update(id, item) {
            var itemIndex = this.itemList.findIndex(element => {
                return element.id === id;
            });
            if(itemIndex !== -1) {
                this.itemList[itemIndex].title = item.title;
                this.itemList[itemIndex].description = item.description;
                this.itemList[itemIndex].price = item.price;
                this.itemList[itemIndex].photos = item.photos;
                return 1;
            }else {
                return 0;
            }
        }        
    }
};
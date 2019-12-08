'use strict';

class Storage {
    constructor(arr) {
        this.items = arr;
    }
    getItems() {
        return this.items
    }

    addItem(item) {
        this.items.push(item);
        // console.log(item);
    }

    removeItem(item) {

        //first method
        // this.items = this.items.filter(el => el !== item);

        //second method
        // const itemIndex = this.items.indexOf(item);
        // this.items.splice(itemIndex, 1);

        //third method
        // let newArr = [];
        // for (let elem of this.items) {
        //     if (elem !== item) {
        //         newArr.push(elem);
        //     }
        // }
        // this.items = newArr

    }
}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид"]
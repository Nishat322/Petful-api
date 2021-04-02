const Queue = require("../queue/Queue");
const store = require("../store");

// Set up initial data.
// --------------------

const cats = new Queue();

store.cats.forEach((cat) => cats.enqueue(cat));

// --------------------

module.exports = {
    getCat() {
        return cats.show();
    },

    dequeue() {
        cats.dequeue();
        return cats;
    },
}
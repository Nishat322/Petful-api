const Queue = require("../queue/Queue");
const store = require("../store");

// Set up initial data.
// --------------------

const dogs = new Queue();

store.dogs.forEach((dog) => dogs.enqueue(dog));

// --------------------

module.exports = {
    getDog() {
        return dogs.show();
    },

    dequeue() {
        dogs.dequeue();
        return dogs;
    },
}
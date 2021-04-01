const Queue = require('../queue/Queue')
const store = require('../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    let newPets = {
      cat: pets.cats.all(),
      dog: pets.dogs.all(),
    };
    return newPets;
  },

  dequeue(type) {
    let dequeuePet;
    // Remove a pet from the queue.
    if (type === "cat") {
      dequeuePet = pets.cats.dequeue();
      pets.cats.enqueue(dequeuePet);
    } else if (type === "dog") {
      dequeuePet = pets.dogs.dequeue();
      pets.dogs.enqueue(dequeuePet);
    } else {
      return;
    }
  },
}

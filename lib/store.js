// create a store with initial values
let store = {
  center: [40.01, -105.25], // Boulder
  selectedPosition: null, // keep track of the position selected by the user
  fibers: [] //array to store all the data of the fiber locations
}

// make it a global variable (easy for debugging in the developer's console)
global.store = store

// export it
export default store

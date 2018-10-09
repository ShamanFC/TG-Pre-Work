const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below

function printGrocery(element){
  console.log('I want to eat a ' + element);
};

fruits.forEach(printGrocery);

// passing the function printGrocery as a parameter for fruits.forEach console logged each fruit at the end of the string.

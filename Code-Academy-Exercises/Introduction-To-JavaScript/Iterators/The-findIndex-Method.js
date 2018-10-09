
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];


const foundAnimal = animals.findIndex(animal =>{
  return animal == 'elephant';
});

const startsWithS = animals.findIndex(animal =>{
  return animal[0] == 's';
})


// you can use .findIndex to find the index value of an array entry that meets set parameters.

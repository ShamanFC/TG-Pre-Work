const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);


// too many variables in the global scope can cause pollution and messy code
// redeclaring variables in multiple namespaces also causes messy and confusing code
// scope polution can be solved by declaring variables only where they are used.

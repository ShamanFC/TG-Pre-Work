const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () => {
	return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};

console.log(callMyNightSky());

// global variables are defined outside of blocks, in the open .js document

// you can access global variables anywhere in your code, including inside of blocks

// scope makes a lot of sense to me logically.

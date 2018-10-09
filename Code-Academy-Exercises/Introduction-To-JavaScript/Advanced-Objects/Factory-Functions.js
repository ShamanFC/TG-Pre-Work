const robotFactory = (model, mobile) => {
  return {
    model : model,
		mobile: mobile,
		beep () {
      console.log('Beep Boop');
    }
	};
};

const tinCan = robotFactory('P-500', true);
tinCan.beep();

// you can create a basic version of an object then duplicate it with modifications instead of re-writing the whole object.

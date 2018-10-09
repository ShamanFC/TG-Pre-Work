const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robot;

functionality.beep();

// you can take specific properties and assign them  to a variable for quick refrence.
// by declaring a new variable, wrapping the property name in curly braces, and making it equal to the object name you can save yourself some keystrokes.

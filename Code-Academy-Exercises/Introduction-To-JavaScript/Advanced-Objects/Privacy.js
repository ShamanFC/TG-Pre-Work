const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';
robot.recharge();

// since javascript has no built in privacy features, developers use a specific nomenclature to signal what variables should be left alone

// an example of this is placing _ before your variable names.

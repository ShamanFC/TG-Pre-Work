const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic'){
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }

  console.log(lightWaves);
};

logVisibleLightWaves();

// good scoping is placing variables logically only where they will be used, and keeping the global namespace cleared and reserved.

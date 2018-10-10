const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint');
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  }
  catch(error) {
    console.log(error);
  }
};

// again again again recreated the boilerplate for an async GET request this time.

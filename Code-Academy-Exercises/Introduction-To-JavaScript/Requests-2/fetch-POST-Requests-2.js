fetch('https://api-to-call.com/endpoint', {
    method: 'POST',
    body: JSON.stringify({ id: '200' })
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => console.log(networkError.message))
  .then(jsonResponse => {
    return jsonResponse;
  });

// again rewrote the boilerplate from the diagram, fetch() post

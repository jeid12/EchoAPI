const url = '/echo'; // Assuming the endpoint is relative to your domain

const data = {
  message: 'ping'
};

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
};

fetch(url, options)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Log the response data
    // Handle the response data here
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle errors here
  });

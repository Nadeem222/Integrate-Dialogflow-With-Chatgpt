const accessToken = 'IGQVJVZA1l0aDUta3I1cGpJSTk3TmZAkRGp2VlZAwWENWelNQMF9BTmlFUmJFVEVNeGlwMWFSUERPSUs3S2hOazFmbGdjR2pNSW5Fb0dUakpJQjVMLU84cnFualZAmZAE5KUkJKdUszUG5ydnF4TUYzMDlfMQZDZD'; // replace with your actual access token

// define the API endpoint you want to access
const apiUrl = 'https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url&access_token=' + accessToken;

// make an HTTP GET request to the API endpoint using the Fetch API
fetch(apiUrl)
  .then(response => response.json()) // parse the JSON response
  .then(data => {
    // process the response data
    console.log(data); // for example, log the data to the console
  })
  .catch(error => {
    // handle any errors that occur during the request
    console.error('Error fetching data:', error);
  });

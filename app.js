const accessToken = 'IGQVJVZA1l0aDUta3I1cGpJSTk3TmZAkRGp2VlZAwWENWelNQMF9BTmlFUmJFVEVNeGlwMWFSUERPSUs3S2hOazFmbGdjR2pNSW5Fb0dUakpJQjVMLU84cnFualZAmZAE5KUkJKdUszUG5ydnF4TUYzMDlfMQZDZD'; // replace with your actual access token
const apiUrl = 'https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url&access_token=' + accessToken;

// Select the HTML element where you want to display the data
const dataContainer = document.getElementById('data-container');

// Make an HTTP GET request to the API endpoint using the Fetch API
fetch(apiUrl)
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    // Process the response data
    data.data.forEach(item => {
      const { caption, media_type, media_url, thumbnail_url  } = item;
      
      // Create HTML elements to display the data
      const captionElement = document.createElement('p');
      captionElement.textContent = 'Caption: ' + (caption || 'No caption available');
      
      const imageElement = document.createElement('img');
      imageElement.src = media_url;
      // imageElement.src = thumbnail_url;
      imageElement.alt = 'Instagram Image';
      
      // Append the elements to the data container
      dataContainer.appendChild(captionElement);
      dataContainer.appendChild(imageElement);
      
      // Add a line break for better readability
      dataContainer.appendChild(document.createElement('br'));
    });
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error('Error fetching data:', error);
  });


// const accessToken = 'IGQVJVZA1l0aDUta3I1cGpJSTk3TmZAkRGp2VlZAwWENWelNQMF9BTmlFUmJFVEVNeGlwMWFSUERPSUs3S2hOazFmbGdjR2pNSW5Fb0dUakpJQjVMLU84cnFualZAmZAE5KUkJKdUszUG5ydnF4TUYzMDlfMQZDZD'; // replace with your actual access token
// const apiUrl = 'https://graph.instagram.com/me?fields=username&access_token=' + accessToken;

// // Make an HTTP GET request to the API endpoint using the Fetch API
// fetch(apiUrl)
//   .then(response => response.json()) // Parse the JSON response
//   .then(data => {
//     const { username } = data;
//     console.log('Username:', username);
//   })
//   .catch(error => {
//     // Handle any errors that occur during the request
//     console.error('Error fetching data:', error);
//   });

// const accessToken = 'IGQVJVZA1l0aDUta3I1cGpJSTk3TmZAkRGp2VlZAwWENWelNQMF9BTmlFUmJFVEVNeGlwMWFSUERPSUs3S2hOazFmbGdjR2pNSW5Fb0dUakpJQjVMLU84cnFualZAmZAE5KUkJKdUszUG5ydnF4TUYzMDlfMQZDZD'; // replace with your actual access token
// const userId = 'nadeem_hakeem221'; // replace with the user's ID or username

// const apiUrl = `https://graph.instagram.com/${userId}?fields=id,username,profile_picture_url&access_token=${accessToken}`;

// // Make an HTTP GET request to the API endpoint using the Fetch API
// fetch(apiUrl)
//   .then(response => response.json()) // Parse the JSON response
//   .then(data => {
//     const { id, username, profile_picture_url } = data;
//     console.log('User ID:', id);
//     console.log('Username:', username);
//     console.log('Profile Picture URL:', profile_picture_url);
//   })
//   .catch(error => {
//     // Handle any errors that occur during the request
//     console.error('Error fetching user profile:', error);
//   });



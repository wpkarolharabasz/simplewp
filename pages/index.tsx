const Home = () => <h1>Hello, Headless! asd</h1>;
const https = require('https');
let resppp;
https.get('https://karolandcat1.wpengine.com/?rest_route=/wp/v2/posts', (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(data);
    resppp = data;

  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});



export default Home;

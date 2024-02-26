// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// // Define routes
// app.get('/blank', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

// // Catch-all route to serve the React app (home page)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
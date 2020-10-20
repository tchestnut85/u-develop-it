const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Default response for any other request(Not Found) catch all
app.use((req, res) => {
    res.status(404).end();
});

// Listener for PORT
app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}!`);
});
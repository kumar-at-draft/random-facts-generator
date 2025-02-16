const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

// Array of random facts
const facts = [
    "Honey never spoils.",
    "A group of flamingos is called a 'flamboyance.'",
    "Bananas are berries, but strawberries aren't.",
    "Octopuses have three hearts.",
    "Australia is believed to have lost to emus in the Great Emu War of 1932",
    "A jiffy is an actual unit of time: 1/100th of a second.",
    "Cows have best friends and get stressed when they are separated.",
    "The shortest war in history lasted 38 minutes.",
    "The Eiffel Tower can be 15 cm taller during the summer.",
    "A small child could swim through the veins of a blue whale."
];

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Endpoint to get a random fact
app.get('/random-fact', (req, res) => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    res.json({ fact: facts[randomIndex] });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

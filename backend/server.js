const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const chats  = require('./data/data.js');

app.get('/', (req, res) => {
    res.send("API is working properly");
});

app.get('/api/chat', (req, res) => {
    res.send(chats);
});

app.get('/api/chat/:id', (req, res) => {
    const Singlechat = chats.find((c) => c._id === req.params.id);
    res.send(Singlechat);
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('Server started on port',PORT));
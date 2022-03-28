const express = require('express');
const controller = require('./controller');
const app = express();
const PORT = 3000;
const db = require('./db');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./client/dist'));
app.use('/Lobby', express.static('./client/dist'));
app.use('/Library', express.static('./client/dist'));
app.use('/Game', express.static('./client/dist'));

app.post('/add', (req, res) => {
  const card = { ...req.body }
  const cardArray = [card.createdBy, card.dateCreated, card.cardRules, card.points, card.image, card.tags]
  let q = 'INSERT INTO cards (createdBy, dateCreated, cardRules, points, image, tags) values (?, ?, ?, ?, ?, ?)';
  db.query(q, cardArray, (err, result) => {
    if (err) res.sendStatus(500)
    res.sendStatus(201);
  })
});

app.get('/get', (req, res) => {
  let q = 'select * from cards';
  db.query(q, (err, result) => {
    if (err) res.sendStatus(500)
    res.status(200).send(result);
  })
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('elga');

    const numbersCollections = db.collection('numbers');
    const numbersRouter = createRouter(numbersCollections);
    app.use('/api/numbers', numbersRouter);

    const phrasesCollection = db.collection('phrases');
    const phrasesRouter = createRouter(phrasesCollection);
    app.use('/api/phrases', phrasesRouter);

    const imagesCollection = db.collection('images');
    const imagesRouter = createRouter(imagesCollection);
    app.use('/api/images', imagesRouter);

    const scoresCollection = db.collection('scores');
    const scoresRouter = createRouter(scoresCollection);
    app.use('/api/scores', scoresRouter);
  })
  .catch(console.err);

app.listen(9000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});

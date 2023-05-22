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
    const phrasesCollection = db.collection('phrases');
    const imagesCollection = db.collection('images');
    const numbersRouter = createRouter(numbersCollections);
    const phrasesRouter = createRouter(phrasesCollection);
    const imagesRouter = createRouter(imagesCollection);
    app.use('/api/numbers', numbersRouter);
    app.use('/api/phrases', phrasesRouter);
    app.use('/api/images', imagesRouter);
  })
  .catch(console.err);

app.listen(9000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});

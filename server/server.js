const express = require('express');
const path = require("path");
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
    app.get("/images/:img", (req, res) => {
      res.sendFile(path.join(__dirname, `./images/${req.params.img}`));
    });
  
    const scoresCollection = db.collection('scores');
    const scoresRouter = createRouter(scoresCollection);
    app.use('/api/scores', scoresRouter);

    const factsCollection = db.collection('facts');
    const factsRouter = createRouter(factsCollection);
    app.use('/api/facts', factsRouter);
  })
  .catch(console.err);

app.listen(9000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});

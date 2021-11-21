const express = require('express');
// const cors = require('cors');
require('dotenv').config();

// const strangerThingsDataset = require('./data/dataset/stranger-things-characters.json');
// const StrangerThingsRepository = require('./data/repository/StrangerThings');
// const StrangerThingsService = require('./services/StrangerThings');

const app = express();

// const strangerThingsRepository = new StrangerThingsRepository(
//   strangerThingsDataset,
// );
// const strangerThingsService = new StrangerThingsService(
//   strangerThingsRepository,
// );

// app.use(cors());

// // const UPSIDEDOWN_MODE = process.env.UPSIDEDOWN_MODE === 'true';

// const hereIsTheUpsideDown = JSON.parse(process.env.UPSIDEDOWN_MODE);

// app.get('/', (req, res) => {
//   const characters = strangerThingsService.search(
//     req.query,
//     hereIsTheUpsideDown,
//   );

//   res.status(200).json(characters);
// });

// const PORT = process.env.PORT;

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

//

const express = require('express');
const morgan = require('morgan');
const wordsRouter = require('./routes/words');
const rankRouter = require('./routes/rank');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(wordsRouter);
app.use(rankRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

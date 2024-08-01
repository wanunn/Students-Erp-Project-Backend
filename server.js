const express = require('express')
const cors = require('cors');
const db  = require('./db/db');
cont = require('./db/db');

const app = express();
app.use(cors({
 origin: '*',
}));
  app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes/routes.js'));
app.listen(5000, () => {
    console.log('Server is running on port 5000');
})
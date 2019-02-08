const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

dotenv.config(); // passing data from .env file

app.use(cors()); // enabling cors
app.use(bodyParser.urlencoded({ // parse application/x-www-form-urlencoded
    extended: false
}));
app.use(bodyParser.json()); // parse application/json

app.get('/', (req, res) => {
    res.status(200).json({
        code: 200,
        status: 'success',
        message: 'Welcome to the beginning of nothingness'
    });
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
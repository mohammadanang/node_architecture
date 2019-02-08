const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.get('/', (req, res) => {
    res.status(200).json({
        code: 200,
        status: 'success',
        message: 'Welcome to the beginning of nothingness'
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port: ${process.env.PORT}`);
});
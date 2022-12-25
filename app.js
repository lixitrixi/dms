const express = require('express');
const path = require('path');

const PORT = 2345



const app = express();

app.use('/api',
    require('./routes/api')
);

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});

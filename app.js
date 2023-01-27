const express = require('express');

const app = express();
const PORT = 2345;

app.use('/',
    require('./routes/serve')
);
app.use('/api',
    require('./routes/api')
);

app.set('views', './view');
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./client'));

const server = app.listen(PORT, () => {
    console.log("Listening on port " + server.address().port);
});

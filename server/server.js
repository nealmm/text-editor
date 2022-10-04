const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);
app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/favicon.ico'));
});

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));

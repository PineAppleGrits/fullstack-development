const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.get('/', (req, res) => {

});

app.listen(PORT);

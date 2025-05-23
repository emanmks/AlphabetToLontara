const express = require('express');
const app = express();
const port = process.env.PORT || 3456;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Server is running at http://0.0.0.0:${port}`);
});

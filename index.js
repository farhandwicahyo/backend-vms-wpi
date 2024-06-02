require('dotenv').config();
const express = require('express');
const app = express();
const port = 4000;
const routes = require('./src/routes/index');

app.use(express.json());
app.use('/api', routes);

// Tambahkan route untuk root path
app.get('/', (req, res) => {
    res.send('API sudah aktif bossss');
});

app.listen(port, () => {
    console.log(`Connecting on http://localhost:${port}`);
});

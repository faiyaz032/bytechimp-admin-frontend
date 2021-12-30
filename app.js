const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: true }));
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Bytechimp-Admin is alive on PORT:${PORT}`));

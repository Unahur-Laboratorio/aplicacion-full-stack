const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Habilitar CORS
app.use(cors());

app.get('/api', (req, res) => {
    res.json({ message: "Hola desde el backend!" });
});

app.listen(port, () => {
    console.log(`Backend escuchando en http://localhost:${port}`);
});

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/convert', (req, res) => {
  const { celsius } = req.body;
  const fahrenheit = (celsius * 9/5) + 32;
  res.json({ fahrenheit });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

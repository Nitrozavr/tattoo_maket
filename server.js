const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Сообщение о том, что сервер запущен и прослушивает указанный порт 
app.listen(port, () => console.log(`Listening on port ${port}`));

// Маршрут для корневого URL
app.get('/', (req, res) => {
  res.send('Welcome to the Express server');
});

// Создание GET маршрута
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
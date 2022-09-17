import express from 'express';

const app = express();

app.get('/ads', (req, res) => {
  return res.json({
    oi: 'testes',
  });
});

app.listen(3333, () => {});

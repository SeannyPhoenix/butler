import express from 'express';

const app = express();
const PORT = 3456;

app.get('/', (req, res) => {
  res.status(200).send('Hehe, fuckers!');
});

app.listen(PORT, () => {
  console.log(`listening to fuckers on ${PORT}`);
});

import express from 'express';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

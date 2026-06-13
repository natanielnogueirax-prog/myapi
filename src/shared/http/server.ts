import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

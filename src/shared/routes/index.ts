import { AppError } from '../erros/AppError';
import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  throw new Error('Erro acesso negado');
  return response.json({ message: 'Hello World!' });
});

export { routes };

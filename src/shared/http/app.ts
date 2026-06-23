import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import SwaggerUi from 'swagger-ui-express';
import cors from 'cors';
import { routes } from '../routes';
import { AppError } from '../errors/AppError';
import swaggerFile from '../../swagger.json';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/docsapi', SwaggerUi.serve, SwaggerUi.setup(swaggerFile));

app.use(routes);
// middleware de tratamento de erros
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    console.error(error);
    return response.status(500).json({
      status: 'error',
      message: 'Erro Interno Server.',
    });
  },
);

export { app };

import express from 'express';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json()); // prepara a aplicacao para poder receber requisicoes em json
  }

  routes() {
    this.server.use(routes); // podemos chamar no use pois elas sao middlewares
  }
}

export default new App().server;

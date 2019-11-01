import Sequelize from 'sequelize';

import User from '../app/models/User';
import Student from '../app/models/Student';

import databaseConfig from '../config/database';

const models = [User, Student];

class Database {
  constructor() {
    this.init();
  }

  // vai realizar a conexao com o db e carregar os models
  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection)); // vai iterar por todos os models e rodar o init de cada um
  }
}

export default new Database();

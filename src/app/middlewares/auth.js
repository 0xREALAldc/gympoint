import jwt from 'jsonwebtoken';
import { promisify } from 'util'; // transforma uma funcao com callback para uma em que podemos usar o async/await

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' '); // usamos a desestruturacao para pegar apenas o token

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id; // adiciona o id do usuario autenticado na requisicao

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};

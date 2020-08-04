import express, { json } from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

// get: Buscar ou listar as informações
// post: Criar alguma nova informação
// put: Atualizar uma informação 
// delete: Remover uma informação

// Corpo ( Request body ) Dados para criação ou atualização de um registro
// Route params: identificar qual o recurso quer atualizar ou deletar 
// Query params: Usado para paginação, filtros e ordenação

// app.get('/teste', (request, response) => {
//     return response.json( { "tudo certo": "OK" });
// });

app.listen(3333);
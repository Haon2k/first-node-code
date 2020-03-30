const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/*Faz com que o express entenda as informações em json para criação/edição*/
app.use(cors());
app.use(express.json());
app.use(routes);

/**
 *  Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informção no back-end
 * DELETE: Deletar uma informação do back-end 
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação) request.query
 * Route Params: Parâmetros utilizados para identificar recursos    request.params
 * Request Body: Corpo da requisição. Utilizado para criar ou alterar recursos    request.body
 */

app.listen(3333);
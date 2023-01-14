// CommonJS => require
const http = require('http');

// ESmodules => import/export
import http from 'http'; type: "module"

// Aplicações HTTP => APIs

// node src/server.js
// node --watch src/server.js
// http localhost:3333

Rotas:

-   Criar usuários
-   Listagem de usuários
-   Edição de usuários
-   Remoção de usuários

HTTP:

-   Método HTTP
-   URL

Métodos:

-   GET => Buscar um recurso do back end;
-   POST => Criar um recurso do back end;
-   PUT => Atualizar um recurso do back end;
-   PATCH => Atualizar uma informação específica de um recurso do back end;
-   DELETE => Deletar um recurso do back end

GET /users => Buscando usuários do backend;
POST /users => Criar um suário no backend;

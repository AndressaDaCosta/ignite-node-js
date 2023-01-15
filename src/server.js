import http from 'node:http';
import { json } from './middlewares/json.js';
import { routes } from './routes.js';

// Statefull - Stateless

// Cabeçalhos (Requisição/resposta) => Metadados

// const users = [];

const database = new Database();

const server = http.createServer(async (req, res) => {
	const { method, url } = req;
	// console.log(method, url);
	// console.log(req.headers);

	await json(req, res);

	const route = routes.find((route) => {
		return route.method === method && route.path === url;
	});

	if (route) {
		return route.handler(req, res);
	}

	return res.writeHead(404).end();
});

server.listen(3333);

//  https://insomnia.rest/download

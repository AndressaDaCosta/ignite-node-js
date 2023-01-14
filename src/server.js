import http from 'node:http';

// Statefull - Stateless

// Cabeçalhos (Requisição/resposta) => Metadados

const users = [];

const server = http.createServer(async (req, res) => {
	const { method, url } = req;
	// console.log(method, url);
	// console.log(req.headers);

	const buffers = [];

	for await (const chunk of req) {
		buffers.push(chunk);
	}

	try {
		req.body = JSON.parse(Buffer.concat(buffers).toString());
	} catch {
		req.body = null;
	}

	if (method === 'GET' && url === '/users') {
		return res
			.setHeader('Content-type', 'application/json')
			.end(JSON.stringify(users));
	}

	if (method === 'POST' && url === '/users') {
		const { name, email } = req.body;

		users.push({
			id: 1,
			name,
			email
		});
		return res.writeHead(201).end();
	}

	return res.writeHead(404).end();
});

server.listen(3333);

//  https://insomnia.rest/download

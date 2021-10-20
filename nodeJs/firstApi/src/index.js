const http = require('http')

const users = require('./mocks/users')

const server = http.createServer((request, response) => {
  if(request.method === 'GET' && request.url === '/users'){
    response.writeHead(200, {'Content-Type' : 'application/json'})
    response.end(JSON.stringify(users))
  } else {
    response.writeHead(404, {'Content-Type' : 'text/html'})
    response.end(`Cannot ${request.method} in ${request.url}`)
  }
})

server.listen(3000, ()=> console.log('🚀 Server succesfully started at http://localhost:3000'))
const http = require('http') //Importa o módulo http

const server = http.createServer(( request, response )=>{ //Chama o método do http pra criar server, onde recebe uma função, que tem como params 'response' e 'request' 
  response.writeHead(200, {'Content-Type': 'text/html'})  //O primeiro argumento de writeHead, precisa ser o status code, nesse caso é o status code de sucesso. Seguido dos headers, que são passados dentro de um objeto. E o único header fala pro client o que o body vai receber, que no caso é um html. 
  response.end('<h1>The server is working! </h1>') //o método .end, fala o que queremos passar para o nosso body. 
})


server.listen(3000, ()=>//o método .listen, é quem ouve e pega a porta que desejamos hospedar nosso servidor. Deixando ele ON.
  console.log('🚀The server is working in http://localhost:3000 !')
)

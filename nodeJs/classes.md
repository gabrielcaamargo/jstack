# Aula 1
## Como o Node funciona
### Call Stack
 - Pilha de processamento do código
 - Todas funções executadas no código vão pra dentro da call stack


## Single Thread
 - Apenas uma Call Stack, sendo assim, consegue executar apenas uma coisa por vez

## libUv
 - Traz 2 componentes importantíssimos pro Node, que permite que executemos mais de 1 coisa por vez, são eles: ***Thread Pool*** e ***Event Loop***
 
 - Exemplo:

 console.log('Antes');

 db.query(query, function callback(err, data){
   console.log(data)
 });

 console.log('Depois');

A função db.query, é uma função bloqueante, onde caso o node não tomasse nenhuma providência, o código ficaria parado ali, até a função retornar seu devido valor. Aí entra o Thread Pool.

Então o node pega a execução da query, e joga pra dentro do Thred Pool, e lá vai executando a query, enquanto na Call Stack, essa query é retirada, e o código continua rodando a partir da linha que indica o fim da query.

Quando a query terminar sua execução, o node tira ela do Thread Pool, e joga pra dentro da 
***Callback Queue***, e seguindo o código acima, o que vai pra essa callback queue, é a função callback, e é executado lá mesmo. O node "pergunta" constantemente para a callback queue, para saber se a função de lá já terminou de executar, para pegar os dados. Entre a callback queue e a call stack, temos o ***Event Loop***, quando a callback queue responder que tem uma função liberada, a callback queue verifica se a call stack tá liberada, e se estiver, a call stack puxa pra dentro de si, a função. E assim o node executa código assíncrono.


# Aula 2
## HTTP e API's REST

### O que é uma API
 - Acrônimo pra: ***Application Programming Interface***
 - Permite que conectemos várias aplicações em uma única, permite que consumamos a mesma fonte de dados. 
 - APIs executam do lado do servidor. 
 - Requisições feitas por HTTP
 
 - HTTP -> Hypertext Transfer Protocol
 - O client pede uma informação, e o servidor responde
 - Request -> Pedido feito pelo client
 - Response -> Resposta do servidor
 - Blocos de informações que formam uma request: URL/endpoint; Query Params, Método, Headers, Body
 - URL/endpoint -> Serve pra conseguirmos identificar os recursos
 - Query Params -> Parâmetros adicionais que passamos na URL
 - Métodos -> Identifica qual ação queremos tomar em cima do recurso que identificamos com a URL/endpoint
 - Headers -> Serve pra trocar informações adicionais entre o client e o server
 - Body -> Serve pra mandar o corpo da mensagem

 #### Indo mais a fundo em HTTP:

Exemplo:
  
  https://mywebsite.com/products?page=3&orderBy=name

***Request***
- Do Https:// até o .com, isso é a nossa URL
- /products -> endpoint -> onde identificamos o recurso que estamos tentando adicionar
- ?page... -> Query Params -> informações adicionais -> "back end, quero listar todos os produtos, me traga os produtos da página 3, ordenados pelo nome
- **Métodos** -> {
  *Principais*: 
  Método GET: quando acessamos a url pedindo algumas coisas para o backend, estamos fazendo uma requisição do tipo GET, servem para consultar dados, o backend entende que precisa retornar uma lista de produtos.

  Método POST: para cadastrarmos um produto. O backend entende que estamos tentando inserir um novo registro.

  Método PUT: para editarmos um registro.

  Método DELETE: para deletarmos um registro.
}

- **Headers** -> Usados pra trocar informações adicionais entre client e server; 
  - Existem headers pré-definidos, mas também conseguimos criar headers customizados.
  - Nome e valor separados por dois pontos:
     ~~~
      Content-Type: application/json
      O Content-Type serve pra identificarmos qual tipo de informação estamos mandando dentro da request, e pro server mandar pro client, qual tipo de mensagem ele está enviando pelo corpo da mensagem.
     ~~~

  - São case insenstive -> tanto faz se estão em maiúsculo ou em minúsculo
  - Custom Headers: Uma boa prática é: Sempre colocarmos um X na frente do seu nome pra identificarmos que aquele é um header da nossa aplicação
      ~~~
        X-Org-ID: 1123
      ~~~

      Por que gostaríamos de criar um custom header?
         Imaginemos que temos uma aplicação, onde o user pode ter múltiplas organizações, e queremos identificar, dentro de qual organização estamos cadastrando um usuário. E colocamos essa info dentro do header.

- **Body** -> Apenas para requisições do tipo POST e PUT
  - Formato dos daods que enviamos dentro desse body, normalmente vão ser em JSON.


***Response***

- Headers
- Content Type
- Status Code
- Body

**Headers** -> Mesma funcionalidade que nas requests.

**Content Type** -> Serve pra mandar dentro do header qual é o tipo de conteúdo que estamos enviando dentro do corpo da resposta.

**Status Code** -> Serve pro servidor indicar pra quem fez a request, o que aconteceu com a request. Se deu certo, se não. 

**Body** -> Dados que quem fez a request pediu pro servidor

***Indo mais a fundo***

**Status Code** -> Separados por categoria, e o que indica a categoria, é o primeiro dígito. 

```
  - 100-199 -> Respostas de informação
  - 200-299 -> Respostas de sucesso
  - 300-399 -> Redirecionamentos
  - 400-499 -> Erros do cliente
  - 500-599 -> Erros do servidor
```
- Os códigos que mais importam são os que começam com: 2, 4 e 5. E os principais códigos são:
 - 200: OK
 - 201: Created
 - 204: No Content
 - 400: Bad Request
 - 401/403: Unauthorized
 - 404: Not Found
 - 405: Method Not Allowed
 - 409: Conflict
 - 500: Internal Server Error


 #### E como tudo isso funcionaria na prática?
 - URL e endpoint -> Assim como vimos no request
 - Headers -> 
  - :path: tudo que vem depois do domínio -> /products
  - :method: GET -> request -> Sempre que acessamos uma url direto da barra de pesquisa do browser
  - :scheme: Só pra indicar que é um HTTP

  ##### No final, essa response seria mais ou menos assim:

  - Headers: 
    - **status:** 200
    - **content-length:** 197
    - **content-type:** text/html

  - Body:
    - Teria o HTML
  
### O que é o REST
 
  - Padrão para construção de APIs
  - Utiliza o protocolo HTTP
  - Retorna uma apresentação de estado

  **Nomes de endpoints**
    - Basta apenas usarmos o dos recursos no plural
      - Ex: um endpoint pra obtermos uma lista de produtos -> Fazemos uma requisição GET e /products -> 
      - Para pegarmos uma lista de produtos com o ID: 10. Requisição GET /products/10 (/10 é o que chamamos de parâmetros)

  **Representação de estado**
    - Retorna uma representação de dados em JSON, ao invés do HTML. 
    - Os dados ficam acessíveis de uma forma genérica. Basta que tenhamos uma linguagem que faça uma requisição HTTP pra conseguir chegar no servidor. E depois interpretar o código JSON pra montar a interface de acordo com a plataforma onde ela tá rodando.

# Aula 3

## Módulos
- Conjunto de código que podemos ou não reutilizar.
  - 3 tipos de módulos:
    - Dentro do node, todos os arquivos são módulos.
    - Nativos -> Já vem dentro do próprio node, só precisamos importar e usamos os métodos que eles disponibilizam para nós usarmos. *Ex:* HTTP
    - npm -> node package manager

- Para exportarmos algum módulo, temos as seguintes opções:
  - Exportar na hora de criar o módulo.
    ```
    exports.myVar = 'Gabriel' 
      o "My Var", é o nome que desejamos passar para o módulo.
    ```
  - Temos também a opção de passar depois de criar o módulo.
      ```
        module.exports = myVar
          Ele declara a exportação de um módulo, onde o valor recebido, é o módulo que desejamos exportar.

      ```
    Também podemos fazer com object destructuring, quando queremos exportar mais de um módulo.
    ```
      function myFunc(name){
        return name
      }

      const myVar = 'João'

      module.exports = { myFunc, myVar }
    ```
  - Formas de importar um módulo:
    - Criando uma variável que recebe um método do node, onde é passado o caminho do arquivo, e chamando o arquivo onde quisermos.
      
      ```
        const myImport = require('./index')

        console.log(myImport.funcaoTeste)
      ```

    - Podemos também, fazer destructuring na hora de importar, e esses valores serão armazenados dentro de uma variável com seu próprio nome, sem precisar de todo aquele myImport.algumaCoisa.

      ```
        const { funcaoTeste } = require('./index')

        console.log(funcaoTeste)
      ```
  - E para importar os módulos nativos do node: require('nomeDoModulo'). Sem a barra pra acessar o caminho, apenas o nome do módulo.

# Aula 4

  ## Conteúdo da aula comentado na pasta firstApi

#Aula 1

### Call Stack
 - Pilha de processamento do código
 - Todas funções executadas no código vão pra dentro da call stack


## Single Thread
 - Apenas uma Call Stack, sendo assim, consegue executar apenas uma coisa por vez

## libUv
 - Traz 2 componentes importantíssimos pro Node, que permite que executemos mais de 1 coisa por vez, são eles: ***Thread Pool*** e ***Event Loop***
 
 - Exemplo:
ˋˋˋ
 console.log('Antes');

 db.query(query, function callback(err, data){
   console.log(data)
 });

 console.log('Depois');

A função db.query, é uma função bloqueante, onde caso o node não tomasse nenhuma providência, o código ficaria parado ali, até a função retornar seu devido valor. Aí entra o Thread Pool.

Então o node pega a execução da query, e joga pra dentro do Thred Pool, e lá vai executando a query, enquanto na Call Stack, essa query é retirada, e o código continua rodando a partir da linha que indica o fim da query.

Quando a query terminar sua execução, o node tira ela do Thread Pool, e joga pra dentro da 
***Callback Queue***, e seguindo o código acima, o que vai pra essa callback queue, é a função callback, e é executado lá mesmo. O node "pergunta" constantemente para a callback queue, para saber se a função de lá já terminou de executar, para pegar os dados. Entre a callback queue e a call stack, temos o ***Event Loop***, quando a callback queue responder que tem uma função liberada, a callback queue verifica se a call stack tá liberada, e se estiver, a call stack puxa pra dentro de si, a função. E assim o node executa código assíncrono.
ˋˋˋ
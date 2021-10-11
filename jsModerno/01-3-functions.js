const getUser = () => (
  {
    id: 123, 
    name: 'Gabriel'
  }
)

//usando os parenteses ao invés das chaves, podemos quebrar linhas, e manter nosso código mais organizado. Não é algo obrigatório a se fazer sempre que declarar uma arrow function, mas pra casos como este, o código fica mais organizado e melhor, pq estamos declarando um objeto dentro dessa função.
console.log(getUser())
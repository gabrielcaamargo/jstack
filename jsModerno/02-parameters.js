function printGreetings(message = 'Mensagem padrão'){
  console.log(message)
}

printGreetings('Mensagem nova')

//default parameters são como uma "prevenção" para caso a função seja chamada sem a passagem de nenhum argumento, aí entram os parâmetros default, onde, vc passa o valor do parâmetro (nesse caso, message) diretamente na declaração dele, seguindo, sempre que a função for chamada sem um argumento, esse parametro que já tem valor, vai continuar com seu valor padrão, e vai ser retornado o seu valor. 
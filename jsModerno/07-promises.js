const apiCall = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    // resolve('Sucesso!')
    resolve('Sucesso')
  }, 1000)
})


// apiCall
// .then((mensagemSucesso)=>{
//   console.log(mensagemSucesso)
// })
// .catch((mensagemErro)=>{
//   console.log(mensagemErro)
// })

async function run(){
  const resposta = await apiCall
  console.log(resposta)
}

run()
  //Uma promise é quando se tem uma tarefa muito demorada, que quando for finalizada, queremos usar sua resposta

  //O then é um método, e recebe uma callback function como seu único parâmetro, onde trata os dados em caso de sucesso da promise. Para pegarmos só o conteúdo da promise, passamos parâmetros na callback function, e recebemos esses parâmetros no corpo dessa função.

  //O catch é a mesma coisa que o then, mas para tratamento de erros, em caso de falha da promise.
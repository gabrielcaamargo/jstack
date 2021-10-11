function minhaFunction(){ 
  //keyword 'new' transforma a função em um objeto. Seguindo isso, conseguimos atribuir propriedades à ela.
  //o objeto this e suas propriedades que aqui são passadas, permancem aqui, nesse escopo local, pois a função criada com a function keyword têm objeto construtor. Então só conseguem ser acessadas por meio desta função.
  //a partir do uso da keyword new, a function cria o próprio contexto 
  this.name = "Gabriel"
  const minhaArrowFunction = () => {
    //Como arrow functions não têm objeto construtor, isso é, não podem virar objetos, o objeto this, ela vai herdar o this de onde ela foi criada. Seguindo isso, as propriedades que forem passadas dentro usando o this keyword, vão ser passadas diretamente para o objeto this global.

    //Nesse caso, onde a arrow function está dentro da function, o objeto this da arrow, ele vai diretamente pra dentro do objeto this da function, pois o objeto this da arrow, é jogado para o local de onde ela foi criado. Então considerando que ela foi criada dentro da function, o seu objeto this é jogado para dentro da function, que já tem seu próprio this, então os dois são unidos, e suas propriedades são juntadas.
    this.lastName = "Camargo"
  } 

  minhaArrowFunction()
}

//console.log(new minhaFunction())

console.log(new minhaFunction())
console.log(this)

/*
  Resumidamente:
    function --> tem seu próprio this, que fica em um escopo local.
    arrow --> não tem objeto construtor, logo, não tem this próprio, então herda o this do local onde foi criada.
*/
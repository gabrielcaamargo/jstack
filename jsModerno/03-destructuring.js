const user = {
  firstName: 'Gabriel',
  lastName: 'Camargo',
  full_name: 'Gabriel Camargo',
  age: 16,
  instagram: '@gabcamargo',
  skills: ['Front-end', 'Back-end', 'Mobile', 'UI/UX'],
};

//Destructuring

//Com objetos:
// Cria uma variável que no seu nome, recebe {}, e dentro dessas chaves, são passados os nomes das propriedades do objeto que eu quero que seja buscado. E que recebe, o nome do objeto como seu valor, assim, são salvas como variáveis em escopo global, sempre que quiser acessar, basta puxar pelo nome da propriedade.

//Para renomear alguma propriedade só no destructuring, basta colocar o nome atual, seguido de : e o nome novo.
const { firstName, age, skills, full_name: fullName} = user

//Com arrays:
//No nome da variável é colocado [], e dentro, para pegarmos as propriedades que precisamos, e setamos nomes para cada index do array, sendo assim, o primeiro nome, é passado para o index 0, o segundo nome, é passado para o index 1, e assim por diante.

//NOTA: Caso busque propriedades que não existem, o valor geral, retorna como undefined


const [primeiraPosicao, segundaPosicao, terceiraPosicao, quartaPosicao ] = skills

console.log( fullName )

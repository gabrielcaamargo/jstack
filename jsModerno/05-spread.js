const user = {
  firstName: 'Gabriel',
  lastName: 'Camargo',
  age: 16,
  instagram: '@gabcamargo',
  skills: [ 'Back-end', 'Front-end', 'Mobile', 'UI/UX'],
  active: false,
};


//Spread (espalhar) operator
//O spread operator tem a mesma sintaxe que o rest operator, mas sua função é bem diferente. O spread, faz com que tragamos todas as propriedades de um objeto, para um objeto novo, sem alterar as propriedades do objeto antigo.
const updatedUser = {
  ...user,
  skills: [...user.skills, 'Marketing'],
  active: true
}


console.log({user})
console.log({updatedUser})

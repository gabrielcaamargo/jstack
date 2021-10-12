const user = {
  firstName: 'Gabriel',
  lastName: 'Camargo',
  age: 16,
  instagram: '@gabcamargo',
  skills: [ 'Back-end', 'Front-end', 'Mobile', 'UI/UX'],
  active: false,
};


//Spread (espalhar) operator

const updatedUser = {
  ...user,
  skills: [...user.skills, 'Marketing'],
  active: true
}


console.log({user})
console.log({updatedUser})

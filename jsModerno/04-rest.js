const user = {
  firstName: 'Gabriel',
  lastName: 'Camargo',
  full_name: 'Gabriel Camargo',
  age: 16,
  instagram: '@gabcamargo',
  skills: [ 'Back-end', 'Front-end', 'Mobile', 'UI/UX'],
};


//Rest operator
const { firstName, skills, ...resto } = user;
const [ primary, ...restoSkills ] = skills

console.log(restoSkills)

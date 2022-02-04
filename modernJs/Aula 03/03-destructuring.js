const user = {
  firstName: 'Gabriel',
  lastName: 'Camargo',
  full_name: 'Gabriel Camargo',
  age: 16,
  instagram: '@gabcamargo',
  skills: ['Front-End', 'Back-End', 'Mobile', 'UI/UX']
}

//Destructuring

const { full_name: fullName, age, skills } = user;
const [primary, secondary, tertiary, quaternary] = skills 

//If we get 'undefined' as the return, it means that the property that we're trying to access doesn't exist.

//Renaming properties is possible when we write the property name, followed by : and the new name

console.log(fullName)
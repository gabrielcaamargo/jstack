const user = {
    firstName: 'Gabriel',
    lastName: 'Camargo',
    age: 16,
    instagram: '@gabcamargo',
    skills: ['Front-End', 'Back-End', 'Mobile', 'UI/UX'],
    active: false,

}

//Spread

//In JS, when there are 2 properties that are called as the same name, in the same object, the last one always will be used

const updatedUser = {
    ...user,
    active: true,    
}

//The spread operator has the same syntax of rest operator.

//With this operator, we can duplicate all properties from some object, with just 1 line of code. Then, we can change the properties only in the new object. The first one keeps as in the beginning

const {skills, ...resto } = user
const [primary] = skills

console.log({user})
console.log({updatedUser})
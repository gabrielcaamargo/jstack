const user = {
    firstName: 'Gabriel',
    lastName: 'Camargo',
    full_name: 'Nome completo',
    age: 16,
    instagram: '@gabcamargo',
    skills: ['Front-End', 'Back-End', 'Mobile', 'UI/UX']
}

//Rest operator

//Rest operator it's used to when we use destructuring method, and we wanna get the rest of the properties from an array or an object, in only one constant
const {skills, ...resto } = user
const [primary] = skills

console.log(resto)
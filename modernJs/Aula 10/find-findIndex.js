const array = [
    {name: 'iPhone', price: 5000, quantity: 2 },
    {name: 'MacBook Pro', price: 20000, quantity: 1 },
    {name: 'Magic Mouse', price: 1000, quantity: 5 },
]

// .find

const find = array.find(product => product.price > 1000)

// console.log({find})

//The find method runs into the whole object, we put a condition, in the moment that the condition  returns true, the element that the find method is 'watching', it will be the element that find will return

//It will always return the first element that returned true, and stop the checking out

const findIndex = array.findIndex(product => product.name === 'MacBook Pro')
console.log({findIndex})
console.log(`Produto: ${array[findIndex]}`)

//It has the same funcionality as .find, but it will return the index of the element, its position in the array, not its content.


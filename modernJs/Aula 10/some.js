const array = [
    {name: 'iPhone', price: 5000, quantity: 2 },
    {name: 'MacBook Pro', price: 20000, quantity: 1 },
    {name: 'Magic Mouse', price: 1001, quantity: 5 },
]

const some = array.some((product)=> product.price < 1000)

// console.log({some})

//Some method checks the condition that we get to it, and return telling if the array has some product with the same info that we requested in the condition

//every

//some verifies if one product has the same infos, every verifies if ALL the products has the same infos that we requested

const every = array.every((product) => product.price > 1000)
console.log({every})
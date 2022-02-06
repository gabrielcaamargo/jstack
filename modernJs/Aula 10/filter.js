const array = [
    {name: 'iPhone', price: 5000, quantity: 2 },
    {name: 'MacBook Pro', price: 20000, quantity: 1 },
    {name: 'Magic Mouse', price: 1001, quantity: 5 },
]

const filter = array.filter((product) => product.quantity >= 2)
console.log({filter})

//Filter method filters all indexes, searching for what we've requested. Then, creates a new array, with the results. And if, it doesn't match nothing, it will skip 
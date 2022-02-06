const array = [
    {name: 'iPhone', price: 5000, quantity: 2 },
    {name: 'MacBook Pro', price: 20000, quantity: 1 },
    {name: 'Magic Mouse', price: 1001, quantity: 5 },
]

const map = array.map((product) => {
    // console.log(product)
    return{
        ...product,
        subtotal: product.quantity * product.price,
    }
})

console.log({map})

//The map method, map the array, then creates a new array based on the original one, where we can get some new properties, etc
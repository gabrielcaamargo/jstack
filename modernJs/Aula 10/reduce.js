const array = [
  {name: 'iPhone', price: 5000, quantity: 2 },
  {name: 'MacBook Pro', price: 20000, quantity: 1 },
  {name: 'Magic Mouse', price: 1001, quantity: 5 },
]

const reduce = array.reduce((accumulator, product)=>{
  return accumulator + product.price * product.quantity
}, 0)

console.log({reduce})

//Reduce method receives 2 parameters, they are: accumulator, product. Accumulator, is a value that for each request reduce does in the array, it will counting and summing into the accumulator

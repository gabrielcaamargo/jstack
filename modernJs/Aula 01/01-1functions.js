function minhaFunction(){
  this.name = 'Gabriel'

  const minhaArrowFunction = () => {
    this.lastName = 'Camargo'
  }
  
  minhaArrowFunction()
  
}

console.log(new minhaFunction())

//Functions created with the function keyword, have their own scope. Then, they have their own this.

//When we use the new keyword (the constructor), we are transforming the function in an object. So, we can get it some properties, using the this keyword.


//Arrow functions don't have a constructor, then, they don't have a this object. New keyword doesn't works with it.

//Arrow functions don't have their own this keyword. Then, they get the this keyword, from the place that they were created. So, if they have been created in the global scope, their this keyword will be the global this (browser = window / node = node )

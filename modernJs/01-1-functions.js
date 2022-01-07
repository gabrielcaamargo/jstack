function minhaFunction(){
  this.name = 'Gabriel'

  const minhaArrowFunction = () => {
    this.lastName = 'Camargo'
  }
  
  minhaArrowFunction()
}

console.log(new minhaFunction())

console.log(this)
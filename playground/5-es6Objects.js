// Object Property Shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name, 
    age: userAge,
    location: 'Philedelphia'
}
console.log(user);


//Object Destructing - When you have an object and youre trying to access properties from it. The goal is to destruct object properties into their variables. 
const product = {
    label: 'RednoteBook',
    price: 3,
    stock: 201, 
    salePrice: undefined
}
console.log(product)

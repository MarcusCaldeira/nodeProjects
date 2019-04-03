// Object Property Shorthand

// const name = 'Andrew'
// const userAge = 27

// const user = {
//     name, 
//     age: userAge,
//     location: 'Philedelphia'
// }
// console.log(user);


//Object Destructing - When you have an object and youre trying to access properties from it. The goal is to destruct object properties into their variables. 
const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201, 
    salePrice: undefined,
    rating: 4.2
}
// //Non desctucting syntax - will create WAY TO MUCH CODE
// const label = product.label
// const stock = product.stock
// console.log(label, stock)



// //To rename something use the colon, you can even assign things that arent in the original object by using an equal sign.
// const {label: productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)

}
transaction('Order', product)
// const square = function (x) {
//     return x * x
// }
// console.log(square(4));

// const square = (x) =>{
//     return x * x
// }

// const square = (x) => x * x

const event = {
    name: 'Birthday Party',
    printGuestList() {
        console.log('Guess LIST FOR ' + this.name)
    },
    guestList: ['Andrew', 'Jen', 'Mike']

}

event.printGuestList();
this.guestList.forEach(function (guest) {
    console.log(guest + 'is attending ' + this.name)
})
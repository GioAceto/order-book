// const hasDiffType = require('./has-different-type')

const reconcileOrder = (book, order) => {

  if (book === []) {
    book.push(order)
  }

  if (checksAllType(book, order) === false) {
    book.push(order)
  }

  for (let i = 0; i < book.length; i++) {
    let bookType = book[i].type
    let bookPrice = book[i].price
    let orderType = order.type
    let orderPrice = order.price
    let bookQty = book[i].quantity
    let orderQty = order.quantity
    let deal = false

    if (bookType !== orderType && bookPrice === orderPrice) {
      book.splice(book[i], 1)
    }
  }


  return book
}


const checksAllType = (book, order) => {
  let deal = false
  let count = 0

  for (let i = 0; i < book.length; i++) {
    if (book[i].type !== order.type) {
      count++
    }
    if (count > 0) {
      deal = true
    }
  }

  return deal
}

// const checksType = (book, order) => {
//   let deal = false

//   for (let i = 0; i < book.length; i++) {
//     if (book[i].type === order.type) {
//       deal === true
//     }
//   }

//   return deal
// }



// const checksPrice = (book, order) => {
//   let deal = false

//   for (let i = 0; i < book.length; i++) {
//     if (book[i].price === order.price) {
//       deal = true
//     }
//   }

//   return deal
// }







// const hasSamePrice = (book, order) => {
//   let match = true

//   for (let i = 0; i < book.length; i++) {
//     if ((book[i].type !== order.type) && (book[i].price !== order.type)) {
//       match = false
//     }
//   }

//   return match
// }

module.exports = reconcileOrder


// checks if the order book is empty or only has orders of one type in it, adds incoming order to the back
// of the order book

// if the order book does not have any matching price to the incoming buy or sell order, add the incoming 
// order to the back of the order book

// if incoming order matches price and qty to an existing order of a different type in the order book,
// then the sale is executed and the existing order is removed from the order book

// if the incoming order matches an existing order price of an order with a different type in the order 
// book, and the qty is less, subtract the incoming order qty from the existing order qty and keep the 
// remainder in the order book.

// move the partially executed existing order to the back of the order book

// if the incoming order matches an existing order price in the order book, and the qty is greater,
// the sale is partially executed so that the existing order is subtracted from the incoming order

// Move the remainder of the partially executed incoming order to the end of the order book


// const hasDiffType = require('./has-different-type')

const reconcileOrder = (existingBook, incomingOrder) => {
  let empty = []

  if (existingBook.length === 0) {
    empty.push(incomingOrder)
  }

  if (existingBook.length > 0) {
    empty.push(incomingOrder)
  }

  //   if (checksAllType(book, order) === false) {
  //     empty.push(order)
  //   } else if (checksAllPrice(book, order) === false) {
  //     empty.push(order)
  //   } else {
  //     for (let i = 0; i < book.length; i++) {
  //       // fulfills perfect deal
  //       if (book[i].type !== order.type && book[i].price === order.price && book[i].quantity === order.quantity) {
  //         empty.shift(book[i])
  //       }
  //       // fulfills deal of corresponding type and price, with a lower order quantity than the existing book order
  //       if ((book[i].type !== order.type) && (book[i].price === order.price) && (book[i].quantity > order.quantity)) {
  //         book[i].quantity -= order.quantity
  //         empty = book.splice(book[i], 1)
  //         empty.unshift(...book)
  //       }
  //       // fulfills deal of corresponding type and price, with a greater order quantity than the existing book order
  //       if ((book[i].type !== order.type) && (book[i].price === order.price) && (book[i].quantity < order.quantity)) {
  //         empty = book.shift()
  //         book[i].quantity -= order.quantity
  //         book.splice(1, 0, empty)
  //       }
  //     }
  //   }
  // }

  return empty
}



// const checksAllType = (book, order) => {
//   let deal = false
//   let count = 0

//   for (let i = 0; i < book.length; i++) {
//     if (book[i].type !== order.type) {
//       count++
//     }
//     if (count > 0) {
//       deal = true
//     }
//   }

//   return deal
// }

// const checksAllPrice = (book, order) => {
//   let deal = false
//   let count = 0

//   for (let i = 0; i < book.length; i++) {
//     if ((book[i].type !== order.type) && (book[i].price === order.price)) {
//       count++
//     }
//     if (count > 0) {
//       deal = true
//     }
//   }

//   return deal
// }


// module.exports = reconcileOrder


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


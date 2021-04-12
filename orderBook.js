const validateType = require('./validate-type')

const reconcileOrder = (book, order) => {
  let newBook = []
  let concatBook = book.concat(order)

  if (book.length === 0 ||
    validateType(book, order) === false ||
    validateMatch(book, order) === false) {
    newBook = concatBook
  }

  return newBook
}


const validateMatch = (book, order) => {
  let match = true

  for (let i = 0; i < book.length; i++) {
    if ((book[i].type !== order.type) && (book[i].price !== order.type)) {
      match = false
    }
  }

  return match
}

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


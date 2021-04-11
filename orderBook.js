const reconcileOrder = (existingBook, incomingOrder) => {
  // if the order book is empty or only has orders of one type in it, add incoming order to the order book

  // if the order book does not have matching price to incoming buy or sell order, add the incoming order
  // to the order book

  // if incoming order matches price and qty to an existing order of a different type in the order book,
  // then the sale is executed and the existing order is removed from the order book

  // if the incoming order matches an existing order price of an order with a different type in the order 
  // book, and the qty is less, subtract the incoming order qty from the existing order qty and keep the 
  // remainder in the order book

  // if the incoming order matches an existing order price in the order book, and the qty is greater,
  // the sale is partially executed so that the existing order is subtracted from the incoming order,
  // and the remainder of the incoming order is added to the end of the order book
}

module.exports = reconcileOrder

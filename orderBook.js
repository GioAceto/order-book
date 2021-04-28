const reconcileOrder = (existingBook, incomingOrder) => {
  const newBook = []

  for (let i = existingBook.length - 1; i >= 0; i--) {
    if (incomingOrder.type !== existingBook[i].type && incomingOrder.price === existingBook[i].price && incomingOrder.quantity === existingBook[i].quantity) {
      existingBook.splice(i, 1)
      i++
      incomingOrder = 0
    } else if (incomingOrder.type !== existingBook[i].type && incomingOrder.price === existingBook[i].price && incomingOrder.quantity < existingBook[i].quantity) {
      existingBook[i].quantity -= incomingOrder.quantity
      incomingOrder = 0
      existingBook.push(existingBook[i])
      existingBook.splice(i, 1)
      i++
    } else if (incomingOrder.type !== existingBook[i].type && incomingOrder.price === existingBook[i].price && incomingOrder.quantity > existingBook[i].quantity) {
      incomingOrder.quantity -= existingBook[i].quantity
      existingBook.splice(i, 1)
      i++
    }
  }
  if (existingBook.length !== 0 && incomingOrder === 0) {
    newBook.push(...existingBook)
  } else if (existingBook.length === 0 && incomingOrder !== 0) {
    newBook.push(incomingOrder)
  } else if (existingBook.length !== 0 && incomingOrder !== 0) {
    newBook.push(...existingBook)
    newBook.push(incomingOrder)
  }

  return newBook
}

module.exports = reconcileOrder


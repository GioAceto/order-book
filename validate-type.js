const validateType = (existingBook, incomingOrder) => {
  let deal = true

  for (let i = 0; i < existingBook.length; i++) {
    if (existingBook[i].type === incomingOrder.type) {
      deal = false
    }
  }

  return deal
}

module.exports = validateType
const hasDiffType = (book, order) => {
  let deal = true

  for (let i = 0; i < book.length; i++) {
    if (book[i].type === order.type) {
      deal = false
    }
  }

  return deal
}

module.exports = hasDiffType

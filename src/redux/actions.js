export const addToCart = (id, quantity = 1) => {
  return {
    type: 'ADD_TO_CART',
    placeholder: {
      id,
      quantity
    }
  }
}
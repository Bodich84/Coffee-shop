const initionalState = {
  items: [
    {
      id: 1,
      name: 'Lavazza Crema',
      imgUrl: 'https://i2.rozetka.ua/goods/2122625/lavazza_8000070038820_images_2122625329.jpg',
      type: 'мелена',
      sort: 'Купаж арабіка/робуста',
      weight: '250гр',
      taste: 'з кислинкою',
      price: 183
    },
    {
      id: 12,
      name: 'Lavazza Crema Aroma',
      imgUrl: 'https://i2.rozetka.ua/goods/2122631/lavazza_8000070024441_images_2122631179.jpg',
      type: 'У зернах',
      sort: 'Купаж арабіка/робуста',
      weight: '1кг',
      taste: 'з гіркотою / з кислинкою',
      price: 626
    },
    {
      id: 2,
      name: 'Lavazza Super Crema',
      imgUrl: 'https://i8.rozetka.ua/goods/14932097/lavazza_8000070042025_images_14932097265.jpg',
      type: 'У зернах',
      sort: 'Купаж арабіка/робуста',
      weight: '1кг',
      taste: 'з гіркотою / з кислинкою',
      price: 626
    },
    {
      id: 3,
      name: 'Lavazza Tierra Brazil',
      imgUrl: 'https://i8.rozetka.ua/goods/14932243/lavazza_8000070052802_images_14932243964.jpg',
      type: 'У зернах',
      sort: 'Арабіка',
      weight: '1кг',
      taste: 'з кислинкою',
      price: 847
    },
    {
      id: 4,
      name: 'Lavazza Tierra Brazil',
      imgUrl: 'https://i8.rozetka.ua/goods/14932243/lavazza_8000070052802_images_14932243964.jpg',
      type: 'У зернах',
      sort: 'Арабіка',
      weight: '1кг',
      taste: 'з кислинкою',
      price: 847
    },
    {
      id: 5,
      name: 'Lavazza Crema',
      imgUrl: 'https://i2.rozetka.ua/goods/2122625/lavazza_8000070038820_images_2122625329.jpg',
      type: 'мелена',
      sort: 'Купаж арабіка/робуста',
      weight: '250гр',
      taste: 'з кислинкою',
      price: 183
    },
    {
      id: 6,
      name: 'Lavazza Crema Aroma',
      imgUrl: 'https://i2.rozetka.ua/goods/2122631/lavazza_8000070024441_images_2122631179.jpg',
      type: 'У зернах',
      sort: 'Купаж арабіка/робуста',
      weight: '1кг',
      taste: 'з гіркотою / з кислинкою',
      price: 626
    },
    {
      id: 7,
      name: 'Lavazza Super Crema',
      imgUrl: 'https://i8.rozetka.ua/goods/14932097/lavazza_8000070042025_images_14932097265.jpg',
      type: 'У зернах',
      sort: 'Купаж арабіка/робуста',
      weight: '1кг',
      taste: 'з гіркотою / з кислинкою',
      price: 626
    },
    {
      id: 8,
      name: 'Lavazza Tierra Brazil',
      imgUrl: 'https://i8.rozetka.ua/goods/14932243/lavazza_8000070052802_images_14932243964.jpg',
      type: 'У зернах',
      sort: 'Арабіка',
      weight: '1кг',
      taste: 'з кислинкою',
      price: 847
    },
    {
      id: 9,
      name: 'Lavazza Super Crema',
      imgUrl: 'https://i8.rozetka.ua/goods/14932097/lavazza_8000070042025_images_14932097265.jpg',
      type: 'У зернах',
      sort: 'Купаж арабіка/робуста',
      weight: '1кг',
      taste: 'з гіркотою / з кислинкою',
      price: 626
    },
    {
      id: 10,
      name: 'Lavazza Crema',
      imgUrl: 'https://i2.rozetka.ua/goods/2122625/lavazza_8000070038820_images_2122625329.jpg',
      type: 'мелена',
      sort: 'Купаж арабіка/робуста',
      weight: '250гр',
      taste: 'з кислинкою',
      price: 183
    },
    {
      id: 11,
      name: 'Lavazza Crema Aroma',
      imgUrl: 'https://i2.rozetka.ua/goods/2122631/lavazza_8000070024441_images_2122631179.jpg',
      type: 'У зернах',
      sort: 'Купаж арабіка/робуста',
      weight: '1кг',
      taste: 'з гіркотою / з кислинкою',
      price: 626
    },
  ],
  cart: []
}

const reducer = (state = initionalState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':

      let value = false

      state.cart.map((item) => {
        if (item.id === action.placeholder.id) {
          item.number = Number(item.number) + Number(action.placeholder.quantity)
          value = true
        }
        return null
      })

      if (!value) {
        return { ...state, cart: [...state.cart, { id: action.placeholder.id, number: action.placeholder.quantity }] }
      }

      return { ...state, cart: [...state.cart] }

    default:
      return state
  }
}

export default reducer
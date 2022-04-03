const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    password: '123456',
    cart: [
      {
        id: 1,
        productName: 'Samsung Galaxy A12 - Dual Sim - 64GB ROM - 4GB RAM - 4G LTE - 6.5" - 48MP - 5000maAh - Fingerprint - Black',
        price: 81999,
        qty: 1,
      }, 
      {
        id: 2,
        productName: 'Samsung Galaxy Bud Live- Wireless Earbuds - MYSTIC BRONZE',
        price: 48000,
        qty: 2,
      }
    ],
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'janedoe@gmail.com',
    password: '123456',
    cart: [
      {
        id: 1,
        productName: 'Apple iPhone 13 - Single SIM - 128GB ROM - 4GB RAM - 6.1" - iOS 15 - 3240mAh - Midnight',
        price: 499999,
        qty: 4,
      }
    ],
  },
  {
    id: 3,
    name: 'Jack Doe',
    email: 'jackdoe@gmail.com',
    password: '123456',
    cart: [],
  }
]

export default users
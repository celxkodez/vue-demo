


export default {
  state: {

    datas: [
      { 
        one: 1
       },

      {
          one: 2
      },
    ],

    products: [
      {
          name: 'product one',
          index: '1',
          price: '12KES',
          othername: 'p one'
      },
      {
          name: 'product two',
          index: '2',
          price: '14KES',
          othername: 'p two'
      },
      {
          name: 'product three',
          index: '4',
          price: '54KES',
          othername: 'p three'
      },
]

  },

  mutations: {
    addProduct: function (payload) {

      // this = this;
            return this.state.products.push(payload);
  }

  }
}
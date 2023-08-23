import { createStore } from 'vuex'
const url = 'https://eomp-backend.onrender.com/products/'

export default createStore({
  state: {
    products: null,
    product: null
  },
  mutations: {
    setProducts: ( state, value ) => {
      state.products = value
    },
    setProduct: ( state, value ) => {
      state.product = value
    }
  },
  actions: {
    async fetchProducts( context ){
      try {
        let  products  = await ( await fetch(url)).json()
        console.log( products )
        if ( products ){
          context.commit( "setProducts", products )
        } else {
          context.commit(alert("There was an error fetching products"))
        }
      } catch ( error ) {
        alert( error )
      }
    },
    async fetchProduct( context, id ){
      try {
        let product = await ( await fetch( url + id )).json()
        console.log( product )
        if ( product ){
          context.commit( "setProduct", product )
        } else {
          context.commit( alert("Product not found"))
        }
      } catch( error ){
        alert( error )
      }
    }
  }
})

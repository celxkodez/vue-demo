<template>
      <div class="container">
          <h1>Product Table</h1>
          <table class="table table-light table-hover">
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Index number</th>
                    <th>Other Name</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="product in productDetails">
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.index }}</td>
                    <td>{{ product.othername }}</td>
                </tr>
                </tbody>
            </table>
      </div>

</template>

<script>
// import Hello from './Hello';
// import Stocks from './Stocks';


    export default {
    name: 'product-page',
    computed: {
        productDetails: function(){
            return this.$store.state.products;
        }
    }
    }
</script>

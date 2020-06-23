<template>
        <form action="">
            <h1>Add new Product</h1>
            <div class="form-group">
                <label for="product">Product name</label>
                <input type="text" v-model="name" class="form-control" id="product">
                <p>{{ name }}</p>
            </div>
            <div class="form-group">
                <label for="price">Price</label>
                <input type="text" v-model="price" class="form-control" id="price">
                <p>{{ price }}</p>
            </div>

            <div class="form-group">
                <label for="index">index number</label>
                <input type="text" v-model="index" class="form-control" id="index">
                <p>{{ index }}</p>
            </div>

            <div class="form-group">
                <label for="other">other name</label>
                <input type="text" v-model="othername" class="form-control" id="other">
                <p>{{ othername }}</p>
            </div>
            
            <button type="submit" @click.prevent="addProduct" class="btn btn-primary">Submit</button>
        </form>

</template>

<script>
// import Hello from './Hello';
// import Stocks from './Stocks';


  export default {
    name: 'product-form',

    data(){
      return {
        name: '',
        index:'',
        price: '',
        othername:''
      }
    },

    methods:{
      addProduct: function(){
       let data = {
          name: this.name,
          index: this.index,
          price: this.price,
          othername: this.othername
        };
        this.$store.state.products.push(data);
        // return this.$router.push('/dashboard/index');
      }
    }

  }
</script>

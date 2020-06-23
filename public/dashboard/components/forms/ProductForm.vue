<template>
        <form action="">
            <h1>Add new Product</h1>
            <div class="form-group">
                <label for="product">Product name</label>
                <input type="text" class="form-control" id="product">
            </div>
            <div class="form-group">
                <label for="price">Price</label>
                <input type="text" class="form-control" id="price">
            </div>

            <div class="form-group">
                <label for="index">index number</label>
                <input type="text" class="form-control" id="index">
            </div>

            <div class="form-group">
                <label for="other">other name</label>
                <input type="text" class="form-control" id="other">
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

</template>

<script>
// import Hello from './Hello';
// import Stocks from './Stocks';


  export default {
    name: 'product-form'

  }
</script>

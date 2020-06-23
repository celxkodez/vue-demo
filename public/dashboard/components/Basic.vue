<template>
<div class="container-fluid">
<!-- <div class="jumbotron text-center" style="margin-bottom:0">
  <h1>My First Bootstrap 4 Page</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div> -->

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <a class="navbar-brand" href="#">Vue Js Demo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
          <router-link class="nav-link" to="/dashboard/add_product">Form example</router-link>
        <!-- <a class="nav-link" href="#">Form example</a> -->
      </li>
      <li class="nav-item">
          <router-link class="nav-link" to="/dashboard/add_product_none">Form refreshable</router-link>
        <!-- <a class="nav-link" href="#">Form refreshable</a> -->
      </li>
      <li class="nav-item">
          <router-link class="nav-link" to="/dashboard/index">product page</router-link>
        <!-- <a class="nav-link" href="#">Form refreshable</a> -->
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">others</a>
      </li>    
    </ul>
  </div>  
</nav>

<div class="container-fluid" style="margin-top:30px">
  <div class="row">
    <div class="col-sm-4">
      <h2>DashBoard</h2>
      <h5>Maybe a profile image:</h5>
      <div class="fakeimg">Fake Image</div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      <h3>Some Links</h3>
      <p>Lorem ipsum dolor sit ame.</p>
      <ul class="nav nav-pills flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <hr class="d-sm-none">
    </div>
    <div class="col-sm-8">
        <router-view></router-view>
    </div>
  </div>
</div>

<div class="jumbotron text-center" style="margin-bottom:0">
  <p>Footer</p>
</div>
</div>
</template>

<script>
import Hello from './Hello';
import Stocks from './Stocks';


    export default {
        components:{
            Hello,
            Stocks
        }

    }
</script>

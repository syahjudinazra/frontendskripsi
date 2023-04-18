<template>

<section class="login-block">
<div class="container">
	<div class="row" style="margin-top: 70px;">
		<div class="col-md-4 login-sec">
      <img src="@/assets/images/iminlogo.png" style="height: 80px; width: 270px; margin-bottom: 30px;">
        
		    <form @submit.prevent="submitForm" class="row g-4">
      <div class="form-group">
        <label for="email">Email<span class="text-danger">*</span></label>
        <input type="email" id="email" class="form-control" v-model="email" placeholder="Enter Email" required>
        
      </div>
      <div class="form-group">
        <label for="password">Password<span class="text-danger">*</span></label>
        <input type="password" id="password" class="form-control" v-model="password" placeholder="Enter Password" required>
      </div>

      <button type="submit" class="btn btn-login float-right">Submit</button>

    </form>
		</div>
		<div class="col-md-8 banner-sec">
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
      <img class="d-block img-fluid" src="@/assets/images/welcome2.jpg">
      <div class="carousel-caption d-none d-md-block">
        <div class="banner-text">
            <h2>iMin Warehouse</h2>
            <p>We strive to help businesses increase their productivity by providing
                intelligent devices and data-driven IoT solutions.</p>
          </div>	
        </div>
      </div>
    </div>	       
    </div>
  </div>
  </div>
</section>
</template>

  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/login', {
            email: this.email,
            password: this.password,
          });
          console.log(response.data);
          window.location = "/product"
        } catch (error) {
          console.log(error.response.data);
          //error handle
        }
      },
    },
  };
  </script>
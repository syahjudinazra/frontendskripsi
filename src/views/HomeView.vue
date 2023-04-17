<template>
  <h1>
    Dashboard
  </h1>
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
          // display error message to user
        }
      },
    },
  };
  </script>
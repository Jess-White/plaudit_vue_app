<template>
  <div class="users_new">
    
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>


        <div class="form-group">
          <label>First Name:</label> 
          <input type="text" class="form-control" v-model="firstName">
        </div>

        <div class="form-group">
          <label>Last Name:</label> 
          <input type="text" class="form-control" v-model="lastName">
        </div>

        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>

        <div class="form-group">
          <label>Company Name:</label>
          <input type="companyName" class="form-control" v-model="companyName">
        </div>

        <div class="form-group">
          <label>Company Address:</label>
          <input type="companyAdddress" class="form-control" v-model="companyAdddress">
        </div>

        <div class="form-group">
          <label>Company City:</label>
          <input type="companyCity" class="form-control" v-model="companyCity">
        </div>

        <div class="form-group">
          <label>Company Zip:</label>
          <input type="companyZip" class="form-control" v-model="companyZip">
        </div>

        <div class="form-group">
          <label>Background:</label>
          <input type="background" class="form-control" v-model="background">
        </div>

        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Password Confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      title: "",
      company_name: "",
      company_address: "",
      company_city: "",
      company_zip: "",
      email: "",
      background: "",
      first_name: "",
      last_name: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        title: this.title,
        company_name: this.companyName,
        company_address: this.companyAddress,
        company_city: this.companyCity,
        company_zip: this.companyZip,
        email: this.email,
        background: this.background,
        first_name: this.firstName,
        last_name: this.lastName,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
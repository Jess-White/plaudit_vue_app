<template>
  <div class="recipients-new">
    
    <div class="row my-4">
      <form class="col-6 offset-3"
        v-on:submit.prevent="createRecipient()">
        <h1 class="text-center mb-5">New Recipient</h1>

        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>

        <div class="form-group">
          <label>First Name: </label>
          <input class="form-control" type="text" v-model="firstName">
        </div>

        <div class="form-group">
          <label>Last Name: </label>
          <input class="form-control" type="text" v-model="lastName">
        </div>

        <div class="form-group">
          <label>Title: </label>
          <input class="form-control" type="text" v-model="title">
        </div>

        <div class="form-group">
          <label>Company: </label>
          <input class="form-control" type="text" v-model="company">
        </div>

        <div class="form-group">
          <label>Address: </label>
          <input class="form-control" type="text" v-model="address">
        </div>

        <div class="form-group">
          <label>City: </label>
          <input class="form-control" type="text" v-model="city">
        </div>

        <div class="form-group">
          <label>State: </label>
          <input class="form-control" type="text" v-model="state">
        </div>

        <div class="form-group">
          <label>ZIP: </label>
          <input class="form-control" type="text" v-model="zip">
        </div>

        <div class="form-group">
          <label>Referee ID: </label>
          <input class="form-control" type="text" v-model="referee_id">
        </div>

        <div class="form-group">
          <label>Email: </label>
          <input class="form-control" type="text" v-model="email">
        </div>
        
        <input class="btn btn-info" type="submit" value="Add New Letter">
      </form>
    </div>


  </div>
</template>

<style></style>

<script>
  var axios = require("axios");

  export default {
    data: function() {
      return {
        id: "",
        first_name: "",
        last_name: "",
        title: "",
        start_date: "",
        end_date: "",
        notes: "",
        email: "",
        errors: []
      };
    },
    created: function() {},
    methods: {
      createLetter: function() {
        var clientParams = {
        first_name: this.firstName,
        last_name: this.lastName,
        title: this.title,
        start_date: this.start_date,
        end_date: this.end_date,
        notes: this.notes,
        email: this.email,
        zip: this.zip
      };

      axios
        .post("/api/referees/", clientParams)
        .then(response => {
          this.$router.push("/referees");
        }).catch(error => {
          this.errors = error.response.data.
            errors;
        });
    }
  }
};


</script>
<template>
  <div class="referees-edit">

    <div class="row">
      <form class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1" v-on:submit.prevent="updateRecipient()">
        <h1 class="text-center mb-5">Edit Referee</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>

        <div class="form-group">
          <label>First Name: </label>
          <input class="form-control" type="text" v-model="referee.first_name">
        </div>

        <div class="form-group">
          <label>Last Name: </label>
          <input class="form-control" type="text" v-model="referee.last_name">
        </div>

        <div class="form-group">
          <label>Title: </label>
          <input class="form-control" type="text" v-model="referee.title">
        </div>

        <div class="form-group">
          <label>Start Date: </label>
          <input class="form-control" type="text" v-model="referee.start_date">
        </div>

        <div class="form-group">
          <label>End Date: </label>
          <input class="form-control" type="text" v-model="referee.end_date">
        </div>

        <div class="form-group">
          <label>Notes: </label>
          <input class="form-control" type="text" v-model="referee.notes">
        </div>

        <div class="form-group">
          <label>Email: </label>
          <input class="form-control" type="text" v-model="referee.email">
        </div>

      </form>

      <button v-on:click="updateReferee()">Edit Referee</button>
    </div>
  </div>
</template>

<style>
</style>

<script>
  var axios = require("axios");

export default {
  data: function() {
    return {
      referee: {
        id: "",
        first_name: "",
        last_name: "",
        title: "",
        start_date: "",
        end_date: "",
        notes: "",
        email: ""
      },
      errors: []
    };
  },
  created: function() {
    axios
      .get("/api/referees/" + this.$route.params.id)
      .then(response => {
        this.referee = response.data;
      });
  },
  methods: {
    updateReferee: function() {
      var clientParams = {
        first_name: this.referee.first_name,
        last_name: this.referee.last_name,
        title: this.referee.title,
        start_date: this.referee.start_date,
        end_date: this.referee.end_date,
        notes: this.referee.notes,
        email: this.referee.email
      };

    axios
    .patch("/api/referees/" + this.$route.params.id, clientParams)
    .then(response => {
      this.$router.push("/referees/" + this.$route.params.id);
    }).catch(error => {
      this.errors = error.response.data.errors;
    });
    }
  }
};
</script>
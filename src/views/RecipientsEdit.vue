<template>
  <div class="bios-edit">

    <div class="row">
      <form class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1" v-on:submit.prevent="updateRecipient()">
        <h1 class="text-center mb-5">Edit Recipient</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>

        <div class="form-group">
          <label>First Name: </label>
          <input class="form-control" type="text" v-model="recipient.first_name">
        </div>

        <div class="form-group">
          <label>Last Name: </label>
          <input class="form-control" type="text" v-model="recipient.last_name">
        </div>

        <div class="form-group">
          <label>Title: </label>
          <input class="form-control" type="text" v-model="recipient.title">
        </div>

        <div class="form-group">
          <label>Email: </label>
          <input class="form-control" type="text" v-model="recipient.email">
        </div>

        <div class="form-group">
          <label>Company: </label>
          <input class="form-control" type="text" v-model="recipient.company">
        </div>

        <div class="form-group">
          <label>Address: </label>
          <input class="form-control" type="text" v-model="recipient.address">
        </div>

        <div class="form-group">
          <label>City: </label>
          <input class="form-control" type="text" v-model="recipient.city">
        </div>

        <div class="form-group">
          <label>State: </label>
          <input class="form-control" type="text" v-model="recipient.state">
        </div>

        <div class="form-group">
          <label>ZIP: </label>
          <input class="form-control" type="text" v-model="recipient.zip">
        </div>

      </form>

      <button v-on:click="updateRecipient()">Edit Recipient</button>
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
      recipient: {
        id: "",
        first_name: "",
        last_name: "",
        title: "",
        company: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        referee_id: "",
        email: ""
      },
      errors: []
    };
  },
  created: function() {
    axios
      .get("/api/recipients/" + this.$route.params.id)
      .then(response => {
        this.recipient = response.data;
      });
  },
  methods: {
    updateBio: function() {
      var clientParams = {
        first_name: this.bio.first_name,
        last_name: this.bio.last_name,
        title: this.bio.title,
        bio: this.bio.bio,
        organization_id: this.organization_id
        
      };

    axios
    .patch("/api/bios/" + this.$route.params.id, clientParams)
    .then(response => {
      this.$router.push("/bios/" + this.$route.params.id);
    }).catch(error => {
      this.errors = error.response.data.errors;
    });
    }
  }
};
</script>
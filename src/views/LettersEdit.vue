<template>
  <div class="letters-edit">

    <div class="row">
      <form class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1" v-on:submit.prevent="updateRecipient()">
        <h1 class="text-center mb-5">Edit Letter</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>

        <div class="form-group">
          <label>Title: </label>
          <input class="form-control" type="text" v-model="letter.title">
        </div>

        <div class="form-group">
          <label>recipient_info: </label>
          <input class="form-control" type="text" v-model="letter.recipient_info">
        </div>

        <div class="form-group">
          <label>Date: </label>
          <input class="form-control" type="text" v-model="letter.date">
        </div>

        <div class="form-group">
          <label>Section Background: </label>
          <input class="form-control" type="text" v-model="letter.section_background">
        </div>

        <div class="form-group">
          <label>Section Relationship: </label>
          <input class="form-control" type="text" v-model="letter.section_relationship">
        </div>

        <div class="form-group">
          <label>Section Strengths: </label>
          <input class="form-control" type="text" v-model="letter.section_strengths">
        </div>

        <div class="form-group">
          <label>Section Closer: </label>
          <input class="form-control" type="text" v-model="letter.section_closer">
        </div>

      </form>

      <button v-on:click="updateLetter()">Edit Letter</button>
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
      letter: {
        id: "",
        user_id: "",
        referee_id: "",
        title: "",
        recipient_info: "",
        date: "",
        section_background: "",
        section_relationship: "",
        section_strengths: "",
        section_closer: ""
      },
      errors: []
    };
  },
  created: function() {
    axios
      .get("/api/letters/" + this.$route.params.id)
      .then(response => {
        this.letter = response.data;
      });
  },
  methods: {
    updateLetter: function() {
      var clientParams = {
        user_id: this.letter.user_id,
        referee_id: this.letter.referee_id,
        title: this.letter.title,
        recipient_info: this.letter.recipient_info,
        date: this.letter.date,
        section_background: this.letter.section_background,
        section_relationship: this.letter.section_relationship,
        section_strengths: this.letter.section_strengths,
        section_closer: this.letter.section_closer,
        errors: []
      };

    axios
    .patch("/api/letters/" + this.$route.params.id, clientParams)
    .then(response => {
      this.$router.push("/letters/" + this.$route.params.id);
    }).catch(error => {
      this.errors = error.response.data.errors;
    });
    }
  }
};
</script>
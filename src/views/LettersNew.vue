<template>
  <div class="letters-new">
    
    <div class="row my-4">
      <form class="col-6 offset-3"
        v-on:submit.prevent="createLetter()">
        <h1 class="text-center mb-5">New Letter</h1>
        <h3 class="text-center mb-5">Use this template to build the body of your letter.</h3>

        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>

        <div class="form-group">
          <label>Title: </label>
          <input class="form-control" type="text" v-model="title">
        </div>

        <div class="form-group">
          <label>Recipient Info: </label>
          <input class="form-control" type="text" v-model="recipient_info">
        </div>

        <div class="form-group">
          <label>Date: </label>
          <input class="form-control" type="text" v-model="date">
        </div>

         <div class="form-group">
          <label>Background: </label>
          <input class="form-control" type="text" v-model="bio">
        </div>

        <div class="form-group">
          <label>Relationship: </label>
          <input class="form-control" type="text" v-model="bio">
        </div>

        <div class="form-group">
          <label>Strengths: </label>
          <input class="form-control" type="text" v-model="bio">
        </div>

        <div class="form-group">
          <label>Closer: </label>
          <input class="form-control" type="text" v-model="bio">
        </div>
        
        <input class="btn btn-info" type="submit" value="Add New Letter">

        <div class="form-group">
          <label>Recipient: </label>
          <select class="form-control" v-model="recipientId">
            <option v-for="recipient in recipients" :value="recipient.id">{{ recipient.first_name }} {{ recipient.last_name }}</option>
          </select>
        </div>

        <div class="form-group">
          <label>Referee: </label>
          <select class="form-control" v-model="refereeId">
            <option v-for="referee in referees" :value="referee.id">{{ referee.first_name }} {{ referee.last_name }}</option>
          </select>
        </div>
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
        user_id: "",
        referee_id: "",
        title: "",
        recipient_info: "",
        date: "",
        section_background: "",
        section_relationship: "",
        section_strengths: "",
        section_closer: "",
        errors: []
      };
    },
    created: function() {
      axios
        .get("/api/recipients")
        .then(response => {
          this.recipients = response.data;
        });

      axios
        .get("/api/referees")
        .then(response => {
          this.referees = response.data;
        });
    },
    methods: {
      createLetter: function() {
        var clientParams = {
        user_id: this.userId,
        referee_id: this.refereeId,
        title: this.title,
        recipient_info: this.recipientInfo,
        date: this.date,
        section_background: this.sectionBackground,
        section_relationship: this.sectionRelationship,
        section_strengths: this.sectionStrengths,
        section_closer: this.sectionCloser
      };

      axios
        .post("/api/letters/", clientParams)
        .then(response => {
          this.$router.push("/letters/" + response.data.id);
        }).catch(error => {
          this.errors = error.response.data.
            errors;
          this.status = error.response.status;
        });
    }
  }
};


</script>
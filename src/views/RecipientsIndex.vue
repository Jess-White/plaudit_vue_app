<template>
  <div class="recipients-index">

    <div class="container pt100 pb50">

    <h1 class="text-center mb-5">Recipients</h1>
    <div class="row">



      <div class="col-md-4 mb50" v-for="recipient in recipients">

      <router-link v-bind:to="'/recipients/' + recipient.id">

        <div class="testimonial-card testimonial testimonial-col">

        <div class="card">

          <div class="card-body text-info">
            <h5 class="card-name">{{recipient.first_name}} {{recipient.last_name}}</h5>
            <h5 class="card-text">{{recipient.title}}</h5>
            <h5 class="card-text">{{recipient.company}}</h5>
            <h5 class="card-text">{{recipient.email}}</h5>
            <h5 class="card-text">{{recipient.referee.id}}</h5>
          </div>
        </div>

      </div>
        </router-link>
      </div>



    </div>

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
        recipients: []
      };
    },
  created: function() {
    axios
    .get("/api/recipients")
    .then(response => {
      this.recipients = response.data;
    });
  },
  methods: {}
};


</script>
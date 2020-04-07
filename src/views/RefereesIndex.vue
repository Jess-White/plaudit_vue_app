<template>
  <div class="referees-index">

    <div class="container pt100 pb50">

    <h1 class="text-center mb-5">Referees</h1>
    <div class="row">



      <div class="col-md-4 mb50" v-for="referee in referees">

      <router-link v-bind:to="'/referees/' + referee.id">

        <div class="testimonial-card testimonial testimonial-col">

        <div class="card">

          <div class="card-body text-info">
            <h4 class="card-name">{{referee.first_name}} {{referee.last_name}}</h5>
            <h5 class="card-text">{{referee.title}}</h5>
            <h5 class="card-text">{{referee.email}}</h5>
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
        referees: []
      };
    },
  created: function() {
    axios
    .get("/api/referees")
    .then(response => {
      this.referees = response.data;
    });
  },
  methods: {}
};


</script>
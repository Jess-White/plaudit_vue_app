<template>
  <div class="referees-show">
    
     <div class="row">
       <div class="col-md-6">
        <h4 class="text-center">Name: {{referee.first_name}} {{referee.last_name}}</h4>
        <h4 class="text-center">Title: {{referee.title}}</h4>
        <h4 class="text-center">Email: {{referee.email}}</h4>
        <h4 class="text-center">Start Date: {{referee.start_date}}</h4>
        <h4 class="text-center">End Date: {{referee.end_date}}</h4>
        <h4 class="text-center">Notes: {{referee.notes}}</h4>
      </h4>
       </div>
       <div>
          <router-link class="btn btn-info m-2" v-bind:to="'/referees/' + referee.id + '/edit'">Edit</router-link>
          <button class="btn btn-info m-2" v-on:click="destroyReferee()">Delete</button>
        </div>
     </div> 


  </div>
</div>
</template>

<style></style>

<script>
var axios = require('axios');

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
          this.referee = response.data
        });
    },
    methods: {
      destroyReferee: function() {
        axios
          .delete("/api/referees/" + this.$route.params.id)
          .then(response => {
            this.$router.push("/referees");
          });
      }
    },
    watch: {
      $route: function() {
        axios
        .get("/api/referees/" + this.$route.params.id)
        .then(response => {
          this.referees = response.data;
        });
      }  
    }
};
</script>
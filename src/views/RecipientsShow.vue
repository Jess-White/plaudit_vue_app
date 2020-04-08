<template>
  <div class="recipients-show">

     <div class="row">
       <div class="col-md-6">
        <h4 class="text-center">Name: {{recipient.first_name}} {{recipient.last_name}}</h4>
        <h4 class="text-center">Title: {{recipient.title}}</h4>
        <h4 class="text-center">Email: {{recipient.email}}</h4>
        <h4 class="text-center">Address: {{recipient.address}}</h4>
        <h4 class="text-center">City: {{recipient.city}}</h4>
        <h4 class="text-center">State: {{recipient.state}}</h4>
        <h4 class="text-center">Zip: {{recipient.zip}}</h4>
      </h4>
       </div>
       <div>
          <router-link class="btn btn-info m-2" v-bind:to="'/recipients/' + recipient.id + '/edit'">Edit</router-link>
          <button class="btn btn-info m-2" v-on:click="destroyRecipient()">Delete</button>
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
          this.recipient = response.data
        });
    },
    methods: {
      destroyReferee: function() {
        axios
          .delete("/api/recipients/" + this.$route.params.id)
          .then(response => {
            this.$router.push("/recipients");
          });
      }
    },
    watch: {
      $route: function() {
        axios
        .get("/api/recipients/" + this.$route.params.id)
        .then(response => {
          this.recipients = response.data;
        });
      }  
    }
};
</script>
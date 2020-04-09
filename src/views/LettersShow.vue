<template>
  <div class="letters-show">

     <div class="row">

       <div class="col-md-6">
        <h4 class="text-center">Title: {{letter.title}}</h4>
       </div>

       <div class="col-md-6">
        <h4 class="text-center">User Name: {{user.name}}</h4>
        <h4 class="text-center">User Name: {{user.name}}</h4>
        <h4 class="text-center">User Name: {{user.name}}</h4>
        <h4 class="text-center">User Name: {{user.name}}</h4>
       </div>

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

       <div class="col-md-6">
        <h4 class="text-center">Letter Title: {{letter.title}}</h4>
        <h4 class="text-center">Title: {{recipient.title}}</h4>
        <h4 class="text-center">Email: {{recipient.email}}</h4>
        <h4 class="text-center">Address: {{recipient.address}}</h4>
        <h4 class="text-center">City: {{recipient.city}}</h4>
        <h4 class="text-center">State: {{recipient.state}}</h4>
        <h4 class="text-center">Zip: {{recipient.zip}}</h4>
      </h4>
       </div>

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
        user: {
          title: "",
          company_name: "",
          company_address: "",
          company_city: "",
          company_zip: "",
          email: "",
          background: "",
          first_name: "",
          last_name: ""
        }
        errors: []
      };
    },
  created: function() {
    axios 
      .get("/api/recipients/" + this.$route.params.id)
      .get("/api/referees/" + this.$route.params.id)
      .get("/api/users/" + this.$route.params.id)
      .then(response => {
        this.recipient = response.data
      });
    },
methods: {
  destroyLetter: function() {
    axios.
      .delete("/api/letters" this.$route.params.id)
      .then(response => {
        this.$router.push("/");
      });
    },
  printableLetter: function() {
    axios.
      .get("/api/letters/" + this.$route.params.id)
      .then(response => {
        this.$router.push("/letters/" + this$route.params.id + "/printable");
      });
    }
  },
watch: {
  $route: function() {
    axios
    .get("/api/letters/" + this.$route.params.id)
    .then(response => {
      this.letter = response.data;
    });
  }
}
};
</script>

function getUserData() {
  return axios.get("/api/users/" + this.$route.params.id);
}
function getRecipientData() {
  return axios.get("/api/recipients/" + this.$route.params.id);
}
function getRefereeData() {
  return axios.get("/api/referees/" + this.$route.params.id);
}

axios.all([getUserData(), getRecipientData(), getRefereeData()])
  .then(axios.spread(function (users, recipients, referees) {
  this.users = response.data;
  this.recipients = response.data;
  this.referees = response.data;
}))

methods: {
  destroyLetter: function() {
    axios.
      .delete("/api/letters" this.$route.params.id)
      .then(response => {
        this.$router.push("/");
    });
},
  printableLetter: function() {
    axios.
      .get("/api/letters/" + this.$route.params.id)
      .then(response => {
        this.$router.push("/letters/" + this$route.params.id + "/printable");
    });
}
},
watch: {
  $route: function() {
    axios
    .get("/api/letters/" + this.$route.params.id)
    .then(response => {
      this.letter = response.data;
    });
  }
}
};


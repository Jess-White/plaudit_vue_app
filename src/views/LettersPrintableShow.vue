<template>
  <div class="letters-show">

     <div class="row">

       <div class="col-md-6">
        <h4 class="text-center">Title: {{letter.title}}</h4>
       </div>

      <!-- letter header - sender address -->
       <div class="col-md-6">
        <h4 class="text-center">User Name: {{user.first_name}} {{user.last_name}}</h4>
        <h4 class="text-center">User Title: {{user.title}}</h4>
        <h4 class="text-center">User Company: {{user.company_name}}</h4>
        <h4 class="text-center">User Address: {{user.company_address}}</h4>
        <h4 class="text-center">User Address Part Two: {{user.company_city}}
        {{user.company_state}}
        {{user.company_zip}}
        </h4>
       </div>

       <!-- #today's date -->

       <!-- Letter header - recipient address -->
       <div class="col-md-6">
        <h4 class="text-center">Recipient Name: {{recipient.name}}</h4>
        <h4 class="text-center">Recipient Title: {{recipient.title}}</h4>
        <h4 class="text-center">Recipient Company: {{recipient.company}}</h4>
        <h4 class="text-center">Recipient Address: {{recipient.address}}</h4>
        <h4 class="text-center">Recipient Address Part Two: {{recipient.city}}
        {{recipient.state}}
        {{recipient.zip}}
        </h4>
       </div>

<!-- letter body  -->

       <div class="col-md-6">
        <h4 class="text-center">Dear Recipient Name: {{recipient.first_name}} {{recipient.last_name}}</h4>
        
        <h4 class="text-center">Background: {{letter.section_background}}</h4>
        <h4 class="text-center">Relationship: {{letter.section_relationship}}</h4>
        <h4 class="text-center">Strengths: {{letter.section_strengths}}</h4>
        <h4 class="text-center">Closer: {{letter.section_closer}}</h4>
       </div>

    <!--    letter signature -->

       <div class="col-md-6">
        <h4 class="text-center">User Name: {{user.first_name}}{{user.last_name}}</h4>
        <h4 class="text-center">User Title: {{user.title}}</h4>
        <h4 class="text-center">User Company: {{user.company_name}}</h4>
       </div>

       <div>
          <router-link class="btn btn-info m-2" v-bind:to="'/letters/' + letter.id + '/edit'">Edit</router-link>
          <button class="btn btn-info m-2" v-on:click="destroyLetter()">Delete</button>
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



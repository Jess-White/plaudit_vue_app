<template>
  <div class="dashboard">
    <h1>{{ message }}</h1>

    <router-link to="/recipients/new">Add Recipient Info</router-link></li>

    <router-link to="/letters/index">View Saved Letters</router-link></li>
  </div>



</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      message: "Start building a reference letter by entering recipient info!"
    };
  },
  created: function() {},
  methods: {}
};
</script>
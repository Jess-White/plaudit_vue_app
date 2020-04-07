<template>
  <div class="logout">
        <div class="container">
            <div class="row align-items-center">
            <div class="col-lg-8 mr-auto pb50 ml-auto">
                <p class="lead text-white-gray">
                    
                </p>
                <div class="experience-card clearfix">
                    <div class="experience-inner">
                        <h3 class="experience-text">10c</h3>
                    </div> 
                    <h4>User Logout</h4>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    
    this.$parent.userEmail = '';
    localStorage.removeItem("jwt");

    this.$router.push("/");
  }
};
</script>
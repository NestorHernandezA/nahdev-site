<template>
  <v-app id="inspire" dark>
    <v-toolbar app fixed clipped-left color="primary" class="white--text">
      <v-toolbar-title>
        <router-link to="/" tag="span" exact :style="{ cursor: 'pointer'}">Home</router-link>
      </v-toolbar-title>
       <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>
          <router-link to="/about" tag="span" exact :style="{ cursor: 'pointer'}">About</router-link>
        </v-btn>
        <v-btn flat>
           <router-link to="/timelines" tag="span" exact :style="{ cursor: 'pointer'}">Timelines</router-link>
        </v-btn>
        <v-btn flat>Contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content class="codance">
      <v-container fill-height>
            <router-view/>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: true
    };
  },
  methods: {
    greet: function(event) {
      // `event` is the native DOM event
      alert(event.target.tagName);
    }
  }
};

</script>
<style lang="stylus">
.codance {
  background-image: url('assets/codance.svg') !important;
  background-size: cover;
}
@media only screen and (max-width: 768px) {
  .my-background {
    background-position: center; 
  }
}
html {
  overflow: auto
}
</style>

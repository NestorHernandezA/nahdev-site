<template>
  <v-app id="inspire" dark>
    <v-toolbar app fixed clipped-left color="primary" class="white--text">
      <v-toolbar-title>
        <router-link to="/" tag="span" exact :style="{ cursor: 'pointer'}">Home</router-link>
      </v-toolbar-title>
       <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <router-link to="/about" tag="span" exact :style="{ cursor: 'pointer'}">About</router-link>
        </v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      Nestor Hernandez&nbsp;
      <span>&copy; 2018</span>
    </v-footer>
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
.theme--dark.application {
  background-image: url('https://source.unsplash.com/collection/2411320/1024x768') !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

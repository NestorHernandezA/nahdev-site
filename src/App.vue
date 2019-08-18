<template>
  <v-app id="inspire" dark>
    <v-content >
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
  background-size: contain;
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

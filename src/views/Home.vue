<template>
  <v-layout
    wrap
    align-center
    class="welcome text-md-center text-sm-center text-xs-center"
  >
    <v-flex xs12>
      <v-layout
        wrap
        align-center
        justify-center
      >
        <v-flex xs12>
          <div class="display-1 font-weight-bold">Hello there,</div>
        </v-flex>
        <fun-switch
          class="mb-3"
          onLabel="Code"
          offLabel="Dance"
          :value="this.code"
          @change="handleToggle()"
        />

        <div class="display-3 font-weight-bold">I'm Nestor</div>
      </v-layout>
      <div class="display-1">
        <span><code>Developer</code> by day</span>
        <span><code class="blue--text">Salsero</code> by night</span>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import FunSwitch from "../components/FunSwitch.vue";

export default {
  name: "home",
  components: {
    FunSwitch
  },
  mounted: function() {
  },
  data() {
    return {
      code: true
    };
  },
  methods:{
      handleToggle: function(){
        this.code = !this.code
        if(!this.code){
            // Light up dancing
        }
        // Light up coding
      }
  }
};
</script>
<style>
.welcome {
  opacity: 0.7;
}
</style>

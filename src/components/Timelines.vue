<template>
<v-layout column justify-center >
  <v-tabs
    centered
    color="primary"
    dark
    icons-and-text
    grow
  >
    <v-tabs-slider color="white lighten"></v-tabs-slider>

    <v-tab href="#tab-1">
      Life
      <v-icon>accessibility_new</v-icon>
    </v-tab>

    <v-tab href="#tab-2">
      Technology
      <v-icon>computer</v-icon>
    </v-tab>

    <v-tab href="#tab-3">
      Miscellaneous
      <v-icon>toys</v-icon>
    </v-tab>
    <v-tab-item :value="'tab-1'">
        <v-card flat class="scrollable-card">
          <life ></life>
        </v-card>
      </v-tab-item>
    <v-tab-item :value="'tab-2'">
      <v-card flat class="scrollable-card">
       <misc></misc>
      </v-card>
      </v-tab-item>
    <v-tab-item :value="'tab-3'">
      <v-card class="scrollable-card"><tech></tech></v-card>
     </v-tab-item>
  </v-tabs>
</v-layout>
</template>

<script>
import Life from './Timelines/Life.vue'
import Technology from './Timelines/Technology.vue'
import Misc from './Timelines/Misc.vue'
export default {
    name: 'timelines',
    components: {
        "life": Life,
        "tech": Technology,
        "misc": Misc
    },
    data () {
      return {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
}
</script>
<style lang="stylus">
     .scrollable-card {
        overflow-y: auto
        overflow-x: auto
        height: 550px
        background-color: rgba(66,66,66,.5) !important
    }   
</style>
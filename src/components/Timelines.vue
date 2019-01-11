<template>
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
    <v-tab-item :value="'tab-1'"><life></life></v-tab-item>
    <v-tab-item :value="'tab-2'"><misc></misc></v-tab-item>
    <v-tab-item :value="'tab-3'"><tech></tech></v-tab-item>
  </v-tabs>

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

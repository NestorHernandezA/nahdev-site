<template>
<v-app id="inspire" dark>
    <v-toolbar app fixed clipped-left color="primary" class="white--text">
        <v-toolbar-title>Home</v-toolbar-title>
    </v-toolbar>
    <v-content>
        <v-container fluid fill-height>
            <v-layout justify-center align-center>
                <v-flex>
                    <home></home>
                </v-flex>

            </v-layout>
        </v-container>
        
    </v-content>
    <v-footer app fixed>
        Nestor Hernandez&nbsp;<span>&copy; 2018</span>
    </v-footer>

</v-app>
</template>

<script>
import Home from './components/Home'

export default {
    name: 'App',
    components: {
        Home
    },
    data() {
        return {
            drawer: true
        }
    },
    methods: {
        greet: function (event) {
            // `event` is the native DOM event
            alert(event.target.tagName)
        }
    }
}
</script>
<style lang="stylus">
.theme--dark.application
  background-image: url('https://source.unsplash.com/collection/2411320/1024x768') !important
  background-position: center
  background-repeat: no-repeat
  background-size: cover
</style>

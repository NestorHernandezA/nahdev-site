<template>
<v-app id="inspire" dark>
    <v-navigation-drawer clipped fixed v-model="drawer" app>
        <v-list dense>
            <v-list-tile @click="greet">
                <v-list-tile-action>
                    <v-icon>dashboard</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Dashboard</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="greet">
                <v-list-tile-action>
                    <v-icon>settings</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Settings</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left color="primary" class="white--text">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
        <v-toolbar-title>Broking</v-toolbar-title>
    </v-toolbar>
    <v-content>
        <v-container fluid fill-height>
            <v-layout justify-center align-center>
                <v-flex shrink>
                    <v-tooltip right>
                        <v-btn icon large target="_blank" slot="activator">
                            <v-icon large>code</v-icon>
                        </v-btn>
                        <span>Source</span>
                    </v-tooltip>
                <hello-timeline></hello-timeline>
                </v-flex>
                <v-btn color="success">Success</v-btn>
                <v-btn color="error">Error</v-btn>
                <v-btn color="warning">Warning</v-btn>
                <v-btn color="info">Info</v-btn>
            </v-layout>
        </v-container>
    </v-content>
    <v-footer app fixed>
        Nestor Hernandez&nbsp;<span>&copy; 2018</span>
    </v-footer>

</v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
    name: 'App',
    components: {
        'hello-timeline': HelloWorld
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
  background:  rgb(160, 160, 160) !important
</style>

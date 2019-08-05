<template>
    <v-layout align-center column justify-center class="welcome">
        <h1 class="display-2 mb-3 font-weight-bold">Hello there,</h1>
        <h2 class="display-1 font-weight-thin mb-3 text-md-center text-sm-center font-weight-medium">
            <h1>I'm Nestor</h1> <br><code>Developer</code> by day 
            <code class="secondary black--text salsero-span">Salsero</code> by night
        </h2>
        <fun-switch onLabel="Code" offLabel="Dance"/>
    </v-layout>
</template>

<script>
import FunSwitch from '../components/FunSwitch.vue'

export default {
    name: 'home',
    components:{
        FunSwitch
    },
    mounted: function () {
    },
    data() {
        return {
           variable: 'x',
        }
    },
}
</script>
<style>
    .welcome {
        opacity: 0.6
    }
    .salsero-span{
        font-family: "Comic Sans MS", cursive, sans-serif;
    }
</style>

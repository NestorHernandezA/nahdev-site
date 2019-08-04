<template>
    <v-layout align-center column justify-center class="welcome">
        <h1 class="display-2 font-weight-thin mb-3 font-weight-bold">Hello there,</h1>
        <h2 class="display-1 font-weight-thin mb-3 text-md-center text-sm-center font-weight-medium">
            <h1>I'm Nestor</h1> <br><code>Developer</code> by day <code class="secondary black--text salsero-span">Salsero</code> by night
        </h2>
    </v-layout>

</template>

<script>
export default {
    name: 'home',
    mounted: function () {
    },
    data() {
        return {
           variable: 'x',
        }
    },
}
</script>
<style lang="stylus">
    .welcome {
        opacity: 0.6
    }
    .salsero-span{
        font-family: "Comic Sans MS", cursive, sans-serif
    }
</style>

<template>
    <v-layout align-center column justify-center class="welcome">
        <h1 class="display-2 font-weight-thin mb-3 font-weight-bold">{{welcome}}</h1>
        <h2 class="display-1 font-weight-thin mb-3 text-md-center text-sm-center font-weight-medium">
            I am Nestor Hernandez <br><code>Developer</code> by day <code class="secondary black--text salsero-span">Salsero</code> by night
        </h2>
    </v-layout>

</template>

<script>
const dynamicContent = {
    spanish : {
        welcome : 'Bienvenidos!'
    },
    english : {
        welcome : 'Welcome!'
    }
}
export default {
    name: 'home',
    mounted: function () {
        window.setInterval(() => {
            if (this.currentLanguage === 'english') {
                this.welcome = dynamicContent.spanish.welcome
                this.currentLanguage = 'spanish'
            } else {
                this.welcome = dynamicContent.english.welcome;
                this.currentLanguage = 'english'
            }
        }, 3000);
    },
    data() {
        return {
           currentLanguage: 'english',
           welcome: dynamicContent.english.welcome,
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

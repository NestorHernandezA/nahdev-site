<template>
    <v-layout align-center column justify-center class="welcome">
        <h1 class="display-2 font-weight-thin mb-3">{{welcome}}</h1>
        <h3 class="subheading">
            {{iam}} Nestor Hernandez
        </h3>
    </v-layout>

</template>

<script>
const dynamicContent = {
    spanish : {
        welcome : 'Bienvenidos!',
        iam : 'Soy'
    },
    english : {
        welcome : 'Welcome!',
        iam : 'I am'
    }
}
export default {
    name: 'home',
    mounted: function () {
        window.setInterval(() => {
            if (this.currentLanguage === 'english') {
                this.welcome = dynamicContent.spanish.welcome
                this.iam = dynamicContent.spanish.iam;
                this.currentLanguage = 'spanish'
            } else {
                this.welcome = dynamicContent.english.welcome;
                this.iam = dynamicContent.english.iam;
                this.currentLanguage = 'english'
            }
        }, 3000);
    },
    data() {
        return {
           currentLanguage: 'english',
           welcome: dynamicContent.english.welcome,
           iam: dynamicContent.english.iam
        }
    },
}
</script>
<style lang="stylus">
    .welcome {
        opacity: 0.6
    }
</style>

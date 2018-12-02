<template>
<v-parallax fill-height dark src="https://source.unsplash.com/7LoWpCOAn6k/1600x900">
    <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">ABOUT</h1>
        <h4 class="subheading">
            <v-icon large>code</v-icon>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem Ipsum.
        </h4>
    </v-layout>
</v-parallax>
</template>

<script>
export default {
    name: 'about',
    data() {
        return {
            //
        }
    }
}
</script>

<template>
   
    <v-layout align-center column class="about-layout">
         
        <h1 class="display-2 font-weight-thin mb-3">About</h1>
                 <v-card class="about-card responsive">
        <h4 class="subheading text-md-center text-sm-center">
            <div class="about-content"><p>
            Born in Mexico, raised in Texas and currently based on Indianapolis. Currently with 4 years of experience on the 
            industry of software development.
            </p>
            <p>
            In 2010 i started to pursue a degree in Software Engineering at the University of Dallas in Texas. After graduating in 2015, 
            I relocated to Indianapolis to continue pushing my career forward , but this time on an actual job in IT.
            Fun fact, at the same time of relocation, I picked up a new hobby that would become my 2nd passion and 2nd favorite thing to do (after programming), 
            salsa.
            </p>
            <p>
            During this time in the industry, I have become even more passionate about my career, 
            specifically programming and developing with new emerging technologes.
            </p>
            </div>
        </h4>
        </v-card>
    
    </v-layout>

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
<style lang="stylus">
     .about-card {
        overflow: auto
        width: 80%
        background-color: rgba(66,66,66,.5) !important
    }
    .about-content {
        padding: 40px 130px
    }   
</style>
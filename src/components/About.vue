<template>
   
    <v-layout align-center column justify-center>
         
        <h1 class="display-2 font-weight-thin mb-3">A little about me..</h1>
         <v-card class="about-card" width="80%">
        <h4 class="subheading text-md-center text-sm-center">
            <div class="about-content"><p>
            Born in Mexico, raised in Texas and currently based on Indianapolis. Currently with 4 years of experience on the 
            industry of software development, It all started in 2008 maybe earlier. I have always been passionate about coding,
            to the point that I had the coolest MySpace profile (says me) in middle school, thanks to HTML (Yea,I know now, this is a markup language).
            </p>
            <p>
            In 2010 i started to pursue a degree in Software Engineering at the University of Dallas in Texas. After graduating in 2015, 
            I relocated to Indianapolis to continue pushing my career forward , but this time on an actual job in IT.
            Fun fact, at the same time of relocation, I picked up a new hobby that would become my 2nd passion and 2nd favorite thing to do (after programming), 
            salsa.
            </p>
            <p>
            During this time in the industry,  I have become even more passionate about my career. Every year since i started, has brought new challanges
            that i have embraced and actually enjoyed and cannot wait for whatever the future holds.
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
        height: 550px
        background-color: rgba(66,66,66,.5) !important
    }
    .about-content {
        padding: 40px 130px
    }   
</style>
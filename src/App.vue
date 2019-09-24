<template>
  <v-app id="inspire" dark>
        <v-card-actions v-if="!isHome" class="absolute-vertical go-left-wrap">
        <router-link to="/" class="go-left" tag="span" exact> 
        <v-icon medium class="pr-3">fa-arrow-left</v-icon><br>home
      </router-link>
    </v-card-actions>
    <v-content >
      <v-container :class="background" fill-height>
        <transition name="page" mode="out-in">
          <router-view v-on:switch-change="backgroundChange"/>
        </transition>
      </v-container>
    </v-content>
    <v-card-actions v-if="isHome"  class="absolute-vertical go-right-wrap">
        <router-link to="/about" class="go-right" tag="span" exact> 
        <v-icon medium class="pr-3">fa-arrow-right</v-icon><br>about
      </router-link>
    </v-card-actions>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      background: 'code'
    };
  },
  computed:{
    isHome(){
      return (this.$route.name === 'home')
    }
  },
  methods:{
    backgroundChange(){
      if(this.background === 'code') this.background = 'dance';
      else this.background = 'code'
    }
  }
};

</script>
<style lang="stylus">
.code {
  background-image: url('assets/brackets.png') !important;
  background-repeat: no-repeat;
  background-position: center;
}
.dance {
  background-image: url('assets/dance.png') !important;
  background-repeat: no-repeat;
  background-position: center;
}
@media only screen and (max-width: 768px) {
  .my-background {
    background-position: center; 
  }
}
.page-enter-active, .page-leave-active {
  transition: opacity 1s, transform 1s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform: translateX(-70%);
}
.absolute-vertical {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.go-right{
  opacity: 0.7;
  font-size: 24px;
  cursor: pointer;
  text-align: end;
}
.go-right-wrap{
  align-self: flex-end;
  z-index:2;

}
.go-left{
  opacity: 0.7;
  font-size: 24px;
  cursor: pointer;
  text-align: start;
}
.go-left-wrap{
  align-self: flex-start;
  z-index 2;
}
@media only screen and (max-width: 600px) {
  .go-left{
    opacity: 0.7;
    cursor: pointer;
    text-align: start;
  }
  .go-left-wrap{
    display:none
  }
  .go-right{
    opacity: 0.7;
    cursor: pointer;
    text-align: end;
  }
  .go-right-wrap{
    align-self: flex-end;
    z-index:2;

  }
}
</style>

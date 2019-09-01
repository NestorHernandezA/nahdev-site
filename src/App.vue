<template>
  <v-app id="inspire" dark>
    <v-content >
      <v-container fill-height>
        <transition name="page" mode="out-in">
          <router-view/>
        </transition>
      </v-container>
    </v-content>
    <v-card-actions class="absolute-vertical">
          <router-link to="/about" class="display-1 go-right" tag="span" exact style="opacity: 0.7;cursor: pointer;"> 
          <v-icon large class="pr-3">fa-arrow-right</v-icon><br>about
        </router-link>
</v-card-actions>

  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: true
    };
  }
};

</script>
<style lang="stylus">
.codance {
  background-image: url('assets/codance.svg') !important;
  background-size: contain;
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
  align-self: flex-end;
}
.go-right{
  opacity: 0.7;
  cursor: pointer;
  text-align end;
}
</style>

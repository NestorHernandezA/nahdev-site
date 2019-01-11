import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  theme: {
    primary: "#2d2d2d",
    secondary: "#d2e7f9",
    thirdiary: "#90A4AE",
    accent: "#BDBDBD",
    error: "#455A64",
    warning: "#90A4AD",
    info: "#37474F",
    success: "#000080"
  },
  iconfont: 'md',
})

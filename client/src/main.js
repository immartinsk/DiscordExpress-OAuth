import Vue from "vue";
import App from "./App.vue";
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import router from "./router";
import "./main.css";

Vue.config.productionTip = false;

Vue.use(VueToast, {
  position: 'top-right',
  duration: 1000,
  queue: true,
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

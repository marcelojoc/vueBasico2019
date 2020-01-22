import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from "@/router";
import {dollarFilter, percentFilter} from "@/filter";   //importo  el filtro

Vue.filter('dollar', dollarFilter );  // declaro  los filtros de vue
Vue.filter('porcentaje', percentFilter );
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

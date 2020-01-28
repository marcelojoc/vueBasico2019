import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from "@/router";
import Chart from 'chart.js'
import Chartick from 'vue-chartkick';
import { VueSpinners } from '@saeris/vue-spinners'
import { dollarFilter, percentFilter } from "@/filter"; //importo  el filtro


Vue.use(VueSpinners)
Vue.use(Chartick.use(Chart)) // haciendo uso de los componentes  externos

Vue.filter("dollar", dollarFilter); // declaro  los filtros de vue
Vue.filter("porcentaje", percentFilter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

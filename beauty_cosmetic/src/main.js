// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap";
import "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  created() {
    AOS.init();
  },
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
{{#router}}
import router from './router'
{{/router}}
{{#vuex}}
import store from  './store/index'
{{/vuex}}

import "babel-polyfill";
import "./utils/flexible";
import "./styles/reset.css";
import "./styles/border.css";
import "vant/lib/index.css";
import "./styles/theme.less";
import fastClick from "fastclick";
/**
 * import base component to main.js from vant ui-lib
 */
import { Button, NavBar } from "vant";
Vue.use(Button).use(NavBar);
/**
 * apply fastclick
 */
fastClick.attach(document.body);
/**
 * init BUS
 */
let BUS = new Vue();
Vue.prototype.BUS = BUS;

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})

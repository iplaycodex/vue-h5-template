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
import http from "./services/http";
import VueJsonp from "vue-jsonp";
import { Button, NavBar, Tabbar, TabbarItem,Skeleton } from "vant";
Vue.use(Button)
  .use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Skeleton);
Vue.use(VueJsonp);

Vue.config.productionTip = false;

fastClick.attach(document.body);
Vue.prototype.$http = http;

let BUS = new Vue();
Vue.prototype.BUS = BUS;


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

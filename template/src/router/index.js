import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
/**
 * use es6 import to sync load component
 * this function is vue-cli4.0 recommand
 */
export default new Router({
    routes: [
        {
            path: "/",
            name: "index",
            component: () => import(/* webpackChunkName: "index" */ '@/pages/index.vue'),// index
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/list",
            name: "list",
            component: () => import(/* webpackChunkName: "list" */ '@/pages/list/list.vue'),// list
            meta: {
                keepAlive: true
            }
        }
    ]
});

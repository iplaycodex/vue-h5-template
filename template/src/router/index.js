import Vue from "vue";
import Router from "vue-router";

// lazyload router
const index = r => require.ensure([], () => r(require("@/pages/Index.vue")), "index"); //index
const list = r => require.ensure([], () => r(require("@/pages/list/List.vue")), "list"); //list
// use Router
Vue.use(Router);

// export
export default new Router({
    routes: [
        {
            path: "/",
            name: "index",
            component: index,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/list",
            name: "list",
            component: list,
            meta: {
                keepAlive: true
            }
        }
    ]
});

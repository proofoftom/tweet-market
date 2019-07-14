import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Portfolio.vue")
    },
    {
      path: "/tweets",
      name: "tweets",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Tweets.vue")
    }
  ]
});

import Vue from "vue";
import Router from "vue-router";
import WebSiteOnePager from "./components/WebSiteOnePager";
import { webSiteOnePagerData } from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      component: WebSiteOnePager,
      props: { siteOnePagerProps: webSiteOnePagerData.siteOnePagerProps },
    },
  ],
});

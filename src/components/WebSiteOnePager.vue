<template>
  <div class="container-center-horizontal">
    <div class="website-one-pager screen"><site-one-pager v-bind="siteOnePagerProps" /></div>
  </div>
</template>

<script>
import SiteOnePager from "./SiteOnePager";
export default {
  name: "WebSiteOnePager",
  components: {
    SiteOnePager,
  },
  props: ["siteOnePagerProps"],
};
</script>

<style lang="sass">
.website-one-pager
  align-items: flex-start
  display: flex
  height: 7669px
  min-width: 1200px
  position: relative
</style>

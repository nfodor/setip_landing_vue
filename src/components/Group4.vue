<template>
  <div :class="[`group-4`, className || ``]">
    <img class="ellipse-1" src="/img/ellipse-1@2x.svg" />
    <div class="flex-row">
      <div class="ellipse-2"></div>
      <div class="ellipse-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Group4",
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.group-4
  align-items: flex-start
  align-self: flex-end
  display: flex
  flex-direction: column
  min-height: 29px
  width: 76px

.ellipse-1
  height: 23px
  margin-left: 1px
  margin-top: -1px
  width: 73px

.flex-row
  align-items: flex-start
  display: flex
  margin-top: 2px
  min-width: 76px

.ellipse-2
  background-color: $harlequin
  border-radius: 2.5px
  height: 5px
  width: 5px

.ellipse-3
  background-color: $harlequin
  border-radius: 2.5px
  height: 5px
  margin-left: 66px
  width: 5px

.group-4.group-3
  margin-left: 139px
</style>

<template>
  <div class="group-1 roboto-normal-apricot-36px">
    <div class="text-6">
      Deploy code from any git repository with auto refresh right on your IP wherever you place it
    </div>
    <div class="overlap-group">
      <div class="text-5">One-click DNS, SSL and redirect to existing cloud containers, bare metal, edge devices.</div>
      <div class="text-7">Secured by Wireguard</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Group1",
};
</script>

<style lang="sass">
.group-1
  align-items: flex-start
  display: flex
  height: 215px
  left: 40px
  min-width: 1121px
  position: absolute
  top: 830px

.text-6
  align-self: flex-end
  letter-spacing: 1.62px
  min-height: 214px
  width: 448px

.overlap-group
  height: 196px
  margin-left: 53px
  position: relative
  width: 615px

.text-5
  left: 0
  letter-spacing: 1.62px
  position: absolute
  top: 1px
  width: 377px

.text-7
  left: 367px
  letter-spacing: 1.62px
  position: absolute
  text-align: right
  top: 0
  width: 248px
</style>

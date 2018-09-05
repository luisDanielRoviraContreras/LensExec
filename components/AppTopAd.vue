<template lang="pug">
  header.header-global.gradient-gray
    .position-relative
      // mainnav
      .container.shape-container.d-flex
        vs-row
          vs-col(vs-order="2", vs-justify="center", vs-align="center", vs-lg="12", vs-sm="12", style="").text-center
            .apptopadtext Join the VIP CLUB and get 10% OFF for LIFE Send SMS your Name to +1 315-888-3128 OFFER EXPIRES IN 00:48:19
</template>
<script>
export default {
  data: () => ({
    active: false,
    actives: 2,
    colorx: "#ffffff"
  })
};
</script>
<style>
.gradient-gray {
  background: #d4d5d6; /* Old browsers */
  background: -moz-linear-gradient(
    left,
    #d4d5d6 0%,
    #e4e4e5 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    #d4d5d6 0%,
    #e4e4e5 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    #d4d5d6 0%,
    #e4e4e5 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7693de', endColorstr='#394e7f',GradientType=1 ); /* IE6-9 */
}
.apptopadtext {
  font-size: 14px;
  font-family: San Francisco;
  font-weight: 500;
}
</style>

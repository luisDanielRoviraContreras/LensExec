<template lang="pug">
div
    .position-relative.whitebg
      // submenu
      section.section.section-xsm.my-0
        .container.shape-container.d-flex
          vs-row
            vs-col(vs-order="1",vs-justify="left", vs-align="left", vs-lg="12", vs-sm="12").text-left
              .subheadertext
                | WHERE 
                strong PHOTOGRAPHY 
                | MEETS YOUR 
                strong CORPORATE 
                | NEEDS
          vs-row.desktop
            vs-col(vs-order="2", vs-justify="right", vs-align="right", vs-lg="12", vs-sm="12", style="margin-top:-5px;").text-right
              vs-button(:vs-color='colorx', vs-type='line', vs-size='small') PRICING
              | |
              vs-button(:vs-color='colorx', vs-type='line', vs-size='small') SCHEDULE A PHONE CALL
              | |
              vs-button(:vs-color='colorx', vs-type='line', vs-size='small') LIVE CHAT
</template>
<script>
export default {
  components: {},
  computed: {},
  data: () => ({
    active: false,
    actives: 2,
    colorx: "#7791d9",
    colorx2: "#586fa9"
  })
};
</script>
<style>
.whitebg {
  background-color: #ffffff;
}
.subheadertext {
  color: #666666;
  font-size: 15px;
  font-family: san francisco;
  letter-spacing: 1px;
}
</style>

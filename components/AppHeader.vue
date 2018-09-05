<template lang="pug">
  header.header-global.gradient-blue
    .position-relative
      // mainnav
      .container.shape-container.d-flex
        vs-row
          vs-col(vs-order="1",vs-justify="left", vs-align="left", vs-lg="12", vs-sm="12").text-left
            .logo
              nuxt-link(to="/")
                img(src='/img/brand/white.png')
        vs-row.desktop
          vs-col(vs-order="2", vs-justify="right", vs-align="right", vs-lg="12", vs-sm="12", style="").text-right
            nuxt-link(to="/login", v-if='!username')
              vs-button(:vs-color="colorx", :vs-gradient-color-secondary="colorx2", vs-type="flat", vs-size='small').mainnavmenu Login
            nuxt-link(to="/register", v-if='!username')
              vs-button(:vs-color="colorx", :vs-gradient-color-secondary="colorx2", vs-type="flat", vs-size='small').mainnavmenu Register
            nuxt-link(to="/account", v-if='username')
              vs-button(:vs-color="colorx", :vs-gradient-color-secondary="colorx2", vs-type="flat", vs-size='small').mainnavmenu Account
            a(href='/', @click='logout', v-if='username')
              vs-button(:vs-color="colorx", :vs-gradient-color-secondary="colorx2", vs-type="flat", vs-size='small').mainnavmenu Logout
        vs-row.mobile
          vs-col(vs-order="2", vs-justify="right", vs-align="right", vs-sm="1", style="margin-top:-5px;").text-right
            #parentx
              vs-button(:vs-color='colorx', @click='active=!active', vs-type='flat', vs-icon='menu', vs-justify="right", vs-align="right").text-right
              vs-sidebar(:vs-active.sync='active')
                vs-sidebar-item(@click='actives=1', :vs-active='actives==1', vs-icon='question_answer')
                  | Login
                vs-sidebar-item(@click='actives=2', :vs-active='actives==2', vs-icon='gavel')
                  | Register
                vs-sidebar-item(@click='actives=3', :vs-active='actives==3', vs-icon='verified_user')
                  | Pricing
                vs-sidebar-item(@click='actives=4', :vs-active='actives==4', vs-icon='account_box')
                  | Schedule a Phone Call
                vs-sidebar-item(@click='actives=5', :vs-active='actives==5', vs-icon='card_giftcard')
                  | Live Chat
</template>
<script>
import BaseNav from "@/components/BaseNav";
import { mapMutations } from "vuex";

export default {
  components: {
    BaseNav
  },
  computed: {
    username() {
      return this.$store.getters["auth/username"];
    }
  },
  methods: {
    ...mapMutations({
      logout: "auth/logout"
    })
  },
  data: () => ({
    active: false,
    actives: 2,
    colorx: "#7791d9",
    colorx2: "#586fa9"
  })
};
</script>
<style>
.gradient-blue {
  background: #7693de; /* Old browsers */
  background: -moz-linear-gradient(
    left,
    #7693de 0%,
    #394e7f 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    #7693de 0%,
    #394e7f 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    #7693de 0%,
    #394e7f 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7693de', endColorstr='#394e7f',GradientType=1 ); /* IE6-9 */
}
header {
  vertical-align: -webkit-baseline-middle;
  padding-top: 13px;
  padding-bottom: 13px;
}

header .logo {
  vertical-align: -webkit-baseline-middle;
}

header img {
  width: 180px;
}
@media only screen and (min-width: 800px) {
  .mobile {
    display: none !important;
  }
}
@media only screen and (max-width: 801px) {
  .desktop {
    display: none !important;
  }
}
.vs-row.mobile {
  width: auto !important;
}
.vs-button.mainnavmenu {
  color: #ffffff !important;
}
</style>

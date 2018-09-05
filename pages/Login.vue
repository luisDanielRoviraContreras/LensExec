<template lang="pug">
section.section.section-shaped.section-lg.my-0
  .shape.shape-style-1.bg-gradient-default
    span
    span
    span
    span
    span
    span
    span
    span
  .container.pt-lg-md
    .row.justify-content-center
      .col-lg-5
        card.border-0(type='secondary', shadow='', header-classes='bg-white pb-5', body-classes='px-lg-5 py-lg-5')
          template
            .text-muted.text-center.mb-3
              small Sign in with
            .btn-wrapper.text-center
              base-button(type='neutral')
                img(slot='icon', src='img/icons/common/github.svg')
                | Github
              base-button(type='neutral')
                img(slot='icon', src='img/icons/common/google.svg')
                | Google
          template
            .text-center.text-muted.mb-4
              small Or sign in with credentials
            form(role='form', autocomplete='off', @submit.stop.prevent='handleSubmit')
              base-input.mb-3#email(v-model='email', type='email', autofocus='true', placeholder='Email', required='', addon-left-icon='ni ni-email-83')
              base-input#password(v-model='password', type='password', autofocus='true', placeholder='Password', required='', addon-left-icon='ni ni-lock-circle-open')
              base-checkbox
                | Remember me
              .text-center
                button.btn.btn-primary.btn-block.mt-3(:disabled='loading', type='submit') Sign In
        .row.mt-3
          .col-6
            a.text-light(href='#')
              small Forgot password?
          .col-6.text-right
            nuxt-link(to="/register").text-light
              small Create new account

</template>

<script>
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);
import { mapMutations } from "vuex";
export default {
  name: "home",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      colorx: "#6c84c7",
      colorx2: "#8998a9"
    };
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true;
        const response = await strapi.login(this.email, this.password);
        this.loading = false;
        this.setUser(response.user);
        this.$router.push("/account");
      } catch (err) {
        this.loading = false;
        alert(err.message || "An error occurred.");
      }
    },
    ...mapMutations({
      setUser: "auth/setUser"
    })
  }
};
</script>

<style>
</style>

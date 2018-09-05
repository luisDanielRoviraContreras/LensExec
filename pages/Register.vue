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
                small Or sign up with credentials
              form(role='form', autocomplete='off', @submit.stop.prevent='handleSubmit')
                base-input#username.mb-3(v-model='username', placeholder='Username', addon-left-icon='ni ni-hat-3')
                base-input#email.mb-3(v-model='email', alternative='', placeholder='Email', addon-left-icon='ni ni-email-83')
                base-input#password(v-model='password', alternative='', type='password', placeholder='Password', addon-left-icon='ni ni-lock-circle-open')
                .text-muted.font-italic
                  small
                    | password strength:
                    span.text-success.font-weight-700 strong
                base-checkbox
                  span
                    | I agree with the 
                    nuxt-link(to="/policy") Privacy Policy
                .text-center
                  button.btn.btn-primary.btn-block.mt-3(:disabled='loading', type='submit') Create account
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
      username: "",
      loading: false,
      colorx: "#6c84c7",
      colorx2: "#8998a9"
    };
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true;
        const response = await strapi.register(
          this.username,
          this.email,
          this.password
        );
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

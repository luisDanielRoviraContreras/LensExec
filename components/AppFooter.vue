<template lang="pug">
  footer.footer.has-cards
    .container.container-lg
      //- .row
        .col-md-6.mb-5.mb-md-0
          .card.card-lift--hover.shadow.border-0
            router-link(to='/landing', title='Landing Page')
              img.card-img(v-lazy="'img/theme/landing.jpg'")
        .col-md-6.mb-5.mb-lg-0
          .card.card-lift--hover.shadow.border-0
            router-link(to='/profile', title='Profile Page')
              img.card-img(v-lazy="'img/theme/profile.jpg'")
    .container
      .row.row-grid.align-items-center.my-md
        .col-lg-6
          h3.text-primary.font-weight-light.mb-2 Thank you for trusting us!
          h4.mb-0.font-weight-light Let's get in touch on any of these platforms.
        .col-lg-6.text-lg-center.btn-wrapper
          a.btn.btn-neutral.btn-icon-only.btn-twitter.btn-round.btn-lg(target='_blank', href='https://twitter.com/execlens', data-toggle='tooltip', data-original-title='Follow us')
            i.fa.fa-twitter
          a.btn.btn-neutral.btn-icon-only.btn-facebook.btn-round.btn-lg(target='_blank', href='https://www.facebook.com/lensexec', data-toggle='tooltip', data-original-title='Like us')
            i.fa.fa-facebook-square
          a.btn.btn-neutral.btn-icon-only.btn-dribbble.btn-lg.btn-round(target='_blank', href='https://linkedin.com/lensexec', data-toggle='tooltip', data-original-title='Follow us')
            i.fa.fa-linkedin
          a.btn.btn-neutral.btn-icon-only.btn-dribbble.btn-lg.btn-round(target='_blank', href='https://instagram.com/lensexec', data-toggle='tooltip', data-original-title='Follow us')
            i.fa.fa-instagram
      hr
      .row.align-items-center.justify-content-md-between
        .col-md-6
          .copyright
            | © 2018 
            a(href='https://lensexec.com', target='_blank') LensExec
            | . Corporate Photography.
        .col-md-6
          ul.nav.nav-footer.justify-content-end
            li.nav-item
              nuxt-link(to="/policies")
                .nav-link.footer.footer-link Cancellation & Rescheduling Policy
</template>
<script>
export default {};
</script>
<style>
</style>

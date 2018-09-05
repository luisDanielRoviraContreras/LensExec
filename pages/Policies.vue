<template lang="pug">
div
  .position-relative
    // submenu
    section.section-shaped.my-0
      .shape.shape-style-1.shape-default.shape-skew
        span
        span
        span
        span
        span
        span
      .container.shape-container.d-flex.policies
        vs-row
          vs-col(vs-order="1",vs-justify="left", vs-align="left", vs-lg="12", vs-sm="12").text-left
            h1.display-3.text-white
                | Cancellation & Rescheduling Policy
    .container.shape-container.d-flex.policies
        vs-row
          vs-col(vs-order="1",vs-justify="left", vs-align="left", vs-lg="12", vs-sm="12").text-left
            p
            | Your appointments are very important to the LensExec team. They are reserved especially for you. And we do understand that sometimes schedule adjustments are necessary.
            | No charges will apply for the first schedule change, then $100 each. No more than 4 changes are allowed, it will result in a charge equal to 100% of the reserved service amount.
            | We respectfully request at least 24-hour notice for cancellations or rescheduling of appointments. Please understand that when you forget, cancel, or change your appointment without giving enough notice, we miss the opportunity to fill that appointment time, and clients on our wait list miss the opportunity to receive services.
            | We value our staff’s time. And understand that they have other gigs, family, and friends with whom they could be spending time. CEOportrait pays it's staff the entire wage for any missed or late canceled appointment out of respect for their valuable time. Therefore, we have a strictly enforced 24-hour cancellation and rescheduling policy.
            | Any appointment missed, late canceled, or changed without 24-hour notice will result in a charge equal to 100% of the reserved service amount.
            | Please understand that it is your responsibility to remember your appointment dates and times in order to prevent any missed appointments.
            | Any late arrival will shorten your appointment time and will not be made up by running into the next client’s scheduled appointment. We recognize that the set appointment time frames may differ from the actual appointment by 10-15 minutes based on shift changes, traffic, and personal needs of our photographer and clients.
            | It is mutually understood that if a cancellation is due to circumstances beyond any of our control, such as power outage, unfortunate incidence, or weather that requires you or us to have to cancel or be closed during regular business hours, we will reschedule your existing appointment and no charges will apply.
            | We feel that it is only fair that we honor the same policies to our clients. If we have to cancel a client with less than 24 hours notice of the appointment scheduled, we will honor the same policy and your next appointment will be free of charge. 
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
<style>
.container.shape-container.d-flex.policies {
  padding-top: 7rem !important;
  padding-bottom: 12rem !important;
}
</style>

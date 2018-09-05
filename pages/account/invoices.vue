<template lang="pug">
  div
    .profile-page
      section.section.section-skew.profilecard
        .container
          card.card-profile(shadow='', no-body='')
            .px-4
              .row.justify-content-center
                .col-lg-3.order-lg-2
                  .card-profile-image
                    a(href='#')
                       img.rounded-circle(src='/static/img/theme/team-4-800x800.jpg')
                .col-lg-4.order-lg-3.text-lg-right.align-self-lg-center
                  .card-profile-actions.py-4.mt-lg-0
                    nuxt-link(to="/account/invoices")
                      base-button.mr-4(type='info', size='sm') My Invoices
                    nuxt-link(to="/account/")
                      base-button.float-right(type='default', size='sm') My Photos
                .col-lg-4.order-lg-1
                  .card-profile-stats.d-flex.justify-content-center
                    div
                      span.heading {{ user.realname }}
                      span.description company
      section.section-shaped.my-0(v-for='project in projects', :key='project.id')
        .shape.shape-style-1.shape-default.shape-skew
        .container.shape-container.d-flex.packagesheader
          vs-row(vs-type='flex')
            vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12", vs-lg="12", vs-sm="12").text-center
              .photosheadertext <strong>{{ project.name }}</strong>
              .photossubtext {{ project.description || 'No description provided' }}
              hr.style-two
              vs-row(vs-justify='left').gallery
                vs-col(vs-type='flex', vs-justify='center', vs-align='center', vs-lg="4", vs-sm="12", v-for='image in project.image', :key='image.id')
                  vs-card.cardx.con-vs-card.withHover
                    div(slot='header')
                      .photoname
                        | <strong>{{ image.name }}</strong>
                    div(slot='media', @click='modalShow = !modalShow')
                      img(:src='image.url')
                    div
                      .photosize
                        | {{ image.size }} kb
                    div(slot='footer')
                      vs-row(vs-justify='flex-end')
                        a(:href='image.url')
                          vs-button.fa.fa-cloud-download(type='submit', vs-color='rgb(230,230,230)', vs-color-text='rgb(50,50,50)')
          p(v-if='!projects.length') No results :(   
                     
</template>
<script>
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

export default {
  name: "home",
  components: {},
  data() {
    return {
      colorx: "#6c84c7",
      colorx2: "#8998a9",
      modalShow: false
    };
  },
  computed: {
    user() {
      return this.$store.getters["auth/getUser"];
    },
    projects() {
      return this.$store.getters["projects/list"];
    }
  },

  async fetch({ store }) {
    store.commit("projects/emptyList");
    const response = await strapi.request("post", "/graphql", {
      data: {
        query: `query {
            projects (where: {user:"${store.state.auth.user.id}"}){
              _id
              name
              user {
                _id
              }
              image {
                  _id
                  name
                  url
                  size
                }
              }
            }
          `
      }
    });
    response.data.projects.forEach(project => {
      project.image.url = `${project.image.url}`;
      store.commit("projects/add", {
        id: project.id || project._id,
        ...project
      });
    });
  }
};
</script>
<style>
.cardx {
  margin: 15px;
}
.profile-page {
  padding-top: 170px !important;
}
.whitebg {
  background-color: #ffffff;
}
.mainphotostext {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  padding-top: 30px;
  padding-bottom: 20px;
  color: #666666;
}
.phonenumber {
  font-family: san francisco;
  font-size: 20px;
}
.phonesub {
  font-family: san francisco;
  font-size: 10px;
}
.logodivider {
  width: 60px;
  margin-bottom: -30px;
}
section.section.section-sm.whitebg.phonenumberssection {
  padding-top: 0px !important;
  margin-top: -13px;
}
.container.shape-container.d-flex.packagesheader {
  padding-top: 5rem !important;
  padding-bottom: 17rem !important;
}
.photosheadertext {
  color: white;
  font-family: san francisco;
  font-size: 27px;
  padding-top: 0px;
  margin-top: -93px;
}
.photossubtext {
  padding-bottom: 11px;
  padding-top: 6px;
  color: #dedede;
}
hr.style-two {
  border: 0;
  height: 1px;
  margin-bottom: 8px !important;
  margin-top: 8px !important;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(0, 0, 0, 0)),
    color-stop(rgba(0, 0, 0, 0.12)),
    to(rgba(0, 0, 0, 0))
  );
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.12),
    rgba(0, 0, 0, 0)
  );
}
hr.blank {
  margin-top: 0px !important;
  border-top: inherit !important;
}
.vs-row.gallery {
  padding-top: 8px;
}

.section-shaped .shape-skew {
  -webkit-transform: skewY(-8deg);
  transform: skewY(-8deg);
  -webkit-transform-origin: 0;
  transform-origin: 0;
}
.section-shaped .shape {
  position: absolute;
  top: -13px !important;
  z-index: -1;
  width: 100% !important;
  height: 450px !important;
}
.photoname,
.photosize {
  font-family: san francisco;
  color: #615e5e;
}
</style>
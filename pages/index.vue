<template lang="pug">
  div
    // hero images
    section.section.section-sm.my-0.whitebg.headerimagesblock
      vs-row(vs-type='flex')
        vs-col(vs-order="1", vs-type="flex", vs-justify="center", vs-align="center", vs-lg="3", vs-sm="6")
          vs-col(vs-align="center").text-center
            vs-tooltip(position="bottom", text="Capture your best image and overall tone you intend to project for prospective clients and colleagues. customized  lighting and vignettes to highlight your best features.")
              .mainphotostext
                | CORPORATE PORTRAITS
              img.img-center.img-fluid.shadow.shadow-lg--hover(:src="'img/theme/LensExec-Corporate-Portraits.jpg'")
        vs-col(vs-order="1", vs-type="flex", vs-justify="center", vs-align="center", vs-lg="3", vs-sm="6") 
          vs-col(vs-align="center").text-center
            vs-tooltip(position="bottom", text="Corporate event photography is essential for social media and editorial purposes; promote product launches, seminars, conferences, retreats, shareholder meetings, presentations.")
              .mainphotostext
                | LINKEDIN PROFILE
              img.img-center.img-fluid.shadow.shadow-lg--hover(:src="'img/theme/LensExec-Media-Press-Photography.jpg'")
        vs-col(vs-order="1", vs-type="flex", vs-justify="center", vs-align="center", vs-lg="3", vs-sm="6")
          vs-col(vs-align="center").text-center
            vs-tooltip(position="bottom", text="Corporate or executive headshots need to convey who an individual is in an instant, from a professional perspective.")
              .mainphotostext
                | TEAM PHOTOS
              img.img-center.img-fluid.shadow.shadow-lg--hover(:src="'img/theme/LensExec-Team-Photos.jpg'")
        vs-col(vs-order="1", vs-type="flex", vs-justify="center", vs-align="center", vs-lg="3", vs-sm="6")
          vs-col(vs-align="center").text-center
            vs-tooltip(position="bottom", text="On-location environmental portraits at your office tells a story and adds legitimacy. It's the most contemporary style to highlight company culture.")
              .mainphotostext
                | ON-LOCATION
              img.img-center.img-fluid.shadow.shadow-lg--hover(:src="'img/theme/LensExec-Linkedin-Social-Media.jpg'") 
    // phone numbers
    section.section.section-sm.whitebg.phonenumberssection.text-center
      .container.shape-container.d-flex
        vs-row(vs-type='flex')
          // United States
          vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-lg="6", vs-sm="12").text-center
            .mainphotostext UNITED STATES
            // NY
            vs-col(vs-order="1", vs-type="flex", vs-justify="center", vs-align="center", vs-lg="6", vs-sm="12").text-center
              vs-col(vs-order="1", vs-type="flex", vs-justify="center", vs-align="center", vs-w="3").text-center
                img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover(:src="'img/theme/NY.png'")
              vs-col(vs-order="2", vs-justify="left", vs-align="left", vs-w="9").text-left
                .phonenumber +1 <strong>315-888-3128</strong>
                .phonesub New York, Manhattan
            // PA
            vs-col(vs-order="1", vs-type="flex", vs-justify="center", vs-align="center", vs-lg="6", vs-sm="12").text-center
              vs-col(vs-order="1", vs-type="flex", vs-justify="center", vs-align="center", vs-w="3").text-center
                img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover(:src="'img/theme/PA.png'")
              vs-col(vs-order="2", vs-justify="left", vs-align="left", vs-w="9").text-left
                .phonenumber +1 <strong>484-861-3425</strong>
                .phonesub Pennsylvania, Philadelphia
          // Europe
          vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-lg="6", vs-sm="12").text-center
            .mainphotostext EUROPE
            // UK
            vs-col(vs-order="1", vs-type="flex", vs-justify="center", vs-align="center", vs-lg="6", vs-sm="12").text-center
              vs-col(vs-order="1", vs-type="flex", vs-justify="center", vs-align="center", vs-w="3").text-center
                img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover(:src="'img/theme/UK.png'")
              vs-col(vs-order="2", vs-justify="left", vs-align="left", vs-w="9").text-left
                .phonenumber +44 <strong>800-088-5778</strong>
                .phonesub United Kingdom, London
            // DE
            vs-col(vs-order="1", vs-type="flex", vs-justify="center", vs-align="center", vs-lg="6", vs-sm="12").text-center
              vs-col(vs-order="1", vs-type="flex", vs-justify="center", vs-align="center", vs-w="3").text-center
                img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover(:src="'img/theme/DE.png'")
              vs-col(vs-order="2", vs-justify="left", vs-align="left", vs-w="9").text-left
                .phonenumber +49 <strong>178-4576791</strong>
                .phonesub Germany, Frankfurt
    // Logo Divider
    section.whitebg
      .container.shape-container.d-flex
        vs-row(vs-type='flex')
          vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12", vs-lg="12", vs-sm="12").text-center
            img.img-center.img-fluid.logodivider(:src="'img/theme/LogoDivider.png'")
    .position-relative
      // SESSION PACKAGES
      section.section-shaped.my-0.overflow-hidden
        .shape.shape-style-1.shape-default.shape-skew
          span
          span
          span
          span
        .container.shape-container.d-flex.packagesheader
          vs-row(vs-type='flex')
            vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12", vs-lg="12", vs-sm="12").text-center
              .packagesheadertext <strong>CEO SESSION</strong> PACKAGES
    // Startup Pack
    section.section.section-lg.pt-lg-0.mt--200.ceopackages
      .container
        vs-row(vs-type='flex')
          vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-lg="4", vs-sm="12").text-center
            card.border-0.packages(hover='', shadow='')
              vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center.whitebg
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12", style="background-color:#eeeeef").text-center
                  .packheader <strong>STARTUP</strong> PACK
                  img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover.packpic(:src="'img/theme/10.png'", style='width: 200px;')
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center
                  .packprice $<span>399</span>.00
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center
                  .packoption Up to <strong>30 mins</strong> photoshoot
                  hr.style-two
                  .packoption <strong>5</strong> color corrected pictures
                  hr.style-two
                  .packoption <strong>1</strong> retouched picture
                  hr.style-two
                  vs-tooltip(position="right", text="Secured Cloud platform for your convenience. Access your photos at any time, and view your billing history.")
                    .packoption LensApp Access 
                      i(class="fa  fa-question-circle-o")
                  hr.style-two
                  .packoption <strong>1</strong> outfit
                  hr.style-two
                  .packoption Same Day Turnaround
                  hr.style-two
                  .packoption No hidden fees
                  hr.style-two
                  .packoption Unlimited Usage Rights
                  hr.style-two
                  vs-tooltip(position="right", text="We can photograph you with the logo of your company, at your desk, and in many other iterations to make for a unique executive portrait. On location headshot photography is modern, different, and intriguing, and can stand out in a sea of studio shoots for the untraditional and enterprising CEO. On-location environmental portraits at your office tells a story and adds legitimacy. It's the most contemporary style to highlight company culture.")
                    .packoption On-Location 
                      i(class="fa  fa-question-circle-o")
                  hr.style-two
                  .packoption 100% satisfaction guarantee
                  hr.blank
                  vs-button(:vs-color="colorx", vs-type="line", vs-icon="menu").reserve RESERVE
          vs-col(vs-order="2", vs-justify="center", vs-align="center", vs-lg="4", vs-sm="12").text-center
            card.border-0.packages(hover='', shadow='')
              vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center.whitebg
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12", style="background-color:#eeeeef").text-center
                  .packheader <strong>PRO</strong> PACK
                  img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover.packpic(:src="'img/theme/11.png'", style='width: 200px;')
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center
                  .packprice $<span>599</span>.00
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center
                  .packoption Up to <strong>1 hour</strong> photoshoot
                  hr.style-two
                  .packoption <strong>10</strong> color corrected pictures
                  hr.style-two
                  .packoption <strong>5</strong> retouched pictures
                  hr.style-two
                  vs-tooltip(position="right", text="Secured Cloud platform for your convenience. Access your photos at any time, and view your billing history.")
                    .packoption LensApp Access 
                      i(class="fa  fa-question-circle-o")
                  hr.style-two
                  .packoption Up to <strong>2</strong> outfits
                  hr.style-two
                  .packoption <strong>Professional Makeup and Hair</strong>
                  hr.style-two
                  .packoption No hidden fees
                  hr.style-two
                  .packoption Unlimited Usage Rights
                  hr.style-two
                  vs-tooltip(position="right", text="We can photograph you with the logo of your company, at your desk, and in many other iterations to make for a unique executive portrait. On location headshot photography is modern, different, and intriguing, and can stand out in a sea of studio shoots for the untraditional and enterprising CEO. On-location environmental portraits at your office tells a story and adds legitimacy. It's the most contemporary style to highlight company culture.")
                    .packoption On-Location or outdoor 
                      i(class="fa  fa-question-circle-o")
                  hr.style-two
                  .packoption 100% satisfaction guarantee
                  hr.blank
                  vs-button(:vs-color="colorx", vs-type="line", vs-icon="menu").reserve RESERVE
          vs-col(vs-order="3", vs-justify="center", vs-align="center", vs-lg="4", vs-sm="12").text-center
            card.border-0.packages(hover='', shadow='')
              vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center.whitebg
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12", style="background-color:#eeeeef").text-center
                  .packheader <strong>ENTERPRISE</strong> PACK
                  img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover.packpic(:src="'img/theme/12.png'", style='width: 200px;')
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center
                  .packprice $<span>899</span>.00
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center
                  .packoption Up to <strong>2 hours</strong> photoshoot
                  hr.style-two
                  .packoption <strong>30</strong> color corrected pictures
                  hr.style-two
                  .packoption <strong>10</strong> Retouched Pictures
                  hr.style-two
                  vs-tooltip(position="right", text="Secured Cloud platform for your convenience. Access your photos at any time, and view your billing history.")
                    .packoption LensApp Access 
                      i(class="fa  fa-question-circle-o")
                  hr.style-two
                  .packoption Up to <strong>4</strong> outfits
                  hr.style-two
                  .packoption <strong>2 Makeup and Hair looks</strong>
                  hr.style-two
                  .packoption No hidden fees
                  hr.style-two
                  .packoption Unlimited Usage Rights
                  hr.style-two
                  vs-tooltip(position="right", text="We can photograph you with the logo of your company, at your desk, and in many other iterations to make for a unique executive portrait. On location headshot photography is modern, different, and intriguing, and can stand out in a sea of studio shoots for the untraditional and enterprising CEO. On-location environmental portraits at your office tells a story and adds legitimacy. It's the most contemporary style to highlight company culture.")
                    .packoption On-Location or outdoor 
                      i(class="fa  fa-question-circle-o")
                  hr.style-two
                  .packoption 100% satisfaction guarantee
                  hr.blank
                  vs-button(:vs-color="colorx", vs-type="line", vs-icon="menu").reserve RESERVE
    .position-relative
      // TEAM PACKAGES
      section.section-shaped.my-0
        .shape.shape-style-1.shape-default.shape-skew
          span
          span
          span
          span
          span
          span
        .container.shape-container.d-flex.packagesheader
          vs-row(vs-type='flex')
            vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12", vs-lg="12", vs-sm="12").text-center
              .packagesheadertext <strong>CORPORATE</strong> TEAM PACKAGES
    // Team Pack #1
    section.section.section-lg.pt-lg-0.mt--200.teampackages
      .container
        vs-row(vs-type='flex')
          vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-lg="4", vs-sm="12", style="padding=20px;").text-center
            card.border-0.packages(hover='', shadow='')
              vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center.whitebg
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12", style="background-color:#eeeeef").text-center
                  .teampackheader <strong>GLOBAL</strong> TEAM PACK
                  img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover.packpic.left(:src="'img/theme/t0101.png'", style='width: 130px;')
                  img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover.packpic.top(:src="'img/theme/t0102.png'", style='width: 130px;')
                  img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover.packpic.right(:src="'img/theme/t0103.png'", style='width: 130px;')
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center
                  .packprice $<span>1,299</span>.00
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center
                  .packoption Up to <strong>5 people</strong> - One day
                  hr.style-two
                  .packoption <strong>1</strong> retouched picture per person
                  hr.style-two
                  vs-tooltip(position="right", text="Secured Cloud platform for your convenience. Access your photos at any time, and view your billing history.")
                    .packoption LensApp Access 
                      i(class="fa  fa-question-circle-o")
                  hr.style-two
                  .packoption Professional backdrop/lighting
                  hr.style-two
                  .packoption No hidden fees
                  hr.style-two
                  .packoption Unlimited Usage Rights
                  hr.style-two
                  vs-tooltip(position="right", text="We can photograph you with the logo of your company, at your desk, and in many other iterations to make for a unique executive portrait. On location headshot photography is modern, different, and intriguing, and can stand out in a sea of studio shoots for the untraditional and enterprising CEO. On-location environmental portraits at your office tells a story and adds legitimacy. It's the most contemporary style to highlight company culture.")
                    .packoption On-Location 
                      i(class="fa  fa-question-circle-o")
                  hr.style-two
                  .packoption 100% satisfaction guarantee
                  hr.blank
                  vs-button(:vs-color="colorx", vs-type="line", vs-icon="menu").reserve RESERVE
          vs-col(vs-order="2", vs-justify="center", vs-align="center", vs-lg="4", vs-sm="12").text-center
            card.border-0.packages(hover='', shadow='')
              vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center.whitebg
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12", style="background-color:#eeeeef").text-center
                  .teampackheader <strong>GALACTIC</strong> TEAM PACK
                  img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover.packpic.left(:src="'img/theme/t0201.png'", style='width: 130px;')
                  img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover.packpic.top(:src="'img/theme/t0202.png'", style='width: 130px;')
                  img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover.packpic.right(:src="'img/theme/t0203.png'", style='width: 130px;')
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center
                  .packprice $<span>2,799</span>.00
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center
                  .packoption Up to <strong>30 people</strong> - One day
                  hr.style-two
                  .packoption <strong>1</strong> retouched picture per person
                  hr.style-two
                  vs-tooltip(position="right", text="Secured Cloud platform for your convenience. Access your photos at any time, and view your billing history.")
                    .packoption LensApp Access 
                      i(class="fa  fa-question-circle-o")
                  hr.style-two
                  .packoption Professional backdrop/lighting
                  hr.style-two
                  .packoption No hidden fees
                  hr.style-two
                  .packoption Unlimited Usage Rights
                  hr.style-two
                  vs-tooltip(position="right", text="We can photograph you with the logo of your company, at your desk, and in many other iterations to make for a unique executive portrait. On location headshot photography is modern, different, and intriguing, and can stand out in a sea of studio shoots for the untraditional and enterprising CEO. On-location environmental portraits at your office tells a story and adds legitimacy. It's the most contemporary style to highlight company culture.")
                    .packoption On-Location 
                      i(class="fa  fa-question-circle-o")
                  hr.style-two
                  .packoption 100% satisfaction guarantee
                  hr.blank
                  vs-button(:vs-color="colorx", vs-type="line", vs-icon="menu").reserve RESERVE
          vs-col(vs-order="3", vs-justify="center", vs-align="center", vs-lg="4", vs-sm="12").text-center
            card.border-0.packages(hover='', shadow='')
              vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center.whitebg
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12", style="background-color:#eeeeef").text-center
                  .teampackheader <strong>UNIVERSAL</strong> TEAM PACK
                  img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover.packpic.left(:src="'img/theme/t0301.png'", style='width: 130px;')
                  img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover.packpic.top(:src="'img/theme/t0302.png'", style='width: 130px;')
                  img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover.packpic.right(:src="'img/theme/t0303.png'", style='width: 130px;')
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center
                  .packprice $<span>4,799</span>.00
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center
                  .packoption Up to <strong>100 people</strong> - One day
                  hr.style-two
                  .packoption <strong>1</strong> retouched picture per person
                  hr.style-two
                  vs-tooltip(position="right", text="Secured Cloud platform for your convenience. Access your photos at any time, and view your billing history.")
                    .packoption LensApp Access 
                      i(class="fa  fa-question-circle-o")
                  hr.style-two
                  .packoption Professional backdrop/lighting
                  hr.style-two
                  .packoption No hidden fees
                  hr.style-two
                  .packoption Unlimited Usage Rights
                  hr.style-two
                  vs-tooltip(position="right", text="We can photograph you with the logo of your company, at your desk, and in many other iterations to make for a unique executive portrait. On location headshot photography is modern, different, and intriguing, and can stand out in a sea of studio shoots for the untraditional and enterprising CEO. On-location environmental portraits at your office tells a story and adds legitimacy. It's the most contemporary style to highlight company culture.")
                    .packoption On-Location 
                      i(class="fa  fa-question-circle-o")
                  hr.style-two
                  .packoption 100% satisfaction guarantee
                  hr.blank
                  vs-button(:vs-color="colorx", vs-type="line", vs-icon="menu").reserve RESERVE
    // CUSTOM QUOTE FORM
    section.section-shaped.my-0
      .shape.shape-style-1.shape-default.shape-skew
      .container.shape-container.d-flex.packagesheader
        vs-row(vs-type='flex')
          vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12", vs-lg="12", vs-sm="12").text-center
            .packagesheadertext NEED A <strong>CUSTOM QUOTE</strong>?
            p.lead.text-white
              | We are flexible in creating the best pricing match for your corporate needs!
              | You can reach us on any platform 24/7. 
              | Use the form below, the live chat (at the bottom right of the page), or call one of our phone lines (at the top of our website).
    section.section.section-lg.pt-lg-0.section-contact-us
      .container
        .row.justify-content-center.mt--200
          .col-lg-8
            card(gradient='secondary', shadow='', body-classes='p-lg-5')
              h4.mb-1 Contact form
              p.mt-0 Your project is very important to us. Use this form to send us an email. We typically respond within an hour.
              base-input.mt-5(alternative='', placeholder='Your name', addon-left-icon='ni ni-user-run')
              base-input(alternative='', placeholder='Email address', addon-left-icon='ni ni-email-83')
              base-input.mb-4
                textarea.form-control.form-control-alternative(name='name', rows='4', cols='80', placeholder='Type a message...')
              base-button(type='default', round='', block='', size='lg')
                | Send Message
    // 24/7 Suppport & Competition
    section.section.bg-secondary
      .container
        vs-row
          vs-col(vs-order="1",vs-justify="center", vs-align="center", vs-lg="6", vs-sm="12").text-center
            .card.bg-default.shadow.border-0
              img.card-img-top(:src="'img/theme/support.jpg'")
              blockquote.card-blockquote
                svg.svg-bg(preserveAspectRatio='none', xmlns='http://www.w3.org/2000/svg', viewBox='0 0 583 95')
                  polygon.fill-default(points='0,52 583,95 0,95')
                  polygon.fill-default(points='0,42 583,95 683,0 0,95', opacity='.2')
                h4.display-3.font-weight-bold.text-white 24/7 Support
                p.lead.text-italic.text-white
                  | We offer 24/7 Customer Service so you can contact us 
                  | anytime you need help with billing, questions,
                  | general information, special requests, and more. 
                  p.lead.text-italic.text-white Our Photo Support Experts and Customer Service representatives are here to answer your questions.
                  p.lead.text-italic.text-white The photography you need is only a click or call away.
          vs-col(vs-order="2",vs-justify="center", vs-align="center", vs-lg="6", vs-sm="12").text-center
            icon.mb-5(name='fa fa-bolt', size='lg', type='Primary', shadow='', rounded='')
            p Same/Next Day Delivery
              hr.style-two
            p 24/7 Online Support
              hr.style-two
            p Client Web App
              hr.style-two
            p Professional Photo Retouching
              hr.style-two
            p Fixed Rates
              hr.style-two
            p Debit/Credit, Bitcoin, Ethereum, Google Pay, Apple Pay...
              hr.style-two
            p Portable Studio on Demand
              hr.style-two
            p Professional Makeup and Hair (on selected packages)
              hr.style-two
            p Always available to assist you
              hr.style-two
            a.font-weight-bold.text-warning.mt-5
              | We are exclusively corporate!
    section.section.section.section-shaped.my-0.overflow-hidden
      .shape.shape-style-1.bg-gradient-warning.shape-skew
        span
        span
        span
        span
        span
        span
      .container.py-0
        .row.row-grid.align-items-center
          .col-md-6.order-lg-2.ml-lg-auto
            .position-relative.pl-md-5
              img.img-center.img-fluid(src='img/ill/ill-2.svg')
          .col-lg-6.order-lg-1
            .d-flex.px-3
              div
                icon.bg-gradient-white(name='fa fa-user', size='lg', color='primary', shadow='', rounded='')
              .pl-4
                h4.display-3.text-white Headshots
                p.text-white
                  | Whether you need a new Linked In portrait, your workforce needs a new set of headshots for your website, or you are a startup company who wants to break into the industry, LensExec will capture your best face in the best light, with all flaws removed.
            card.shadow-lg--hover.mt-5(shadow='')
              .d-flex.px-3
                div
                  icon(name='ni ni-active-40', gradient='danger', color='white', shadow='', rounded='')
                .pl-4
                  h5.title.text-warning Expert Touchups
                  p
                    | With 12+ years of graphic design, branding, marketing, social media and photography experience, we have the details down to a science.
                  //- a.text-success(href='#') Learn more
            card.shadow-lg--hover.mt-5(shadow='')
              .d-flex.px-3
                div
                  icon(name='ni ni-satisfied', gradient='success', color='white', shadow='', rounded='')
                .pl-4
                  h5.title.text-success Flawless
                  p
                    | The perfect portrait doesn’t stop at the shoot. Post production is essential for all shoots, to make sure that each photo is flawless. If a flaw can be found, it can be fixed.
    section.section.section-lg
      .container
        .row.row-grid.justify-content-center
          .col-lg-8.text-center
            h2.display-3
              | Do you think it's time to
              span.text-success be the Face of your Company?
            p.lead
              | Cause if you do, we are here to help 24/7. Hit the button below to get started.
              | A picture is worth a thousand words, tell your story with LensExec!
            .btn-wrapper
              a.btn.btn-primary.mb-3.mb-sm-0(href='/getstarted') Get Started
            .text-center
              h4.display-4.mb-5.mt-5 Available in these areas
              .row.justify-content-center
        // phone numbers
        section.section.section-sm.whitebg.phonenumberssection
          .container.shape-container.d-flex
            vs-row(vs-type='flex')
              // United States
              vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="6", vs-lg="6", vs-sm="12").text-center
                .mainphotostext UNITED STATES
                // NY
                vs-col(vs-order="1", vs-type="flex", vs-justify="center", vs-align="center", vs-w="6", vs-lg="6", vs-sm="12").text-center
                  vs-col(vs-order="1", vs-type="flex", vs-justify="center", vs-align="center", vs-w="3").text-center
                    img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover(:src="'img/theme/NY.png'")
                  vs-col(vs-order="2", vs-justify="left", vs-align="left", vs-w="9").text-left
                    .phonenumber +1 <strong>315-888-3128</strong>
                    .phonesub New York, Manhattan
                // PA
                vs-col(vs-order="1", vs-type="flex", vs-justify="center", vs-align="center", vs-w="6", vs-lg="6", vs-sm="12").text-center
                  vs-col(vs-order="1", vs-type="flex", vs-justify="center", vs-align="center", vs-w="3").text-center
                    img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover(:src="'img/theme/PA.png'")
                  vs-col(vs-order="2", vs-justify="left", vs-align="left", vs-w="9").text-left
                    .phonenumber +1 <strong>484-861-3425</strong>
                    .phonesub Pennsylvania, Philadelphia
              // Europe
              vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="6", vs-lg="6", vs-sm="12").text-center
                .mainphotostext EUROPE
                // UK
                vs-col(vs-order="1", vs-type="flex", vs-justify="center", vs-align="center", vs-w="6", vs-lg="6", vs-sm="12").text-center
                  vs-col(vs-order="1", vs-type="flex", vs-justify="center", vs-align="center", vs-w="3").text-center
                    img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover(:src="'img/theme/UK.png'")
                  vs-col(vs-order="2", vs-justify="left", vs-align="left", vs-w="9").text-left
                    .phonenumber +44 <strong>800-088-5778</strong>
                    .phonesub United Kingdom, London
                // DE
                vs-col(vs-order="1", vs-type="flex", vs-justify="center", vs-align="center", vs-w="6", vs-lg="6", vs-sm="12").text-center
                  vs-col(vs-order="1", vs-type="flex", vs-justify="center", vs-align="center", vs-w="3").text-center
                    img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover(:src="'img/theme/DE.png'")
                  vs-col(vs-order="2", vs-justify="left", vs-align="left", vs-w="9").text-left
                    .phonenumber +49 <strong>178-4576791</strong>
                    .phonesub Germany, Frankfurt
    // TESTIMONIALS
    section.section-shaped.my-0.overflow-hidden
      .shape.shape-style-1.shape-default.shape-skew
      .container.shape-container.d-flex.packagesheader
        vs-row(vs-type='flex')
          vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12", vs-lg="12", vs-sm="12").text-center
            .packagesheadertext LET THEM <strong>SPEAK</strong> FOR US!
            p.lead.text-white
              | Some impressions from our customers!
    section.section.section-lg.pt-lg-0.mt--200.ceopackages
      .container
        vs-row(vs-type='flex')
          vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-lg="4", vs-sm="12", style="padding=20px;").text-center
            card.border-0.packages(hover='', shadow='')
              vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12", style="background-color:#eeeeef").text-center
                  .testiname <strong>Nick Jonas</strong> 
                  .testisub CEO, Founder - JPS Hardware
                  img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover.packpic(:src="'img/theme/Nick-Jonas.jpg'", style='width: 200px;')
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center
                  .testidate Aug. 12, 2018
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center
                  .testitext Having my picture taken is something I always disliked. George from LensExec made me feel very comfortable in front of the lens! Thank you, it was the best photography session of my life.
          vs-col(vs-order="2", vs-justify="center", vs-align="center", vs-lg="4", vs-sm="12", style="padding=20px;").text-center
            card.border-0.packages(hover='', shadow='')
              vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12", style="background-color:#eeeeef").text-center
                  .testiname <strong>Dr. Cindy Malewsky, PhD</strong> 
                  .testisub Director - LamaLabs
                  img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover.packpic(:src="'img/theme/dr-Cindy-Malewsky.jpg'", style='width: 200px;')
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center
                  .testidate Aug. 25, 2018
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center
                  .testitext Honestly, the attention we received in public and personal comments after we posted the photos on social media, was such an amazing booster. LensExec team, can't wait to have you over next year!
          vs-col(vs-order="3", vs-justify="center", vs-align="center", vs-lg="4", vs-sm="12", style="padding=20px;").text-center
            card.border-0.packages(hover='', shadow='')
              vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12", style="background-color:#eeeeef").text-center
                  .testiname <strong>Helena O.</strong> 
                  .testisub Media Director
                  img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover.packpic(:src="'img/theme/Helena-O.jpg'", style='width: 200px;')
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center
                  .testidate Aug. 17, 2018
                vs-col(vs-order="1", vs-justify="center", vs-align="center", vs-w="12").text-center
                  .testitext LensExec guys really know what they ‘re doing! One of the most professional and extroverted teams we had the pleasure of working with. Looking forward in working with you soon. 
      .container
        card.border-0(gradient='warning', no-body='', shadow-size='lg')
          .p-5
            .row.align-items-center
              .col-lg-9
                h3.text-white We made photography experience easier for you.
                p.lead.text-white.mt-3
                  | We work with high end equipment, lightning speed internet platforms, quality products,
                  | worth thousands of dollars, because we got the answers. We understand corporate needs.
              .col-lg-3.ml-lg-auto
                base-button(tag='a', href='/getstarted', type='white', block='', size='lg')
                  | Get Started
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      colorx: "#6c84c7",
      colorx2: "#8998a9"
    };
  }
};
</script>
<style>
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
.packagesheadertext {
  color: #ffffff;
  font-family: san francisco;
  font-size: 22px;
  letter-spacing: 5px;
}
.teampackages .card-body,
.ceopackages .card-body {
  padding: 0px !important;
}

.card {
  border-radius: 0px !important;
  /* width: 90% !important; */
}
img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover.packpic {
  width: 140px !important;
  margin-bottom: -70px;
}
.packheader {
  padding-top: 20px;
  padding-bottom: 16px;
  font-family: san francisco;
  letter-spacing: 3px;
  color: #111111;
}

.teampackheader {
  padding-top: 20px;
  padding-bottom: 34px;
  font-family: san francisco;
  letter-spacing: 3px;
  color: #111111;
}

.packprice {
  color: #999999;
  padding-top: 86px;
  font-family: san francisco;
  letter-spacing: 3px;
  font-size: 17px;
  padding-bottom: 18px;
}

.packprice span {
  font-size: 27px;
  /* font-weight: 900; */
}

.packoption {
  font-family: san francisco;
  font-size: 14px;
  color: #424242;
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
button.vs-component.vs-button.reserve.vs-button-null.vs-button-line.includeIcon {
  padding-top: 22px;
  padding-bottom: 23px;
  width: 100%;
  font-size: 17px;
  font-family: san francisco;
  font-weight: 600;
  letter-spacing: 2px;
  color: #111111;
  background-color: #eeeeef !important;
}
.vs-col.text-center.vs-xs-.vs-sm-12.vs-lg-4 {
  padding: 0 10px 40px 10px;
}
section.section.section-lg.pt-lg-0.mt--200.ceopackages {
  padding-bottom: 0px !important;
}
@media (min-width: 150px) {
  section.section.section-lg.pt-lg-0.mt--200.ceopackages {
    padding-top: 0px !important;
    margin-top: -195px !important;
  }
  section.section.section-lg.pt-lg-0.mt--200.teampackages {
    padding-top: 0px !important;
    margin-top: -195px !important;
    padding-bottom: 0px !important;
  }
}
img.img-fluid.location {
  padding: 2px;
}
p.lead.text-italic.text-white {
  font-size: 15px !important;
}
.vs-col.text-left.vs-xs-.vs-sm-.vs-lg- {
  padding-left: 4px;
}
.testiname {
  padding-top: 20px;
  font-family: san francisco;
  letter-spacing: 2px;
  color: #111111;
}
.testisub {
  padding-top: 8px;
  padding-bottom: 16px;
  font-family: san francisco;
  letter-spacing: 2px;
  color: #414141;
  font-size: 10px;
}

.testidate {
  color: #999999;
  padding-top: 86px;
  font-family: san francisco;
  letter-spacing: 1px;
  font-size: 14px;
  padding-bottom: 18px;
}
.testidate span {
  font-size: 27px;
  /* font-weight: 900; */
}

.testitext {
  font-family: san francisco;
  font-size: 14px;
  color: #424242;
  padding: 0 20px 20px 20px;
}
img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover.packpic.left {
  width: 102px !important;
  /* padding-top: 45px; */
  margin-left: 21px;
  margin-bottom: -110px;
}
img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover.packpic.top {
  z-index: 1 !important;
  position: relative;
  margin-bottom: -113px;
  width: 123px !important;
}
img.rounded-circle.img-center.img-fluid.shadow.shadow-lg--hover.packpic.right {
  width: 102px !important;
  margin-right: 20px;
  margin-bottom: -44px;
  /* margin-top: -77px; */
  position: static;
  /* display: table-header-group; */
}
.headerimagesblock {
  z-index: 1 !important;
}
</style>

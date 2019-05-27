<template>
    <div class="subscribe section-custom">
      <b-container>
          <b-row class="subscribe-items row">
              <b-col cols="12" md="5">
                <div class="subscribe-label">
                    <h3 class="section-title big">
                        Subscribe Us!
                    </h3>
                    <p>There are many variants of passages of avail able but the majority</p>
                </div>
              </b-col>
              <b-col cols="12" md="7" class="subscribe-form">
                  <b-row>
                      <b-col cols="5" md="10">
                          <b-form-input class="border-custom subscribe-input size-form-custom" id="input-none" :state="null" placeholder="Enter Your Email Here"></b-form-input>
                      </b-col>
                      <b-col cols="1" md="2">
                          <b-button class="border-custom subscribe-btn size-form-custom">Subscribe</b-button>
                      </b-col>
                  </b-row>
              </b-col>
          </b-row>
      </b-container>
    </div>
</template>

<script>
export default {
  name: 'Subscribe'
}
</script>

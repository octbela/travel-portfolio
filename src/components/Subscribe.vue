<template>
    <div class="subscribe section-custom">
      <b-container>
          <div class="subscribe-items">
              <div class="subscribe-label">
                  <h3>
                      Subscribe Us!
                  </h3>
                  <p>There are many variants of passages of avail able but the majority</p>
              </div>
              <!-- <div class="subscribe-input"> -->
              <b-form-input class="border-custom subscribe-input size-form-custom" id="input-none" :state="null" placeholder="Enter Your Email Here"></b-form-input>
              <!-- </div> -->
              <b-button class="border-custom subscribe-btn size-form-custom">Subscribe</b-button>
          </div>
      </b-container>
    </div>
</template>

<script>
export default {
  name: 'Subscribe'
}
</script>

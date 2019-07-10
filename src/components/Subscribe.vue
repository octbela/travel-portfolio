<template>
    <div class="section-subscribe section-custom">
        <div class="subscribe-items">
            <b-container class="container-subscribe-items">
                <div class="subscribe-label">
                    <h3 class="section-title big">
                        Subscribe Us!
                    </h3>
                    <p>There are many variants of passages of avail able but the majority</p>
                </div>
                <div class="subscribe-form">
                    <b-form-input class="border-custom subscribe-input size-form-custom" id="input-none" :state="null" placeholder="Enter Your Email Here"></b-form-input>
                    <b-button class="border-custom subscribe-btn size-form-custom">Subscribe</b-button>
                </div>
            </b-container>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Subscribe'
}
</script>

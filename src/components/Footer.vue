<template>
    <div class="Footer">
        <!-- <b-container> -->
            <Subscribe/>
            <b-container>
                <b-row>
                    <b-col cols="12" md="6">
                        <h3 class="section-title small">
                            <font-awesome-icon icon="suitcase-rolling" /> Travel
                        </h3>
                        <ul class="list-unstyled">
                            <li>
                                +6283848917538 | nabilahpermata6@gmail.com
                            </li>
                            <li>
                                <ul class="list-unstyled">
                                    <li>
                                    </li>
                                    <li>
                                        <font-awesome-icon icon="twitter" />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </b-col>
                    <b-col cols="6"  md="2">
                        <h3 class="section-title small">
                            Activities
                        </h3>
                        <ul class="list-unstyled">
                            <li>
                                Mountain Biking
                            </li>
                            <li>
                                Hiking
                            </li>
                            <li>
                                Destination
                            </li>
                        </ul>
                    </b-col>
                    <b-col cols="6"  md="2">
                        <h3 class="section-title small">
                            Booking
                        </h3>
                        <ul class="list-unstyled">
                            <li>
                                Ticket
                            </li>
                            <li>
                                Travel Product
                            </li>
                            <li>
                                Packages
                            </li>
                            <li>
                                Accomodation
                            </li>
                        </ul>
                    </b-col>
                    <b-col cols="12"  md="2">
                        <h3 class="section-title small">
                            Contact
                        </h3>
                        <ul class="list-unstyled">
                            <li>
                                Ticket
                            </li>
                            <li>
                                Travel Product
                            </li>
                            <li>
                                Packages
                            </li>
                            <li>
                                Accomodation
                            </li>
                        </ul>
                    </b-col>
                </b-row>
            </b-container>
            <div class="border-top-thin"></div>
            <div class="text-center mt-30 mb-30">
                <font-awesome-icon icon="copyright" /> 2019 | Travel Website by Nabilah Ayu Permata
            </div>
        <!-- </b-container> -->
    </div>
</template>

<script>
import Subscribe from '@/components/Subscribe.vue'

export default {
  name: 'Footer',
  components: {
    Subscribe
  }
}
</script>

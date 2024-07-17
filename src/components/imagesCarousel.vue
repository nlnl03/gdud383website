<template>
  <!-- <img src="@/assets/img1.jpg" alt=""> -->

  <div class="q-pa-md">
    <q-responsive :ratio="16 / 9" style="width: 700px; max-width: 100%">
      <q-carousel
        animated
        swipeable
        v-model="slide"
        navigation
        infinite
        :autoplay="2500"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide
          v-for="(img, index) in images"
          :key="index"
          :name="index"
        >
          <div class="image-wrapper">
            <img class="carousel-image" :src="imagesSource + `${img.Name}`" />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </q-responsive>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  name: "imagesCarousel",
  data() {
    return {
      images: [],
      slide: ref(1),
      autoplay: ref(true),
      imagesSource: "https://portal.army.idf/sites/gdud383/SiteAssets/images/",
    };
  },
  methods: {
    getImgSrc(url) {
      console.log(url);
      return require(url);
    },
  },

  async beforeMount() {
    var res = null;
    if (this.$isSharePointUrl) {
      res = await axios.get(
        "https://portal.army.idf/sites/gdud383/_api/web/GetFolderByServerRelativeUrl('SiteAssets/images')/Files"
      );
    } else {
      res = await axios.get(this.$sharePointUrl + "images");
    }
    this.images = res.data.value;
    console.log(this.images);
  },
};
</script>

<style scoped>
.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.carousel-image {
  width: 100%;
  height: 100%;
}
.q-pa-md {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style>

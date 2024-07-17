<template>
  <navbar />
  <div class="spiner" v-if="!showCards">
    <q-circular-progress
      indeterminate
      size="60px"
      :thickness="1"
      color="blue"
      class="q-ma-md"
    />
  </div>
  <imagesCarousel v-if="showCards" />

  <cards v-if="showCards" />

  <router-view />
</template>

<script>
import navbar from "@/components/navbar.vue";
import cards from "../src/components/cards.vue";
import imagesCarousel from "@/components/imagesCarousel.vue";
export default {
  components: {
    navbar,
    cards,
    imagesCarousel,
  },
  data() {
    return {
      showCards: false,
    };
  },
  beforeMount() {
    setTimeout(() => {
      this.showCards = true;
    }, 650);
  },
};
</script>

<style>
/* .my-table {
  height: var(--table-height);
}
thead tr:last-child th {
  background-color: #e8e5e5;
}
thead tr th {
  position: sticky;
  z-index: 1;
}
.my-table thead th {
  font-size: 22px;
}
.my-table tbody td {
  padding: 20px !important;
}

thead tr:last-child th {
  top: 50px;
}
thead tr:first-child th {
  top: 0;
}
tbody {
  scroll-margin-top: 48px;
} */

.dialog-content {
  width: 100% !important;
}
/* .q-table__title {
  font-weight: 700 !important;
  font-size: 25px !important;
  margin-bottom: 25px;
}
.q-table__card {
  padding: 20px;
  box-shadow: none !important;
}
.q-table__sort-icon--left,
.q-table__sort-icon--center {
  margin-left: -19px !important;
  left: 22px !important;
  font-size: 17px !important;
}

.my-table tbody td {
  font-size: 16px !important;
  padding: 1.3em !important;
} */
.card .q-card__section--vert {
  padding: 0 !important;
}
.insta-modal .q-card__section--vert {
  padding: 0 !important;
}
.btns .q-btn {
  margin-left: 15px !important;
}
/* .q-table__middle {
  padding-right: 10px;
} */
@media (min-width: 600px) {
  .q-dialog__inner--minimized > div {
    max-width: unset !important;
    /* height: 600px !important; */
  }
}
.q-tooltip {
  font-size: 13px !important;
}
.q-table__bottom {
  display: none !important;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background-color: #c5c2c2;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(117, 116, 116);
}

body {
  font-family: var(--bs-body-font-family) !important;
  font-size: var(--bs-body-font-size) !important;
  font-weight: var(--bs-body-font-weight) !important;
  line-height: var(--bs-body-line-height) !important;
  color: var(--bs-body-color) !important;
  -webkit-text-size-adjust: 100% !important;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  background-image: url("../src/assets/mainreka.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
  background-attachment: fixed;
}
*,
*::before,
*::after {
  box-sizing: border-box !important;
}

.spiner {
  top: 170px;
  position: relative;
  display: flex;
  justify-content: center;
}
:root {
  --timeNav-background-color: rgb(7, 7, 78);
  --navbar-background-color: #e0ecf7e3;
  --navbar-list-items-color: rgba(0, 0, 0, 0.55);
  --marquee-width: 65%;
  --marquee-elements: 3;
  --marquee-elements-displayed: 1;
  --marquee-element-width: calc(
    100px + var(--marquee-width) / var(--marquee-elements-displayed)
  );
  --marquee-animation-duration: calc(var(--marquee-elements) * 5s);
  --table-height: 500px;
}
.navbar {
  position: relative;
  display: flex !important ;
  flex-wrap: wrap !important;
  align-items: center !important ;
  justify-content: space-between !important;
}
.navbar-collapse {
  /* flex-grow: unset !important; */
  justify-content: center;
  height: 100%;
}
.navbar-nav {
  width: 75%;
  display: flex;
  justify-content: space-evenly;
  margin-right: 18% !important;
  margin-left: 0px !important;
  text-align: center !important;
}
.navbar {
  padding-top: 0rem !important;
  padding-bottom: 0rem !important;
  height: 105px !important;
}
.navbar-brand {
  margin-right: 0px !important;
  margin-left: 50px !important;
}
@media (max-width: 1700px) {
  .navbar-nav {
    width: 90%;
    margin-right: 5% !important;
  }
  a.nav-link,
  .more-links-nav-item {
    font-size: 18px !important;
  }
  .drop-down {
    left: 0px !important ;
    top: 44px !important ;
  }
  /* .images, .q-pa-md{
    width: 72% !important;
  } */
}

@media (max-width: 1200px) {
  .navbar-nav {
    width: 400px;
    margin-right: 0% !important;
  }
}

.background {
  min-height: calc(100vh - 140px);
  background-image: url("../src/assets/background.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-attachment: fixed;
}

.navbar-expand-lg .navbar-nav .nav-link {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

a.nav-link {
  font-size: 22px;
  /* font-weight:600 ; */
}
@media (max-width: 1590px) {
  .links {
    margin-top: 60px;
  }

  .time {
    /* width: 450px !important; */
  }
  .time-text {
    font-size: 15px;
    width: 198px;
  }
  .main {
    width: 60% !important;
  }
}

@keyframes growOut {
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

li {
  position: relative;
  padding: 0 0.6em !important;
}

li[class="nav-item active"]:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: rgb(61, 67, 100);
  transition: width 0.3s;
}
li[class="nav-item active"]:hover::after {
  width: 100%;
  height: 3px;
}
a:hover {
  color: var(--timeNav-background-color) !important;
  font-weight: 600;
}
a[class="nav-link"]:hover {
  padding: 0.3em 0 !important;
  transition: padding 0.3s !important;
}

.q-dialog__inner .info-modal,
.table-card {
  border-radius: 10px !important;
}
.q-dialog__inner .insta-modal {
  border-radius: 45px !important;
}
[dir] .q-carousel__slide,
[dir] .q-carousel .q-carousel--padding {
  padding: 0 !important;
}

.images {
  margin-top: 30px;
  width: 63%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: growOut 500ms ease-in-out forwards;
}
/* .q-pa-md .q-carousel{
    height: 420px !important;
  } */
.circular-bar {
  display: flex;
  justify-content: center;
  width: 100%;
}
.q-table__title {
  text-align: center;
  width: 100%;
}
</style>

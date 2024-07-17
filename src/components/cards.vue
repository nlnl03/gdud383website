<template>
  <div class="links">
    <div
      class="link-items"
      v-for="(link, index) in links"
      :key="index"
      :style="{ margin: linkMargin }"
    >
      <div class="item">
        <div class="icon">
          <img
            class="ic-img"
            :src="require(`../assets/${link.icon}`)"
            alt="a"
          />
        </div>
        <div class="soon" v-if="!link.path">
          <img class="soon-img" src="../assets/soon.png" alt="a" />
        </div>
        <div class="text">{{ link.Title }}</div>
        <div class="line">---------------------------</div>
        <a v-if="link.path" :href="link.path" target="_blank">מעבר לאתר</a>
        <button disabled class="disable-link" v-if="!link.path">
          מעבר לאתר
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "cards",
  data() {
    return {
      links: [],
      token: null,
      linkMargin: "",
      // cards:[{label:"דשבורד",icon:"miluim.png"},{label:"מילואימניק",icon:"miluim.png"},{label:"מיטתון",icon:"bed.png"},{label:"דוחמל",icon:"dohamal.png"},{label:"בום דיגיטל",icon:"miluim.png"},{label:"אתר חפיפה",icon:"hafifa.png"}]
    };
  },
  async beforeMount() {
    if (this.$isSharePointUrl) {
      const res = await axios.get(
        this.$sharePointUrl + "getByTitle('gdud383Urls')/Items"
      );
      this.links = res.data.value;
    } else {
      const res = await axios.get("http://localhost:3000/links");
      this.links = res.data.value;
    }
    console.log(this.links);
    const linkElement = this.$refs["disable-link"];

    const userAgent = navigator.userAgent;
    console.log(userAgent);
    if (userAgent.includes("Chrome/70")) {
      this.linkMargin = "30px";
    }
  },
};
</script>

<style scoped>
.links {
  margin-top: 65px;
  margin-right: auto;
  margin-left: auto;
  direction: rtl;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  width: 70%;
  margin-bottom: 100px;
  animation: growOut 500ms ease-in-out forwards;
}

.link-items {
  height: 220px;
  width: 330px;
  box-shadow: 2px 0px 10px 3px rgb(0 0 0 / 20%);
  background-color: #fefefe;
  border-radius: 15px;
  padding: 5px;

  /* background-image: url("../assets/miluim.png"); */
}
img[class="ic-img"] {
  height: 80px;
  width: 80px;
}
.item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.text {
  margin-top: 10px;
  font-size: 26px;
  color: var(--timeNav-background-color);
  font-weight: 600;
}
.line {
  font-size: 25px;
  height: 19px;
  display: flex;
  align-items: center;
  color: var(--timeNav-background-color);
}

a {
  text-decoration: none;
  color: #fff;
  margin-top: 12px;
  border: none;
  border-radius: 10px;
  padding: 0.3em 0.6em;
  background-color: #a1a6ab;
}
a:hover {
  background: #c6cbd3b6 !important;
}
.icon {
  margin-top: 10px;
}
.soon {
  position: absolute;
  left: 8%;
  top: 8%;
}
img[class="soon-img"] {
  height: 60px !important;
  width: 80px !important;
}
.disable-link {
  margin-top: 12px;
  border: none;
  border-radius: 10px;
  padding: 0.3em 0.6em;
  background-color: #d1d1d1a9;
  color: black;
}
@media (max-width: 500px) {
  .line {
    display: none;
  }
  a,
  button,
  .disable-link {
    width: 35%;
    text-align: center;
    font-size: 13px;
    margin-top: 25px;
  }
  .text {
    font-size: 20px;
  }
  img[class="soon-img"] {
    height: 38px !important;
    width: 60px !important;
  }
}
</style>

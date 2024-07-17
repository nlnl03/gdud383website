<template>
  <div class="blue-line">
    <div class="time">
      <span class="time-text">{{ currentDate }}</span>
    </div>
    <MessagesCarousel />
    <div class="btns">
      <instaModal />
      <contactList />
      <info />
    </div>
  </div>
  <nav
    class="navbar navbar-expand-lg navbar-light"
    style="background-color: var(--navbar-background-color)"
    dir="rtl"
  >
    <div class="navbar-brand">
      <img class="zameret-icon" src="../assets/zameret.png" alt="" />
      <img src="../assets/Picture1.png" alt="" />
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a
            class="nav-link"
            href="https://portal.army.idf/sites/gdud383/agam/_layouts/15/start.aspx#/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2Fgdud383%2Fagam%2FShared%20Documents%2F%D7%9E%D7%98%D7%94&FolderCTID=0x012000E88B152A7E7F2E4396955D7BEECD8BF3&View=%7BB7F241E0%2D99F6%2D4F32%2D9AE7%2D55DFDCFA23FF%7D"
            target="_blank"
            >אא</a
          >
          <span class="sr-only">(current)</span>
        </li>

        <li class="nav-item active">
          <a
            class="nav-link"
            href="https://portal.army.idf/sites/gdud383/agam/_layouts/15/start.aspx#/Shared%20Documents"
            target="_blank"
            >בב</a
          >
          <span class="sr-only">(current)</span>
        </li>

        <li class="nav-item active">
          <a
            class="nav-link"
            href="https://portal.army.idf/sites/gdud383/Shob"
            target="_blank"
            >גג
            <span class="sr-only">(current)</span>
          </a>
        </li>

        <li class="nav-item active">
          <a
            class="nav-link"
            href="https://portal.army.idf/sites/gdud383/haftak"
            target="_blank"
            >דד
            <span class="sr-only">(current)</span>
          </a>
        </li>

        <li class="nav-item active">
          <a
            class="nav-link"
            href="https://portal.army.idf/sites/gdud383/timsoret"
            target="_blank"
            >ל</a
          >
          <span class="sr-only">(current)</span>
        </li>

        <li class="nav-item active">
          <a
            class="nav-link"
            href="https://portal.army.idf/sites/gdud383/tachnal"
            target="_blank"
            >גכגכל
            <span class="sr-only">(current)</span>
          </a>
        </li>

        <li class="nav-item active">
          <a
            class="nav-link"
            href="https://portal.army.idf/sites/gdud383/mifkada"
            target="_blank"
            >גכגכגכ</a
          >
          <span class="sr-only">(current)</span>
        </li>

        <li class="nav-item active">
          <a
            class="nav-link"
            href="https://portal.army.idf/sites/gdud383/ktechni"
            target="_blank"
            >קגכגכ
            <span class="sr-only">(current)</span>
          </a>
        </li>

        <li class="nav-item active">
          <a
            class="nav-link"
            href="https://portal.army.idf/sites/gdud383/mifkada/mashan"
            target="_blank"
            >גכגכגכן</a
          >
          <span class="sr-only">(current)</span>
        </li>

        <li
          style="height: 100%"
          class="more-links-nav-item"
          @mouseover="isOpen = true"
          @mouseleave="isOpen = false"
        >
          <span class="nav-link">קישורים נוספים</span>
          <span class="sr-only">(current)</span>
          <ul class="drop-down" v-if="isOpen">
            <li class="links-li" v-for="link in moreLinks" :key="link">
              <a
                href="https://portal.army.idf/sites/gdud383/_layouts/15/start.aspx#/SiteAssets/Forms/view.aspx?RootFolder=%2Fsites%2Fgdud383%2FSiteAssets%2F%D7%AA%D7%9B%D7%A0%D7%95%D7%9F%20%D7%97%D7%95%D7%A4%D7%A9%D7%95%D7%AA&FolderCTID=0x012000A6CFA8AF5E44FF4BBE44F698C0C0AAE6&View=%7B3C41AC40%2D7E28%2D4479%2D96F0%2DE02AC2ECB5C6%7D&InitialTabId=Ribbon%2ERead&VisibilityContext=WSSTabPersistence"
                v-if="link.Title == 'תכנון חופשות'"
                class="more-links"
                >{{ link.Title }}</a
              >
              <a
                v-else-if="link.Title == 'ביקורת'"
                class="more-links"
                href="https://portal.army.idf/sites/gdud383/_layouts/15/start.aspx#/SiteAssets/Forms/view.aspx?RootFolder=%2Fsites%2Fgdud383%2FSiteAssets%2FSitePages%2F%D7%91%D7%99%D7%A7%D7%95%D7%A8%D7%AA&FolderCTID=0x012000A6CFA8AF5E44FF4BBE44F698C0C0AAE6&View=%7B3C41AC40%2D7E28%2D4479%2D96F0%2DE02AC2ECB5C6%7D"
                target="_blank"
                >{{ link.Title }}</a
              >
              <a
                v-else
                class="more-links"
                :href="`https://portal.army.idf/sites/gdud383/${link.path}/_layouts/15/start.aspx#/SitePages/%D7%93%D7%A3%20%D7%94%D7%91%D7%99%D7%AA.aspx`"
                target="_blank"
                >{{ link.Title }}</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import info from "@/components/info.vue";
import MessagesCarousel from "@/components/MessagesCarousel.vue";
import axios from "axios";
import contactList from "./contactList.vue";
import instaModal from "./instaModal.vue";
export default {
  name: "navbar",
  components: {
    info,
    MessagesCarousel,
    contactList,
    instaModal,
  },
  data() {
    return {
      currentDate: "",
      currentDay: "",
      isOpen: false,
      moreLinks: [],
    };
  },
  mounted() {
    this.updateDate();
  },
  async beforeMount() {
    var res = null;
    if (this.$isSharePointUrl) {
      res = await axios.get(
        this.$sharePointUrl + "getByTitle('moreLinks')/items"
      );
    } else {
      res = await axios.get(this.$sharePointUrl + "moreLinks");
    }
    this.moreLinks = res.data.value;
    console.log(this.moreLinks);
  },
  methods: {
    updateDate() {
      const now = new Date();
      const dayNum = now.getDay();
      const dayOfWeek = ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"];
      const day = `יום ${dayOfWeek[dayNum]}, `;

      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
      const currentDate = day + now.toLocaleString("he-IL", options);
      this.currentDate = currentDate.replace("בשעה", ",");

      setInterval(() => {
        this.updateDate();
      }, 1000);
    },
  },
};
</script>

<style scoped>
.blue-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: var(--timeNav-background-color);
  color: #fff;
  direction: rtl;
}
.time {
  margin-right: 40px;
  height: 100%;
  /* width: 380px; */
  display: flex;
  align-items: center;
  font-size: 20px;
}
.zameret-icon {
  height: 70px;
  width: 55px;
  margin-left: 10px;
}
.info {
  color: #fff;
}
.drop-down {
  position: absolute;
  display: flex;
  z-index: 1000;
  top: 45px;
  /* height: 270px; */
  width: 150px;
  left: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  animation: growOut 280ms ease-in-out forwards;
  transform-origin: top center;
  padding: 0.3em;
  text-align: center;
}
.links-li {
  padding: 0.4em 0.3em !important;
  list-style: none;
}
.more-links-nav-item {
  height: 90px;
  font-size: 22px;
}
.more-links {
  width: 100%;
  height: 100%;
  color: gray;
  text-decoration: none !important;
}
.btns {
  display: flex;
  margin-left: 25px;
}
</style>

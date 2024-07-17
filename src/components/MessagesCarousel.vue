<template>
  <div class="main">
    <div class="marquee-container">
      <div class="marquee">
        <div
          class="marquee-content"
          :style="{ animationDuration: animationDuration, width: contentWidth }"
        >
          <div
            class="messages"
            v-for="(message, index) in messages"
            :key="index"
            :style="{ width: itemWidth }"
          >
            {{ message.Title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MessagesCarousel",
  data() {
    return {
      messages: null,
      currentIndex: 0,
      animationDuration: "50s",
      containerWidth: "65%",
      contentWidth: "100%",
      itemWidth: "100%",
      scrollingDelay: 20000,
    };
  },

  methods: {
    startMarquee() {
      this.currentIndex = 0;

      setTimeout(() => {
        this.currentIndex = 1;

        setTimeout(() => {
          this.currentIndex = 0;
          setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.messages.length;
          }, this.scrollingDelay);
        }, 1000);
      }, 0);
    },

    calculateWidths() {
      this.contentWidth = this.messages.length * 100 + "%";
      this.itemWidth = 100 / this.messages.length + "%";
    },
  },
  computed: {
    currentMessage() {
      return this.messages[this.currentIndex];
    },
  },

  async mounted() {
    var res = null;
    if (this.$isSharePointUrl) {
      res = await axios.get(
        this.$sharePointUrl + "getByTitle('messages')/Items"
      );
    } else {
      res = await axios.get(this.$sharePointUrl + "messages");
    }
    this.messages = res.data.value;
    console.log(this.messages);

    this.startMarquee();
    this.calculateWidths();
  },
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  /* width: 100%; */
  height: 100%;
}
.marquee-container {
  position: relative;
  width: 65%;
  margin-left: 10%;
  overflow: hidden;
}

.marquee-content {
  display: flex;
  height: 100%;
  animation: scrollMessages linear infinite;
  display: flex;
  align-items: center;
}
.marquee {
  height: 100%;
  padding: 10px 5px;
}
.messages {
  display: inline-block;
  white-space: nowrap;
  font-size: 18px;
  font-weight: 600;
  padding: 0 10px;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
}
@keyframes scrollMessages {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>

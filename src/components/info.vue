<template>
  <q-btn @click="showModal">
    <q-tooltip class="tool-tip"> יצירת קשר </q-tooltip>

    <q-icon
      class="info-icon"
      name="fas fa-phone-alt"
      size="28px"
      style="color: rgb(227 238 248 / 92%)"
    />
    <!-- <img src="../assets/info.png" alt="" /> -->
  </q-btn>

  <q-dialog
    v-model="isModalVisible"
    @escape-key="closeModal"
    @click:outside="closeModal"
    minimized
  >
    <q-card class="info-modal">
      <q-card-section>
        <h2>צור קשר</h2>
        <div class="container">
          <div class="phone">
            <div class="phone-icon"></div>
            <span style="margin-left: 4px"> מרכזיית גדוד 383 - </span>
            <span>00-11-2222</span>
          </div>

          <a class="email" :href="emailLink" target="_blank">
            <div class="email-icon"></div>
            <div class="email-link">
              גדוד 383/פלוגת אאא/מחלקת בבב/תיבת פניות
            </div>
          </a>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "info",
  data() {
    return {
      isModalVisible: false,
      emailLink: "",
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },

  beforeMount() {
    const recipientEmail = "r03830010@army.idf.il";
    const emailTo = `mailto:${recipientEmail}`;
    this.emailLink = `${emailTo}`;
  },
};
</script>

<style scoped>
button {
  margin-left: 30px;
  background: var(--timeNav-background-color);
  border: none;
}
img {
  height: 32px;
  width: 67px;
}
.info-modal {
  height: 280px;
  bottom: 60px;
  width: 32em;
  overflow: hidden;
}
.phone,
.email {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  direction: rtl;
  margin-bottom: 25px;
  width: 100%;
  text-decoration: none;
  color: var(--timeNav-background-color);
}
.phone-icon,
.email-icon {
  height: 39px;
  width: 40px;
  background-image: url("../assets/phone.png");
  margin-left: 10px;
}
.email-icon {
  background-image: url("../assets/email.png");
  border: none;
  width: 39px;
  border-radius: 50%;
}
.email-link {
  border: none;
  background: #fff;
}
h2 {
  margin: 0;
  padding: 0.3em 1em 0;
  text-align: center;
  position: relative;
  max-width: 100%;
  color: #595959;
  font-size: 1.875em;
  font-weight: 600;
  text-transform: none;
  word-wrap: break-word;
}
.container {
  top: 35px;
  position: relative;
  font-size: 1.125em;
  font-weight: 400;
}
</style>

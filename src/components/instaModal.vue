<template>
  <q-btn @click="showModal">
    <q-tooltip class="tool-tip"> ברקוד לאינסטגרם הגדודי </q-tooltip>

    <q-icon
      name="fab fa-instagram"
      size="35px"
      style="color: rgb(227 238 248 / 92%)"
    />
  </q-btn>

  <q-dialog
    v-model="isModalVisible"
    @escape-key="closeModal"
    @click:outside="closeModal"
  >
    <q-card class="insta-modal">
      <q-card-section>
        <img src="../assets/instagram.png" alt="" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  data() {
    return {
      isModalVisible: false,
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
};
</script>

<style scoped>
.insta-modal .q-dialog__inner {
  border-radius: 40px !important;
}
</style>

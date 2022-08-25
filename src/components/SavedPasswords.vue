<template>
  <ul>
    <password-card
      v-for="save in saved"
      :key="save.id"
      :password="save.password"
    ></password-card>
  </ul>
</template>
<script>
import PasswordCard from './PasswordCard.vue';
export default {
  inject: ['saved'],
  components: {
    PasswordCard,
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
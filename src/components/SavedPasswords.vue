<template>
  <ul>
    <password-card
      v-for="password in pastPasswords"
      :key="password.id"
      :password="password.password"
    ></password-card>

  </ul>
</template>
<script>
import PasswordCard from './PasswordCard.vue';
export default {
  props: ['pastPasswords'],
  components: {
    PasswordCard,
  }
}
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
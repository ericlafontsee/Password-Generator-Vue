<template>
  <dialog open id="passwordContainer">
    <password-output></password-output>
    <base-dialog></base-dialog>
  </dialog>
</template>
<script>
import PasswordOutput from './PasswordOutput.vue';
import BaseDialog from './BaseDialog.vue';

export default {
  components: {
    PasswordOutput,
    BaseDialog,
  },
};
</script>

<style scoped>
#passwordContainer {
  box-shadow: 3px 4px 2px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid black;
  border-radius: 12px;
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
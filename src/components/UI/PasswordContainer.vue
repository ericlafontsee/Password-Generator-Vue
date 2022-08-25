<template>
  <dialog open id="passwordContainer">
    <password-output v-if="userPasswordLength > 0"></password-output>
    <form @submit.prevent="submitData" v-if="userPasswordLength === 0">
      <div class="form-control">
        <label for="passwordLength"
          >How long do you want your password to be?</label
        >
        <input
          id="passwordLength"
          name="passwordLength"
          type="text"
          ref="passwordLengthInput"
        />
      </div>
      <button type="submit">Generate Password</button>
    </form>
  </dialog>
</template>
<script>
import PasswordOutput from './PasswordOutput.vue';

export default {
  components: {
    PasswordOutput,
  },
  data() {
    return {
      userPasswordLength: 0,
    };
  },
  methods: {
    submitData() {
      this.userPasswordLength = this.$refs.passwordLengthInput.value;
      this.inputIsInvalid = true;
      return;
    },
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
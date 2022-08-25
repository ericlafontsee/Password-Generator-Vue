<template>
  <div id="passwordContainer">
    <password-output
      :password="password"
      v-if="userPasswordLength > 0" @close="clearPassword">
    </password-output>
    <form @submit.prevent="generatePassword" v-if="userPasswordLength === 0">
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
  </div>
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
      password: '',
    };
  },
  methods: {
    generatePassword() {
      let choices =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

      this.userPasswordLength = this.$refs.passwordLengthInput.value;
      for (var i = 0; i < this.userPasswordLength; i++) {
        let randomChoice = Math.floor(Math.random() * choices.length);
        this.password += choices[randomChoice];
      }
      return;
    },
    clearPassword(){
      this.userPasswordLength = 0;
    }
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
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #eee;
  background-color: #eee  ;
}

.form-control {
  margin: 1rem 0;
}
</style>
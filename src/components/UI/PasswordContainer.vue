<template>
  <div id="passwordContainer">
    <password-output
      :password="password"
      v-if="userPasswordLength > 0"
      @close="clearPassword"
      @save="savePassword"
    >
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
      <div class="form-control">
      <div>Do you want upper case letters?</div>
      <input
          id="uppercaseLetters"
          name="uppercaseLetters"
          type="checkbox"
          v-model="userUppercaseInput"
        />
      <label for="uppercaseLetters">{{userUppercaseInput}}</label>
</div>
<div class="form-control">
      <div>Do you want lower case letters?</div>
      <input
          id="lowercaseLetters"
          name="lowercaseLetters"
          type="checkbox"
          v-model="userLowercaseInput"
        />
      <label for="lowercaseLetters">{{userLowercaseInput}}</label>
</div>
<div class="form-control">
      <div>Do you want any special characters?</div>
      <input
          id="specialChar"
          name="specialChar"
          type="checkbox"
          v-model="specialCharInput"
        />
      <label for="specialChar">{{specialCharInput}}</label>
</div>
<div class="form-control">
      <div>Do you want numbers?</div>
      <input
          id="numbers"
          name="numbers"
          type="checkbox"
          v-model="numbersInput"
        />
      <label for="numbers">{{numbersInput}}</label>
</div>

      <button type="submit">Generate Password</button>
    </form>
  </div>
  <saved-passwords></saved-passwords>
</template>
<script>
import SavedPasswords from '../SavedPasswords.vue';
import PasswordOutput from './PasswordOutput.vue';
export default {
  components: {
    PasswordOutput,
    SavedPasswords,
  },
  data() {
    return {
      userPasswordLength: 0,
      userUppercaseInput: false,
      userLowercaseInput: false,
      specialCharInput: false,
      numbersInput: false,
      password: '',
    };
  },

  methods: {
    generatePassword() {
      // let choices =
      //   "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
      let upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let upperAlphaArr = upperAlpha.split('');
      let lowerAlpha = upperAlpha.toLowerCase();
      let lowerAlphaArr = lowerAlpha.split('');
      let num = '0123456789';
      let numArr = num.split('');
      let symbols = '!#$%&()*+,-./:;<=>?@^[\\]^_`{|}~';
      let symbolArr = symbols.split('');
      let availChars = [];

      this.userPasswordLength = this.$refs.passwordLengthInput.value;


      if(this.userUppercaseInput){
        availChars.push.apply(availChars, upperAlphaArr);
        console.log("uppercase", availChars);
      }
      if(this.userLowercaseInput){
        availChars.push.apply(availChars, lowerAlphaArr);
        console.log("lowercase", availChars);
      }
      if(this.specialCharInput){
        availChars.push.apply(availChars, symbolArr);
        console.log("special char", availChars);
      }

      if(this.numbersInput){
        availChars.push.apply(availChars, numArr);
        console.log("numbers", availChars);
      }

      for (var i = 0; i < this.userPasswordLength; i++) {
        let randomChoice = Math.floor(Math.random() * availChars.length);
        this.password += availChars[randomChoice];
      }
      return;
    },
    clearPassword() {
      this.userPasswordLength = 0;
    },
    savePassword() {
      const newPassword = {
        id: new Date().toISOString(),
        password: this.password,
      };
      fetch(
        'https://password-generator-680b9-default-rtdb.firebaseio.com/passwords.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: newPassword.id,
            password: newPassword.password,
          }),
        }
      );
    },
    //     removePassword(pwID){
    //    const pwIndex = this.savedPasswords.findIndex(pw => pw.id === pwID);
    //    this.savedPasswords.splice(pwIndex, 1);
    // },
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
  background-color: #eee;
}

.form-control {
  margin: 1rem 0;
}
</style>
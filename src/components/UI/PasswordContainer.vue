<template>
  <div id="passwordContainer">
    <password-output
      :password="password"
      v-if="showGeneratedPassword"
      @close="clearPassword"
      @save="savePassword"
    >
    </password-output>
    <form @submit.prevent="generatePassword" v-if="showForm">
      <div class="mb-3">
        <label for="passwordLength" class="form-label"
          >How long do you want your password to be?</label
        >
        <input
          id="passwordLength"
          name="passwordLength"
          type="text"
          v-model="userPasswordLength"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="uppercaseLetters"
            name="uppercaseLetters"
            v-model="userUppercaseInput"
          />
          <label class="form-check-label" for="uppercaseLetters">
            Do you want upper case letters?
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            id="lowercaseLetters"
            name="lowercaseLetters"
            type="checkbox"
            v-model="userLowercaseInput"
          />
          <label class="form-check-label" for="lowercaseLetters">
            Do you want lower case letters?
          </label>
        </div>
        <div class="form-check">
          <input
            id="specialChar"
            name="specialChar"
            type="checkbox"
            v-model="specialCharInput"
            class="form-check-input"
          />
          <label class="form-check-label" for="specialChar">
            Do you want any special characters?
          </label>
        </div>
        <div class="form-check">
          <input
            id="numbers"
            name="numbers"
            type="checkbox"
            v-model="numbersInput"
            class="form-check-input"
          />
          <label class="form-check-label" for="numbers">
            Do you want numbers?
          </label>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  <saved-passwords :passwordResults="results" @delete-password="removePassword"></saved-passwords>
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
      showGeneratedPassword: false,
      showForm: true,
      userPasswordLength: null,
      userUppercaseInput: false,
      userLowercaseInput: false,
      specialCharInput: false,
      numbersInput: false,
      password: '',
      results: []
    };
  },

  methods: {
    generatePassword() {
      let upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let upperAlphaArr = upperAlpha.split('');
      let lowerAlpha = upperAlpha.toLowerCase();
      let lowerAlphaArr = lowerAlpha.split('');
      let num = '0123456789';
      let numArr = num.split('');
      let symbols = '!#$%&()*+,-./:;<=>?@^[\\]^_`{|}~';
      let symbolArr = symbols.split('');
      let availChars = [];

      if (
        this.userUppercaseInput ||
        this.userLowercaseInput ||
        this.specialCharInput ||
        this.numbersInput
      ) {
        this.showForm = false;

        if (this.userUppercaseInput) {
          availChars.push.apply(availChars, upperAlphaArr);
        }
        if (this.userLowercaseInput) {
          availChars.push.apply(availChars, lowerAlphaArr);
        }
        if (this.specialCharInput) {
          availChars.push.apply(availChars, symbolArr);
        }

        if (this.numbersInput) {
          availChars.push.apply(availChars, numArr);
        }

        for (var i = 0; i < this.userPasswordLength; i++) {
          let randomChoice = Math.floor(Math.random() * availChars.length);
          this.password += availChars[randomChoice];
        }
        this.showGeneratedPassword = true;
        this.userPasswordLength = null;
        return;
      } else {
        alert('Please Select Your Desired Characters!');
        return;
      }
    },
    clearPassword() {
      this.userPasswordLength = 0;
      this.userUppercaseInput = false;
      this.userLowercaseInput = false;
      this.specialCharInput = false;
      this.numbersInput = false;
      this.password = '';
      this.showForm = true;
      this.showGeneratedPassword = false;
    },
    savePassword() {
      const newPassword = {
        id: new Date().toISOString(),
        password: this.password,
      };
      console.log(newPassword);
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
      ).then((response) => {
        if (response.ok) {
          this.loadPasswords();
        }
      });
      this.clearPassword()
    },
    removePassword(pwID) {
      let fetchURL =
        'https://password-generator-680b9-default-rtdb.firebaseio.com/passwords/' +
        pwID +
        '.json';
      fetch(fetchURL, {
        method: 'DELETE',
      }).then((response) => {
        if (response.ok) {
          this.loadPasswords();
        }
      });
    },
    loadPasswords() {
      fetch(
        'https://password-generator-680b9-default-rtdb.firebaseio.com/passwords.json'
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const results = [];
          for (const id in data) {
            results.push({ id: id, password: data[id].password });
          }
          this.results = results;
        })
        .catch((error) => {
          console.log('ERROR:', error);
        });
    },
  },
  mounted() {
    this.loadPasswords();
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
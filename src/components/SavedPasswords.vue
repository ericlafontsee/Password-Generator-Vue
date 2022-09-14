<template>
<div class="card mx-auto" style="max-width: 20rem;">
  <div class="card-header">
    Saved Passwords
  </div>
  <ul class="list-group list-group-flush m-0">
    <password-card
      v-for="result in results"
      :key="result.id"
      :id="result.id"
      :password="result.password"
      @delete-password="removePassword"
    ></password-card>
  </ul>
</div>
   

</template>
<script>
import PasswordCard from './PasswordCard.vue';
export default {
  data() {
    return {
      results: [],
    };
  },
  components: {
    PasswordCard,
  },
  methods: {
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
    removePassword(pwID) {
      console.log(pwID);
      let fetchURL =
        'https://password-generator-680b9-default-rtdb.firebaseio.com/passwords/' +
        pwID + '.json';
      fetch(fetchURL, {
        method: 'DELETE',
      });
    },
  },
  mounted() {
    this.loadPasswords();
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
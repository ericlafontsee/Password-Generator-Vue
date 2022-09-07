<template>
  <ul>
    <password-card
      v-for="result in results"
      :key="result.id"
      :password="result.password"
    ></password-card>

  </ul>
</template>
<script>
import PasswordCard from './PasswordCard.vue';
export default {
  data(){
return {
  results: [],
}
  },
  components: {
    PasswordCard,
  },
  methods: {
    loadPasswords(){
      fetch('https://password-generator-680b9-default-rtdb.firebaseio.com/passwords.json').then(response =>{
        if(response.ok){
          return response.json();
        }
      }).then(data => {
        const results = [];
        for(const id in data){
          results.push({id: id, password: data[id].password});
        }
        this.results = results;
      }).catch(error => {
        console.log('ERROR:', error);
      })
    },
  },
  mounted(){
    this.loadPasswords();
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
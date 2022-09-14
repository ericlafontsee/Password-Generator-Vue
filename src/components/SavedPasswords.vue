<template>
<div class="card mx-auto" style="max-width: 20rem;">
  <div class="card-header">
    Saved Passwords
  </div>
  <ul class="list-group list-group-flush m-0" >
    <li  v-for="result in passwordResults"
      :key="result.id"
      :id="result.id"
      :password="result.password"
      @delete-password="removePassword"  class="list-group-item d-flex flex-row justify-content-between align-items-center m-0">
      <h3>{{ result.password }}</h3>
        <button class="btn btn-danger" type="submit" @click="$emit('deletePassword',result.id)">Delete</button>

    </li>
    
  </ul>
</div>
</template>

<script>
export default {
  props: ['passwordResults'],
  emits: ['deletePassword'],
  methods: {
  deletePassword(){
      this.$emit('delete-password', this.id );
    }
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
li {
  margin: auto;
  max-width: 40rem;
}


h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}
</style>
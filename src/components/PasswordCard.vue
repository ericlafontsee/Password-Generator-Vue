<template>
  <li >

        <h3 key="id" >{{ password }}</h3>
        <button @click="$emit('deletePassword',id)">Delete</button>
  </li>

</template>

<script>
export default {
  props: ['id','password', 'removePassword'],
  emits: ['deletePassword'],
  methods: {
    deletePassword(){
      this.$emit('delete-password', this.id );
    }
  }

};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>>
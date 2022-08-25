<template>
<the-header title="Welcome to the Password Generator!"></the-header>
<password-container>
</password-container>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import PasswordContainer from './components/UI/PasswordContainer.vue';
export default {
  components: {
    PasswordContainer,
    TheHeader
  }
};
</script>
<style >
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
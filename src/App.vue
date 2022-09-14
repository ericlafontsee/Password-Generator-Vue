<template>
  <the-header title="Welcome to the Password Generator!"></the-header>

  <div class="container">
    <div class="row justify-content-center align-items-center">
      <div class="col-12 col-md-8">
        <password-container> </password-container>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import PasswordContainer from './components/UI/PasswordContainer.vue';
export default {
  components: {
    PasswordContainer,
    TheHeader,
  },
};
</script>
<style >
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
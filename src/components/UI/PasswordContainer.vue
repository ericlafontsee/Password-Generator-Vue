<template>
<div id="passwordContainer">
    <PasswordOutput></PasswordOutput>
</div>
</template>
<script>
import PasswordOutput from './PasswordOutput.vue';

export default {
  components: {
    PasswordOutput
  }
};

</script>

<style scoped>
#passwordContainer{
    background: #ededed;
    border-radius: 2%;
    box-shadow: 3px 4px 2px 1px rgba(0, 0, 0, .2);
    border: 1px solid black;
    padding: 20px;
}
</style>
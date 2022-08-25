<template>
<h2>{{ password }}</h2>
<button @click="$emit('close')">Clear</button>
</template>


<script>
export default{
    props: ['password'],
    emit: ['close']
}

</script>

<style scoped>
h2{
    text-align: center;
}
</style>
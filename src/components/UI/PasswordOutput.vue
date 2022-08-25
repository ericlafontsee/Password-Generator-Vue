<template>
<h2>{{ password }}</h2>
<button @click="$emit('close')">Clear</button>
<button @click="$emit('save')">Save</button>
</template>
<script>
export default{
    props: ['password'],
    emit: ['close', 'save']
}

</script>

<style scoped>
h2{
    text-align: center;
}
</style>
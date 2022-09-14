<template>
<h2>{{ password }}</h2>
<button class="btn btn-primary mx-2" @click="$emit('close')">Clear</button>
<button class="btn btn-success mx-2" @click="$emit('save')">Save</button>
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
<template>
    <div>
        <button class="filterBtn">Filter</button>
    </div>
</template>

<script>
    export default {
        name: 'FilterBtn',
        props: {
            action: Function,
            dataToFilter: Array
        }


    }
</script>

<style scoped>

</style>
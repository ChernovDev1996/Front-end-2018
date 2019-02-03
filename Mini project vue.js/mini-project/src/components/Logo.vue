<template>
    <div class="logo-div">
        <div class="logo-div__img">  
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
       name: 'Logo',
       props: {
           dataCardsParent: Array
       },
        data() {
            return {
                
            }
        },
        methods: {
            filterPrices() {
                console.log(this.goodsPrice)
            }
        },
        computed: {
            
        },
    }
</script>

<style scoped lang="scss">
    .logo-div__img {
        width: 100px;
        height: 100px;
        background-image: url(../assets/Logo-Store.png);
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
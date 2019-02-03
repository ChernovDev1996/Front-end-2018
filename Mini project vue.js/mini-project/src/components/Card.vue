<template>
    <div class="card">
        <div class="card__body">
            <div class="card__header" :style="{backgroundColor: color}">

            </div>
            <div class="card__info">
                <p class="card__info-title">
                    Title: {{title}}
                </p>
                <p class="card__info-price">
                    Price: {{price}}$
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            color: String,
            title: String,
            price: Number,
            filteredDataCards: Array
        },
        data() {
            return {
                
            }
        },
        methods: {
            
        },
        computed: {
            
        },
    }
</script>

<style scoped lang='scss'>
    .card {
        &__body {
            padding: 10px;
            border: 1px solid black;
            border-radius: 10px;
            background-color: beige;
            height: 250px;
            width: 150px;
            box-shadow: 2px 2px 20px 0px gray;
        }

        &__header {
            width: 80px;
            height: 80px;
            margin: 0 auto;
            border-radius: 50%;
            padding-top: 5px;
        }



    }


</style>
<template>
  <div id="app">
    <header>
      <Logo>
        <FilterBtn></FilterBtn>
      </Logo>

    </header>
    <main>
      <div class="card-area">
      <Card
        v-for="card in dataCards" 
        :key="card.id"
        :color="card.color"
        :title="card.title"
        :price="card.price"
      ></Card>
      </div>
    </main>
  </div>
</template>

<script>

import Logo from './components/Logo.vue'
import Card from './components/Card.vue'
import FilterBtn from './components/FilterBtn.vue'
export default {
  name: 'app',
  components: {
    Logo,
    Card,
    FilterBtn
  },
  data() {
    return {
       dataCards: [
    {id: 1,
    color: "red",
    title: "red-apple-22",
    price: 22},
    {id: 2,
      color: "yellow",
    title: "yellow-pears-25",
    price: 25},
    {id: 3,
      color: "blue",
    title: "blue-plums-10",
    price: 10},
    {id: 4,
      color: "green",
    title: "green-peas-6",
    price: 6},
    {id: 5,
      color: "orange",
    title: "orange-tangerines-10",
    price: 10}
],

    }
  },
  methods: {
    doAjax(method, url) {
      return new Promise((res, rej) => {
        let xhr = new XMLHttpRequest;
        xhr.open(method, url);
        xhr.send();
        xhr.onreadystatechange = function() {
          if(this.readyState != 4 || this.status != 200) {
            rej("There is an error in XHR")
          }
          else {
            const resp = JSON.parse(this.response);
            res(resp);
          }
        }
      })
    },

    sortCards(data) {
      data.sort((item))
    }
  },
  computed: {
    
  },
}
</script>

<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.card-area {
  max-width: 1280px;
  display: flex;
  justify-content: space-evenly;

}
</style>

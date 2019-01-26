Vue.component('diagramcomponent', {
    props: ['count'],
    data() {
        return {
            inputValue: null,
            // instances: new Array(7),
        }
    },
    template: `<div class="app__flex-wrap">
                <div class="app__flex-wrap-diagram">
                    <div class="app__flex-wrap-diagram-block"
                     v-bind:style="{height: inputValue + '%'}">
                    </div>
                </div>
                <input type="range" step="1" value="0" class="app__range-input"
                    v-model="inputValue" 
                >
                <p>{{inputValue}}</p>
            </div>`
});



var app = new Vue({
    el: '#app',
    data: {
        instances: new Array(7),
    },
    methods: {
    }
  
  
  })





  console.log(app.$children[0])
Vue.component('diagramcomponent', {
    props: {
        
    },
    data() {
        return {
            inputValue: null, 
        }
    },
    methods: {
        sendToLS(event) {
            let inputValue = localStorage.setItem(`component-${this.id}`, event.target.value);
            inputValue = localStorage.getItem(`component-${this.id}`)
            this.inputValue = inputValue;
            
        },
        
    },
    mounted() {
        this.id = this._uid
    },
    template: `<div class="app__flex-wrap">
                <div class="app__flex-wrap-diagram">
                    <div class="app__flex-wrap-diagram-block"
                     v-bind:style="{height: inputValue + '%'}">
                    </div>
                </div>
                <input type="range" step="1" value="0" class="app__range-input"
                    @input="sendToLS"
                >
                <p>{{inputValue}}</p>
                
            </div>`
});


Vue.component('buttoncomponent', {
    props: ['instancesDiagrams'],

    data() {
        return {
            arrInstancesCompare: [],
        }
    },
    methods: {
        filterDiagrams() {
           const diagrams = document.querySelectorAll('.diagramComp');
           let diagramValue;
           for(let i = 0; i < diagrams.length; i++) {
                diagramValue = diagrams[i].querySelector('.app__range-input').value;
                this.arrInstancesCompare.push(diagramValue);
           }
           this.instancesDiagrams.length = 0;
           this.arrInstancesCompare.forEach(el => {
               this.instancesDiagrams.push(el);
           });
           
           let sortedInstancesDiagrams = this.instancesDiagrams.sort((a,b) => a - b);

           const diagramBlocks = document.querySelectorAll('.app__flex-wrap-diagram-block'); 
        }
    },
    template: `<button @click="filterDiagrams" id='btn'>Filter</button>`
    })



var app = new Vue({
    el: '#app',
    data: {
        instances: new Array(7)
    },
    methods: {

    }
  
  
  })





  console.log(app.$children[0])
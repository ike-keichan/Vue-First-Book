var state = { count: 0 }
var app = new Vue({
    el: "#app",
    data: {
        state: state,
        message: {
            value:  "Hello Vue.js!"
        },
        list: ["りんご", "ばなな", "いちご"],
        num: 1,
        scroll: 0,
        count: 0
    },
    mounted: function(){
        this.scroll = 100
    },
    methods: {
        increments: function(){
            this.count += 1
        }
    }
})
state.count++

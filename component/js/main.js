(function(){
    'use strict';

    var likeComponent = Vue.extend({
        props: {
            text: {
                type: String,
                default: 'Like'
            }
        },
        data: function() {
            return {
                count: 0
            }
        },
        template: '<button @click="countUp">{{ text }} {{ count }}</button>',
        methods: {
            countUp: function() {
                this.count++;
                this.$emit('increment');
            }
        }
    });

    var vm = new Vue({
        el: '#app',
        components: {
            'like-component': likeComponent
        },
        data: {
            total: 0
        },
        methods: {
            incrementTotal: function(){
                this.total++;
            }
        }
    })
})();
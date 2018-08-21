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
            }
        }
    });

    var vm = new Vue({
        el: '#app',
        components: {
            'like-component': likeComponent
        }
    })
})();
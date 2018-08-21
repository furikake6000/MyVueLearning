(function(){
    'use strict';

    var likeComponent = Vue.extend({
        template: '<button>Like</button>'
    });

    var vm = new Vue({
        el: '#app',
        components: {
            'like-component': likeComponent
        }
    })
})();
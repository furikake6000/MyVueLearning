(function(){
    'use strict';

    var vm = new Vue({
        el: '#app',
        data: {
            newItem: '',
            todos: [
                {
                    title: 'task1',
                    isDone: false
                },
                {
                    title: 'task2',
                    isDone: false
                },
                {
                    title: 'task3',
                    isDone: true
                },
            ]
        },
        methods: {
            addItem: function(){
                var newTodo = {
                    title: this.newItem,
                    isDone: false
                };
                this.todos.push(newTodo);
                this.newItem = '';
            },
            deleteItem: function(index){
                if(confirm('are you sure?')){
                    this.todos.splice(index, 1);
                }
            }
        },
        computed: {
            remaining: function(){
                var items = this.todos.filter(function(todo){
                    return !todo.isDone;
                });
                return items.length;
            }
        }
    })
})();
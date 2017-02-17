var React = require('react');
var TodoList = require('TodoList');
var TodoApp = React.createClass({
    getInitialState: function(){
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk the Dog'
                },
                {
                    id: 2,
                    text: 'Feed the Cat'
                },
                {
                    id: 3,
                    text: 'Clean the Yard'
                },
                {
                    id: 4,
                    text: 'Learn React'
                }
            ]
        }
    },
    render: function() {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
            </div>
        );
    }
});

module.exports = TodoApp;
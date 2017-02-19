var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
    it('should exists', () => {
        expect(TodoList).toExist();
    });

    it('should render one todo component for each todo item', () => {
        var todos = [
            {
                id: 1,
                text: 'Walk the Dog'
            },
            {
                id: 2,
                text: 'Feed the Cat'
            }
        ];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var todosComponent = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
        expect(todosComponent.length).toBe(todos.length);
    });
    it('should render empty message if no todos', () => {
        var todos = [];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));
        expect($el.find('.container_message').length).toBe(1);
    });
});
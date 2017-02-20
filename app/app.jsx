var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(()=>{
    console.log('New State', store.getState());
});

store.dispatch(actions.addTodo('Clean the Table'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

$(document).foundation();
require('style!css!sass!applicationStyle');
ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('app')
);
var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');


$(document).foundation();
require('style!css!sass!applicationStyle');
ReactDOM.render(
    <p>React Boilerplate 3</p>,
    document.getElementById('app')
);
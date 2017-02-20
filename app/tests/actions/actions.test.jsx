var expect = require('expect');
var actions = require('actions');

describe('Actions', ()=>{
    it('should generate search text action', ()=>{
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Searching Text'
        };
        var res = actions.setSearchText(action.searchText);
        expect(res).toEqual(action);
    });

    it('should generate add todo action', ()=>{
        var action = {
            type: 'ADD_TODO',
            text: 'New Todo'
        };
        var res = actions.addTodo(action.text);
        expect(res).toEqual(action);
    });

    it('should generate add todos object', ()=>{
        var todos = [{
            id: 1,
            text: 'New Todo for test',
            completed:false,
            completedAt: 123,
            createdAt: undefined
        }];
        var action = {
            type: 'ADD_TODOS',
            todos
        };
        var res = actions.addTodos(todos);
        expect(res).toEqual(action);
    });

    it('should generate toggleTodo action', () => {
        var action = {
            type: 'TOGGLE_TODO',
            id: 1
        };
        var res = actions.toggleTodo(action.id);
        expect(res).toEqual(action);
    });

    it('should generate toggleShowCompleted action', ()=>{
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        var res = actions.toggleShowCompleted();
        expect(res).toEqual(action);
    });
});
var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exists', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            var todos = [{
                id: 1,
                text: 'test api',
                completed: false
            }];
            TodoAPI.setTodos(todos);
            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            expect(actualTodos).toEqual(todos);
        });
        it('should not set invalid todos', () => {
            var badTodos = { a: 'b' };
            TodoAPI.setTodos(badTodos);
            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos', () => {
        it('should return empty array for bad todos', () => {
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should get valid todos array', () => {
            var todos = [{
                id: 1,
                text: 'test api',
                completed: false
            }];
            //TodoAPI.setTodos(todos); it works but better not....
            localStorage.setItem('todos', JSON.stringify(todos));
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual(todos);
        });
    });
    describe('filterTodos', () => {
        var todos = [{
                id: 1,
                text: 'test api 1',
                completed: true
            },
            {
                id: 2,
                text: 'test api 2',
                completed: false
            },
            {
                id: 3,
                text: 'test api 3',
                completed: true
            }];
        it('should return all items if showCompleted is true', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });
        it('should return only items which incomplete', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });
        it('should sort by completed status', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '3');
            expect(filteredTodos.length).toBe(1);
        });
        it('should return all todos if searchText is empty', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });
    });
});
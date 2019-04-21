import { decorate, observable, computed, action } from 'mobx';

class TodosModule {
    // todos = [];

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.todos = [];
    }

    addToto(todo) {
        this.todos.push(todo)
    }

    get TodosCount() {
        return this.todos.length;
    }
}

decorate(TodosModule,
    {
        todos: observable,
        addToto: action,
        TodosCount: computed
    })

// const TodoStore = new TodosModule();
// export default TodoStore;
export default TodosModule;
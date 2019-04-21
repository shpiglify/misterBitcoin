import UserStore from './UserStore';
import TodoStore from './TodoStore';

class AppModule {
    constructor() {
        this.userStore = new UserStore(this)
        this.todoStore = new TodoStore(this)
    }
}

const AppStore = new AppModule()
export default AppStore;

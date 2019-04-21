import { decorate, observable, computed, action } from 'mobx';
import UserService from '../services/UserService';

class UserModule {
    currUser = null;

    loadUser() {
        return UserService.getUser()
            .then((user) => user ? this.setUser(user) : '')
    }

    login(credentials) {
        return UserService.login(credentials)
            .then((user) => {
                console.log('setting user', { user })
                this.setUser(user)
            })
    }

    signupUser(credentials) {
        return UserService.signup(credentials)
            .then((user) => {
                this.setUser(user)
            })
    }

    setUser(user) {
        this.currUser = JSON.parse(JSON.stringify(user));
    }

    get getCurrUser() {
        return this.currUser;
    }

    get getThreeMoves() {
        return UserService.getThreeMoves()
            .then((moves) => moves)
    }
}

decorate(UserModule,
    {
        currUser: observable,

        loadUser: action,
        signupUser: action,
        setUser: action,

        getCurrUser: computed,
        getThreeMoves: computed
    })

export default UserModule;

import { decorate, observable, computed, action } from 'mobx';
import UserService from '../services/UserService';

class UserModule {
    currUser = null;

    loadUser() {
        return UserService.getUser()
            .then((user) => {
                this.setUser(user)
            })
    }

    logout() {
        return UserService.logout()
            .then(() => {
                this.setUser()
            })
    }

    login(credentials) {
        return UserService.login(credentials)
            .then((user) => {
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
        this.currUser = user ? JSON.parse(JSON.stringify(user)) : user;
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

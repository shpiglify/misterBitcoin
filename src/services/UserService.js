import StorageService from './StorageService';
import ContactService from './ContactService';

// var users = [
//     {
//         name: "user1",
//         coins: 100,
//         moves: []
//     }, {
//         name: "user2",
//         coins: 200,
//         moves: []
//     }, {
//         name: "user3",
//         coins: 300,
//         moves: []
//     }, {
//         name: "user4",
//         coins: 400,
//         moves: []
//     }
// ];

const USER_KEY = 'user-react';
const USERS_KEY = 'users-react';
const MOVES_KEY = 'moves-react';
var gUser;
var gUsers = [];

function getUser() {
    var currUser = StorageService.load(USER_KEY);
    gUser = currUser;
    return Promise.resolve(currUser);
}

function getMovesByContactId(id) {
    var moves = StorageService.load(MOVES_KEY);
    if (moves && moves.length) {
        var filterMoves = moves.filter((move) => move.toId === id && move.fromUser === gUser.name)
        return Promise.resolve(filterMoves);
    } else {
        return Promise.resolve([]);
    }
}

function getThreeMoves() {
    var moves = StorageService.load(MOVES_KEY);
    if (moves && moves.length) {
        var SortMoves = moves.sort((m1, m2) => m2.createTime - m1.createTime)
        var sizeToCut = 3;
        var cutThreeMoves = SortMoves.slice(0, sizeToCut)
        return Promise.resolve(cutThreeMoves);
    } else {
        return Promise.resolve([]);
    }
}

function _getMoves() {
    var moves = StorageService.load(MOVES_KEY);
    return Promise.resolve(moves);
}

function signup(name) {
    gUsers = StorageService.load(USERS_KEY);
    if (!gUsers) gUsers = [];
    var userStorage = gUsers.find((user) => user.name === name)
    if (userStorage) {
        gUser = userStorage;
        StorageService.store(USER_KEY, gUser);
        return Promise.resolve(gUser);
    } else {
        var newUser = {
            name: name,
            coins: 1000,
            moves: []
        }
        gUser = newUser;
        StorageService.store(USER_KEY, gUser);
        gUsers.push(newUser)
        StorageService.store(USERS_KEY, gUsers);
        return Promise.resolve(newUser);
    }
}

function _updateUser(newMove, amount) {
    if (gUser) {
        var newBalance = gUser.coins - amount;
        gUser.coins = newBalance;
        gUser.moves.unshift(newMove);
        StorageService.store(USER_KEY, gUser);
        var idx = gUsers.findIndex((user) => user.name === gUser.name);
        if (idx >= 0) {
            gUsers[idx] = gUser;
            StorageService.store(USERS_KEY, gUsers);
        }
    } else {
        // problem - try to reduce balance from no user
    }
}

function addMove(contact, amount) {
    if(contact.coins){
        contact.coins += Number(amount);
    }else{
        contact.coins = Number(amount);
    }
    ContactService.saveContact(contact);
    var newMove = {
        fromUser: (gUser) ? gUser.name : 'Guest',
        toId: contact._id,
        to: contact.name,
        at: new Date().toLocaleString(),
        createTime: Date.now(),
        amount: amount
    }
    _updateUser(newMove, amount);
    _getMoves().then((moves) => {
        if (moves && moves.length) {
            moves.unshift(newMove)
            StorageService.store(MOVES_KEY, moves);
        } else {
            StorageService.store(MOVES_KEY, [newMove]);
        }
    })
    return Promise.resolve(newMove);
}

function getEmptyMove() {
    return {
        fromUser: '',
        toId: '',
        to: '',
        at: 0,
        createTime: '',
        amount: 0
    }
}

export default {
    getUser,
    signup,
    addMove,
    getEmptyMove,
    getMovesByContactId,
    getThreeMoves
}

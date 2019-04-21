export default {
    store,
    load
}

function store(key, value) {
    var str = JSON.stringify(value);
    localStorage.setItem(key, str);
}

function load(key) {
    var str = localStorage.getItem(key)
    return JSON.parse(str)
}


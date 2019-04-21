// import axios from 'axios';
import marketPrice from './data/marketPrice.json';
import transactionsPrice from './data/transactionsPrice.json';

// function getRate(coins) {
//     axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
//         .then(res => res.data)
// }

async function getRate() {
    // WHEN active dont forget to UNmark the IMPORT AXIOS
    // var value = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    // return value.data;
    return Promise.resolve(0.0001990188);
}

// IN PROMISE THEN
// function getRate(coins) {
//     return axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
//         .then((value) => value.data)
// }

function getMarketPrice() {
    // return marketPrice;
    return Promise.resolve(marketPrice);
}

function getConfirmedTransactions() {
    // return transactionsPrice;
    return Promise.resolve(transactionsPrice);
}

export default {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import MovesList from '../../cmps/MovesList';
import StatisticPage from '../StatisticPage';
import BitcoinService from '../../services/BitcoinService';
import './HomePage.scss'

class HomePage extends Component {
    state = {
        bitcoinRate: null,
        threeMoves: []
    }
    async componentDidMount() { // on load
        this.setState({
            bitcoinRate: await BitcoinService.getRate(),
            threeMoves: await this.props.store.userStore.getThreeMoves
        })
    }

    get currentRateUSD() {
        return Math.floor(1 / this.state.bitcoinRate)
    }

    get balanceUSD() {
        return this.currentRateUSD * this.props.store.userStore.getCurrUser.coins
    }

    render() {
        var currUser = this.props.store.userStore.getCurrUser;
        console.log(currUser)
        return (
            <section className="home-page">
                <h1>Hi, {currUser.userName}</h1>

                <main>
                    <div className="balance">
                        <div>CURRENT BALANCE</div>
                        <div>BIT: <span>₿ {currUser.coins.toLocaleString()}</span></div>
                        <div>USD: <span>$ {this.balanceUSD.toLocaleString()}</span></div>
                    </div>


                    {this.state.bitcoinRate &&
                        <div className="rate">
                            <div>CURRENT BTC USD</div>
                            <div> $ {this.currentRateUSD.toLocaleString()}</div>
                        </div>
                    }
                </main>
                
                <StatisticPage/>

                <MovesList moves={this.state.threeMoves}
                    title={`Three Recent Transactions In The World`} />


            </section>
        )
    }
}

export default observer(HomePage);

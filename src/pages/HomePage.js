import React, { Component } from 'react';
import { observer } from 'mobx-react';

import MovesList from '../cmps/MovesList';

import BitcoinService from '../services/BitcoinService';

class HomePage extends Component {
    state = {
        bitcoinRate: null,
        threeMoves: []
    }
    async componentDidMount() { // on load
        this.setState({
            bitcoinRate: await BitcoinService.getRate(100),
            threeMoves: await this.props.store.userStore.getThreeMoves
        })
    }

    addItem = () => this.props.store.todoStore.addToto('lala')

    render() {
        var currUserName = this.props.store.userStore.getCurrUser.name;
        return (
            <section>
                <h1>Home Page</h1>

                <div>
                    {currUserName}
                </div>

                {this.state.bitcoinRate &&
                    <div>
                        {this.state.bitcoinRate}
                    </div>
                }

                <MovesList moves={this.state.threeMoves}
                    title={`Three Recent Transactions In The World`} />

                <div>
                    <input type="button" onClick={this.addItem}
                        value={`Button For Oded! ${this.props.store.todoStore.TodosCount}`} />
                </div>
            </section>
        )
    }
}

export default observer(HomePage);

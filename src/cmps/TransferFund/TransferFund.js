import React, { Component } from 'react';
import './TransferFund.scss'

export default class TransferFund extends Component {
    state = {
        moneyToSend: 0,
    }

    setCoins = (ev) => {
        this.setState({ moneyToSend: ev.target.value });
    }

    sendMoney = (ev) => {
        ev.preventDefault();
        this.props.onTransferCoins(this.props.contact, this.state.moneyToSend)
    }

    render = () => (
        <section className="transfer-fund">
            <form>
                <input onChange={this.setCoins} type="number" />
                <button className="btn-full" onClick={this.sendMoney}>Send</button>
            </form>
        </section>
    )
}

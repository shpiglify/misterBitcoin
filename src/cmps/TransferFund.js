import React, { Component } from 'react';

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
    render() {
        return (
            <section>
                <p>Give Some Coins to {this.props.contact && this.props.contact.name}</p>
                Amount &nbsp;
                <form>
                    <input onChange={this.setCoins} type="number" />
                    <button onClick={this.sendMoney}>Send</button>
                </form>
            </section>
        )
    }
}

// const TransferFund = ({ contact }) => (
//     <section>
//         <h2>TransferFund cmp</h2>
//         <p>Give Some Coins to {contact && contact.name}</p>
//         Amount <input type="text" />
//         <button>Send</button>
//     </section>
// )

// export default TransferFund;

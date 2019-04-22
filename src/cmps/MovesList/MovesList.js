import React, { Component } from 'react';
import './MovesList.scss'
// import UserService from '../services/UserService';

export default class MovesList extends Component {
    
    render() {
        const movesList =
            this.props.moves.map((move, idx) => (
                <li className="transaction" key={idx} >
                   <div> To {move.to}</div>
                    <div>₿{move.amount}|<span>${move.amount*5024}</span></div>
                    <div>status:<span>approve</span></div>
                   <div>{move.at}</div> 
                   <br></br>
                </li>
            ));
        return (
            <section className="moves-list">
                <h3>{this.props.title}</h3>
                <ul>{movesList}</ul>
                {/* <ul>{this.props.moves}</ul> */}
                {/* {this.props.moves && this.props.moves} */}
            </section>
        )
    }
}
import React, { Component } from 'react';

// import UserService from '../services/UserService';

export default class MovesList extends Component {
    componentDidMount() {
        
    }
    componentDidUpdate() {
        
    }
    render() {
        const movesList =
            this.props.moves.map((move, idx) => (
                <li key={idx} >
                    {move.to} Get &nbsp;
                    {move.amount} Coins, At &nbsp;
                    {move.at}
                </li>
            ));
        return (
            <section>
                <h3>{this.props.title}</h3>
                <ul>{movesList}</ul>
                {/* <ul>{this.props.moves}</ul> */}
                {/* {this.props.moves && this.props.moves} */}
            </section>
        )
    }
}
// BASIC
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// CMPS
import MovesList from '../cmps/MovesList';
import TransferFund from '../cmps/TransferFund';

// SERVISES
import ContactService from '../services/ContactService';
import UserService from '../services/UserService';

// IMAGES
import editImg from '../assets/img/icons/edit.png';
import menuImg from '../assets/img/icons/menu.png';
import backImg from '../assets/img/icons/back-arrow.png';

class ContactDetailsPage extends Component {
    state = {
        contact: null,
        moves: []
    }
    async componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({
            contact: await ContactService.getContactById(id),
            moves: await UserService.getMovesByContactId(id)
        })
    }
    // componentDidMount() {
    //     const id = this.props.match.params.id;
    //     ContactService.getContactById(id)
    //         .then(res => this.setState({ contact: res }))
    // }
    addNewMove = (contact, amount) => {
        UserService.addMove(contact, amount)
            .then((newMove) => {
                var updateMoves = this.state.moves;
                updateMoves.unshift(newMove);
                this.setState({
                    moves: updateMoves
                })
            })
    }
    goOneBack = (ev) => {
        ev.preventDefault()
        this.props.history.go(-1)
    }
    goContactsList = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/contact`)
    }
    render() {
        var urlImg;
        if (this.state.contact) {
            urlImg = `${this.state.contact.img}`;
        }
        return (
            <div>

                <div className="user-details flex wrap ">
                    <div className="user-img">
                        <img height="150" src={urlImg} alt="" />
                    </div>

                    {this.state.contact &&
                        <div className="details">
                            <div>Name: {this.state.contact.name}</div>
                            <div>Phone: {this.state.contact.phone}</div>
                            <div>Email: {this.state.contact.email}</div>
                            <div>Coins: {this.state.contact.coins}</div>
                        </div>
                    }
                </div>

                <div className="options flex wrap space-between">
                    <img height="30" src={backImg} alt="" title="Back"
                        onClick={(ev) => { this.goOneBack(ev) }} />

                    <img height="30" src={menuImg} alt="" title="List"
                        onClick={(ev) => { this.goContactsList(ev) }} />

                    {this.state.contact &&
                        <Link to={`/contact/edit/${this.state.contact._id}`}>
                            <img height="30" src={editImg} alt="" title="Edit" />
                        </Link>
                    }
                </div>

                <TransferFund contact={this.state.contact} onTransferCoins={this.addNewMove} />
                <MovesList moves={this.state.moves}
                    title={`${this.state.contact && this.state.contact.name} - Transactions`} />

            </div>
        )
    }
}

export default withRouter(ContactDetailsPage)
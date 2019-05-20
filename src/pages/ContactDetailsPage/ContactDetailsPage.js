// BASIC
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// CMPS
import MovesList from '../../cmps/MovesList/MovesList';
import TransferFund from '../../cmps/TransferFund/TransferFund';

// SERVISES
import ContactService from '../../services/ContactService';
import UserService from '../../services/UserService';
import './ContactDetailsPage.scss'

import profileImg from '../../assets/img/profiles/profile-placeholder.jpg';


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
	addNewMove = (contact, amount) => {
		UserService.addMove(contact, amount)
			.then((newMove) => {
				this.props.UserStore.currUser.coins = this.props.UserStore.currUser.coins -amount
				var updateMoves = this.state.moves;
				updateMoves.unshift(newMove);
				this.setState({
					moves: updateMoves
				})
			})
	}
	goToContacts = () => {
		this.props.history.push(`/contact`)
	}
	removeContact = (ev, id) => {
		ev.preventDefault()
		ContactService.deleteContact(id)
		  .then(() => this.props.history.push(`/contact`))
	}

	render() {
		console.log(this.props.UserStore.currUser.coins)
		var urlImg;
		if (this.state.contact) {
			urlImg = `${this.state.contact.img}`;
		}
		return (
			<div className="contact-details">
				<header className="small-header">
					<button onClick={this.goToContacts}>Back</button>
				
				{this.state.contact &&
				<Link to={`/contact/edit/${this.state.contact._id}`}>
                           <button>Edit</button>
                </Link>
				}
				</header>

				
				<img
					className="img-profile"
					height="60"
					src={profileImg}
					alt=""
				/>

				<div className="flex flex-col">
					{this.state.contact &&
						<div className="details">
							<h1>{this.state.contact.userName}</h1>
							<h2>{this.state.contact.phone}</h2>
							<div>{this.state.contact.email}</div>
							
						</div>
					}
				</div>

				<TransferFund contact={this.state.contact} onTransferCoins={this.addNewMove} />
				<MovesList
					moves={this.state.moves}
					title={`♻ Moves HIstory`}
				/>
			</div>
		)
	}
}

export default withRouter(ContactDetailsPage)

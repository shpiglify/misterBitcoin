import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import editImg from '../assets/img/icons/edit.png';
import binImg from '../assets/img/icons/bin.png';

// export default class ContactPreview extends Component {
class ContactPreview extends Component {
	editClicked = (ev) => {
		ev.preventDefault()
		this.props.history.push(`/contact/edit/${this.props.contact._id}`)
	}
	removeClicked = (ev) => {
		ev.preventDefault()
		this.props.onEmitRemove(this.props.contact._id)
	}
	render() {
		// var urlImg = `${this.props.contact.img}`;
		var urlImg = `${this.props.contact.img}`;
		var userName = `${this.props.contact.userName}`;
		return (
			<Link to={`/contact/${this.props.contact._id}`} >
				<li>
					{/* <img height="26" src={require('../assets/img/icons/edit.png')}/> */}
					<div className="flex wrap space-even align-center">
						<img height="26" src={binImg} title="Delete"
							onClick={(ev) => this.removeClicked(ev)} alt="" />

						<img height="60" src="/assets/img/profiles/profile-placeholder.jpg" alt="" title={userName} />

						<img height="26" src={editImg} title="Edit"
							onClick={(ev) => this.editClicked(ev)} alt="" />
					</div>
					<div>{this.props.contact.userName}</div>
				</li>
			</Link>
		)
	}
}

ContactPreview.propTypes = {
	contact: PropTypes.object
}

export default withRouter(ContactPreview)

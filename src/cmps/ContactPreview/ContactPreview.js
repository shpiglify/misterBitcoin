import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import editImg from '../../assets/img/icons/edit.png';
import binImg from '../../assets/img/icons/bin.png';
import './ContactPreview.scss'

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
		const userName = this.props.contact.userName;

		return (
			<Link to={`/contact/${this.props.contact._id}`} >
				<li>
					<div>
						{/* <img height="26" src={binImg} title="Delete"
							onClick={(ev) => this.removeClicked(ev)} alt="" /> */}

						<img className="profile" height="60" src="/assets/img/profiles/profile-placeholder.jpg" alt="" title={userName} />

						{/* <img height="26" src={editImg} title="Edit"
							onClick={(ev) => this.editClicked(ev)} alt="" /> */}
					</div>
					<div>
						<div>{this.props.contact.userName}</div>
						<div className="phone">{this.props.contact.phone}</div>
					</div>
				</li>
			</Link>
		)
	}
}

ContactPreview.propTypes = {
	contact: PropTypes.object
}

export default withRouter(ContactPreview)

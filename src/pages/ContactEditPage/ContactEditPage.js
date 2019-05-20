import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ContactService from '../../services/ContactService';
import './ContactEditPage.scss'
import profileImg from '../../assets/img/profiles/profile-placeholder.jpg';


class ContactEditPage extends Component {
  state = {
    contact: null,
    isAddNew: true,
    isNameValid: true
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      ContactService.getContactById(id)
        .then(res => this.setState({ contact: res, isAddNew: false }))
    } else {
      this.setState({ contact: ContactService.getEmptyContact() })
    }
  }

  setName = (ev) => {
    var contact = { ...this.state.contact };
    contact.userName = ev.target.value;
    this.setState({ contact, isNameValid: true });
  }

  setEmail = (ev) => {
    var contact = { ...this.state.contact };
    contact.email = ev.target.value;
    this.setState({ contact });
  }

  setPhone = (ev) => {
    var contact = { ...this.state.contact };
    contact.phone = ev.target.value;
    this.setState({ contact });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    if (this.state.contact.userName === '') {
      this.setState({ isNameValid: false })
    } else {
      this.setState({ isNameValid: true })
      ContactService.saveContact(this.state.contact)
        .then(() => this.props.history.push(`/contact`))
    }
  }

  removeContact = (ev, id) => {
    ev.preventDefault()
    ContactService.deleteContact(id)
      .then(() => this.props.history.push(`/contact`))
  }

  goToContacts = () => {
    this.props.history.push('/contact')
  }

  render() {
    var nameError;
    if (!this.state.isNameValid) {
      nameError = <div>Name is Mandatory</div>
    }
    var urlImg;
    if (this.state.contact) {
      urlImg = `${this.state.contact.img}`;
    }

    return (
      <div className="contact-container">
        <header className="small-header">
          <button onClick={this.goToContacts}>Back</button>
        </header>

        <img
          className="img-profile"
          height="60"
          src={profileImg}
          alt=""
        />

        {!this.state.isAddNew && (
          <div className="delete">
          <button title="Delete" onClick={(ev) => this.removeContact(ev, this.state.contact._id)}>🗑</button>
          </div>
          // <>
          //   <img height="26" src={binImg} title="Delete" alt=""
          //     onClick={(ev) => this.removeContact(ev, this.state.contact._id)} />
          // </>
        )}

        {this.state.isAddNew &&
          <form onSubmit={this.handleSubmit} className="contact-form flex flex-col">
            <input onChange={this.setName} type="text" placeholder="Contact Name" />
            <input onChange={this.setEmail} type="email" placeholder="Email" />
            <input onChange={this.setPhone} type="tel" placeholder="Phone Number" />

            <button className="btn-full">Create!</button>
          </form>
        }
        {!this.state.isAddNew &&
          <form onSubmit={this.handleSubmit} className="contact-form flex flex-col">
            <input onChange={this.setName} value={this.state.contact.userName}
              type="text" placeholder="Contact Name" />
            <input onChange={this.setEmail} value={this.state.contact.email}
              type="email" placeholder="Email" />
            <input onChange={this.setPhone} value={this.state.contact.phone}
              type="tel" placeholder="Phone Number" />

            <button className="btn-full">Update!</button>
          </form>
        }
        {nameError}
      </div>
    )
  }
}

export default withRouter(ContactEditPage)

// ContactEditPage.propTypes = {
//     contact: PropTypes.object
// }



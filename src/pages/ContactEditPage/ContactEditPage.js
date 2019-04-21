import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ContactService from '../../services/ContactService';
import binImg from '../../assets/img/icons/bin.png';
import backImg from '../../assets/img/icons/back-arrow.png';
import './ContactEditPage.scss'

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

  goOneBack = (ev) => {
    ev.preventDefault()
    this.props.history.go(-1)
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
      <div>
        <div className="contact-container">

          {this.state.isAddNew ?
            <div className="options-edit">
              <h3>Add New</h3>

              <img height="30" src={backImg} alt="" title="Back"
                onClick={(ev) => { this.goOneBack(ev) }} />

            </div>
            :
            <div className="options-edit">
              <h3>Edit Contact</h3>
              <Link to={`/contact/${this.state.contact._id}`}>
                <img height="30" src={backImg} alt="" title="Back to Details" />
              </Link>

              <img height="26" src={binImg} title="Delete" alt=""
                onClick={(ev) => this.removeContact(ev, this.state.contact._id)} />

            </div>
          }

          <div>
            <img height="100" src={urlImg} alt="" />
          </div>

          {this.state.isAddNew &&
            <form onSubmit={this.handleSubmit} className="contact-form flex flex-col">
              Name: <input onChange={this.setName} type="text" placeholder="Contact Name" />
              Email: <input onChange={this.setEmail} type="email" placeholder="Email" />
              Phone: <input onChange={this.setPhone} type="tel" placeholder="Phone Number" />

              <input type="submit" value="Create!" />
            </form>
          }
          {!this.state.isAddNew &&
            <form onSubmit={this.handleSubmit} className="contact-form flex flex-col">
              Name: <input onChange={this.setName} value={this.state.contact.userName}
                type="text" placeholder="Contact Name" />
              Email: <input onChange={this.setEmail} value={this.state.contact.email}
                type="email" placeholder="Email" />
              Phone: <input onChange={this.setPhone} value={this.state.contact.phone}
                type="tel" placeholder="Phone Number" />

              <input type="submit" value="Update!" />
            </form>
          }
          {nameError}
        </div>
      </div>
    )
  }
}

export default withRouter(ContactEditPage)

// ContactEditPage.propTypes = {
//     contact: PropTypes.object
// }



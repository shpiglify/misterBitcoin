import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ContactPreview from '../cmps/ContactPreview';

import newUser from '../assets/img/icons/new-user.png';

export default class ContactList extends Component {
  emitRemoveContact = (id) => {
    console.log('send to remove - Contact Page', id);
    this.props.onRemove(id)
  }
  render() {
    const contactsList =
      this.props.contacts.map((contact) => (
        <ContactPreview contact={contact} onEmitRemove={this.emitRemoveContact} key={contact._id} />
      ));
    return (
      <section>
        <div className="new-contact">
          <Link to={`/contact/edit`} >
            <div>
              <img src={newUser} alt="" />
            </div>
          </Link>
        </div>

        <ul className="contact-list">
          {contactsList}
        </ul>
      </section>
    )
  }
}

ContactList.propTypes = {
  // contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object),
}
ContactList.defaultProps = {
  contacts: [],
}




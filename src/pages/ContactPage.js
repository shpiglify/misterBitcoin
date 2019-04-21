import React, { Component } from 'react';

import ContactList from '../cmps/ContactList/ContactList';
import ContactFilter from '../cmps/ContactFilter/ContactFilter';

import ContactService from '../services/ContactService';

export default class ContactPage extends Component {
    state = {
        contacts: null,
        contactsToShow: null,
        saveFilter: ''
    }

    async componentDidMount() {
        this.setState({ contacts: await ContactService.getContacts() })
        this.filterContacts(this.state.saveFilter);
    }

    filterContacts = (stringToFilter) => {
        const filterdContacts = this.state.contacts.filter(contact => {
            return contact.userName.toLowerCase().includes(stringToFilter.toLowerCase())
        })
        this.setState({
            contactsToShow: filterdContacts,
            saveFilter: stringToFilter
        })
    }

    removeContact = (id) => {
        ContactService.deleteContact(id)
            .then((updateContacts) => {
                this.setState({ contacts: updateContacts })
                this.filterContacts(this.state.saveFilter);
            })
    }

    render() {
        return (
            <section>
                <ContactFilter onFilter={this.filterContacts} />

                {this.state.contactsToShow &&
                    <ContactList contacts={this.state.contactsToShow} onRemove={this.removeContact} />
                }
            </section>
        )
    }
}

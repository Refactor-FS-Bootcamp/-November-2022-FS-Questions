import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {
    const deleteContactHandler = id => props.getContactId(id)
    
    return (
        <div className='ui celled list'>
            {props.contacts.map(contact => <ContactCard key={contact.id} clickHandler={deleteContactHandler} contact={contact} />)}
        </div>
    )
}

export default ContactList
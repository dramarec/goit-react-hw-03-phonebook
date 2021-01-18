import React from "react";
import ContactsItem from "./contactsItem/ContactsItem";

const Contacts = ({ contacts, onRemove, onUpdateContact }) => {
    return (
        <ul>
            {contacts.map(({ name, number, id, completed }) => (
                <ContactsItem
                    key={id}
                    name={name}
                    number={number}
                    dataId={id}
                    completed={completed}
                    onRemove={onRemove}
                    onUpdate={onUpdateContact}
                />
            ))}
        </ul>
    );
};

export default Contacts;

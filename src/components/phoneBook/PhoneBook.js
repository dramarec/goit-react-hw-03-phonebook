import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Form from "../form/Form";
import Header from "../header/Header";
import Section from "../section/Section";
import Contacts from "../contacts/Contacts";
import FindContact from "../findContact/FindContact";

// import data from "../../data/data";
// console.log("data :", data);

export default class PhoneBook extends Component {
    state = {
        contacts: [
            {
                completed: "",
                id: "id-1",
                name: "Rosie Simpson",
                number: "459-12-56",
            },
            {
                completed: "",
                id: "id-2",
                name: "Hermione Kline",
                number: "443-89-12",
            },
            {
                completed: "",
                id: "id-3",
                name: "Eden Clements",
                number: "645-17-79",
            },
            {
                completed: "",
                id: "id-4",
                name: "Annie Copeland",
                number: "227-91-26",
            },
        ],
        filter: "",
    };

    componentDidMount() {
        console.log("componentDidMount");
        // console.log(localStorage.getItem("contacts"));
        const persistedContacts = localStorage.getItem("contacts");
        if (persistedContacts) {
            // console.log("persistedContacts :", persistedContacts);
            this.setState({
                contacts: JSON.parse(persistedContacts),
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        // console.log("prevState :", prevState);
        // console.log("this.state :", this.state);
        if (prevState.contacts !== this.state.contacts) {
            localStorage.setItem(
                "contacts",
                JSON.stringify(this.state.contacts)
            );
        }
    }

    addContact = ({ name, number, completed }) => {
        const { contacts } = this.state;
        const contact = {
            id: uuidv4(),
            name,
            number,
            completed,
        };

        if (
            contacts.find(
                (contact) => contact.name.toLowerCase() === name.toLowerCase()
            )
        ) {
            alert(`${name} такое имя уже есть!`);
            return;
        }
        if (contacts.find((contact) => contact.number === number)) {
            alert(`${number} такой номер уже есть!`);
            return;
        }
        if (!name.length || !number.length) {
            alert("Все поля должны быть заполнены!");
            return;
        }
        this.setState((prevState) => {
            return {
                contacts: [...prevState.contacts, contact],
            };
        });
    };

    removeContact = (e) => {
        const id = e.target.dataset.id;
        this.setState({
            contacts: [
                ...this.state.contacts.filter((contact) => contact.id !== id),
            ],
        });
    };

    changeFilter = (e) => {
        this.setState({ filter: e.target.value });
    };

    getVisibleContacts = () => {
        const { contacts, filter } = this.state;
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    updateCompleted = (e) => {
        const id = e.target.dataset.id;
        this.setState((prevState) => {
            return {
                contacts: prevState.contacts.map((contact) => {
                    return contact.id === id
                        ? { ...contact, completed: !contact.completed }
                        : contact;

                    // if (contact.id === id) {
                    //     return {
                    //         ...contact,
                    //         completed: !contact.completed,
                    //     };
                    // }
                    // return contact;
                }),
            };
        });
    };

    render() {
        const { contacts, filter } = this.state;
        const visibleContacts = this.getVisibleContacts();
        return (
            <>
                <Header title="Home Work #2 Phonebook" />

                <Section title="Phonebook">
                    <Form onAddContact={this.addContact} />
                </Section>

                {contacts.length > 1 && (
                    <Section title="Finder contacts">
                        <FindContact
                            filter={filter}
                            onChangeFilter={this.changeFilter}
                        />
                    </Section>
                )}

                {contacts.length > 0 && (
                    <Section title="My Contacts">
                        <Contacts
                            contacts={visibleContacts}
                            onRemove={this.removeContact}
                            onUpdateContact={this.updateCompleted}
                        />
                    </Section>
                )}
            </>
        );
    }
}

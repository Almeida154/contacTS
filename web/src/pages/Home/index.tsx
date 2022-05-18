import React, { useEffect, useState, useContext, useRef } from 'react';
import { ThemeContext } from 'styled-components';
import { BarLoader } from 'react-spinners';

import {
  ContactsContainer,
  FloatboxContainer,
  Container,
  LoadingContainer,
} from './styles';

import Floatbox from '../../components/Floatbox';
import Footer from '../../components/Footer';

import api from '../../services/api';
import Card from '../../components/Card';

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  cpf: string;
  emails: [
    {
      id: string;
      address: string;
      contact_id: string;
    }
  ];
  telephones: [
    {
      id: string;
      number: string;
      contact_id: string;
    }
  ];
}

interface HomeProps {
  toggleTheme: () => void;
}

const Home: React.FC<HomeProps> = ({ toggleTheme }) => {
  const [isLoading, setLoading] = useState(true);
  const [contactsContainerHeight, setContactsContainerHeight] = useState(0);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [search, setSearch] = useState('');

  const { colors } = useContext(ThemeContext);
  const contactsContainerRef = useRef<HTMLDivElement>(null);

  async function handleListContacts() {
    const contacts = await api.get('contacts');
    setContacts(contacts.data);
  }

  function handleLoadingTimeout() {
    setTimeout(() => {
      const height = Number(contactsContainerRef.current?.clientHeight);
      setContactsContainerHeight(height);
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    const filteredContacts = contacts.filter(contact =>
      (contact.firstName + ' ' + contact.lastName)
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase().trim())
    );

    setFilteredContacts(filteredContacts);
    handleLoadingTimeout();
  }, [search, contacts]);

  useEffect(() => {
    handleListContacts();
    handleLoadingTimeout();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingContainer>
          <BarLoader
            color={colors.span}
            width={150}
            height={4}
            loading={isLoading}
          />
        </LoadingContainer>
      ) : (
        <>
          <Container>
            <FloatboxContainer>
              <Floatbox
                contactsContainerHeight={contactsContainerHeight}
                toggleTheme={toggleTheme}
                setSearch={setSearch}
              />
            </FloatboxContainer>
            <ContactsContainer ref={contactsContainerRef}>
              {search === ''
                ? contacts.map(contact => (
                    <Card key={contact.id} contact={contact} />
                  ))
                : filteredContacts.map(contact => (
                    <Card key={contact.id} contact={contact} />
                  ))}
            </ContactsContainer>
          </Container>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;

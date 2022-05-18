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

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [contactsContainerHeight, setContactsContainerHeight] = useState(0);
  const [contacts, setContacts] = useState<Contact[]>([]);

  const { colors } = useContext(ThemeContext);
  const contactsContainerRef = useRef<HTMLDivElement>(null);

  async function handleListContacts() {
    const contacts = await api.get('contacts');
    setContacts(contacts.data);
  }

  useEffect(() => {
    handleListContacts();

    setTimeout(() => {
      const height = Number(contactsContainerRef.current?.clientHeight);
      setContactsContainerHeight(height);
      setLoading(false);
    }, 1000);
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
              <Floatbox contactsContainerHeight={contactsContainerHeight} />
            </FloatboxContainer>
            <ContactsContainer ref={contactsContainerRef}>
              {contacts.map(contact => (
                <h1>{contact.firstName}</h1>
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

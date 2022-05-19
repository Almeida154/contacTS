import React from 'react';
import { BiAt, BiPhone } from 'react-icons/bi';
import { Container, Details, Name, ProfileImage } from './styles';

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

interface CardProps {
  contact: Contact;
}

const Card: React.FC<CardProps> = ({ contact }) => {
  return (
    <Container>
      <ProfileImage>
        {contact.firstName.charAt(0) + contact.lastName.charAt(0)}
      </ProfileImage>
      <div>
        <Name>
          {contact.firstName} {contact.lastName}
        </Name>
        <Details>
          <ul>
            <li>
              <BiPhone size={14} />
              {contact.telephones.length}{' '}
              {contact.telephones.length > 1 ? 'Telefones' : 'Telefone'}
            </li>
            {contact.emails.length > 0 && (
              <li>
                <BiAt size={14} />
                {contact.emails.length}{' '}
                {contact.emails.length > 1 ? 'Emails' : 'Email'}
              </li>
            )}
            {contact.cpf && <li>cpf</li>}
          </ul>
        </Details>
      </div>
    </Container>
  );
};

export default Card;

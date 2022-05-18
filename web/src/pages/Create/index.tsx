import React, { FormEvent, useState } from 'react';
import { BiArrowBack, BiTrash } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import toast, { Toaster } from 'react-hot-toast';

import Footer from '../../components/Footer';

import {
  Container,
  DeleteInput,
  Field,
  FieldGroup,
  Fieldset,
  Form,
  FormContainer,
  InputContainer,
} from './styles';
import Button from '../../components/Button';

type Contact = {
  firstName: string;
  lastName: string;
  cpf?: string;
  emails?: string[];
  telephones: string[];
};

const Create = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [emails, setEmails] = useState<string[]>(['']);
  const [phones, setPhones] = useState<string[]>(['']);

  // const navigate = useNavigate();

  function handleCreateContact(e: FormEvent) {
    e.preventDefault();

    toast.success('Sucesso papai', {
      position: 'top-right',
      duration: 2000,
      iconTheme: {
        primary: 'black',
        secondary: 'white',
      },
    });

    // const newContact: Contact = {
    //   firstName: firstName,
    //   lastName: lastName,
    //   cpf: cpf !== '' ? cpf : undefined,
    //   emails: emails[0] !== '' ? emails : undefined,
    //   telephones: phones,
    // };
    // console.log(newContact);
    // navigate({ pathname: '/' });
  }

  function handleNewEmailInput() {
    setEmails([...emails, '']);
  }

  function handleRemoveEmailInput(index: number) {
    let newEmails = [...emails];
    newEmails.splice(index, 1);
    setEmails(newEmails);
  }

  function handleNewPhoneInput() {
    setPhones([...phones, '']);
  }

  function handleRemovePhoneInput(index: number) {
    let newPhones = [...phones];
    newPhones.splice(index, 1);
    setPhones(newPhones);
  }

  return (
    <>
      <Container>
        <Link to='/'>
          <BiArrowBack size={24} />
        </Link>
        <FormContainer>
          <span style={{ opacity: 0.5 }}>
            Preencha todos os campos obrigatórios
          </span>
          <h1>Novo contato</h1>
          <Form>
            <Fieldset>
              <FieldGroup>
                <Field>
                  <label className='mandatory' htmlFor='firstName'>
                    Primeiro nome
                  </label>
                  <input
                    type='text'
                    name='firstName'
                    id='firstName'
                    value={firstName}
                    placeholder='Seu primeiro nome'
                    onChange={e => setFirstName(e.target.value)}
                  />
                </Field>

                <Field>
                  <label className='mandatory' htmlFor='lastName'>
                    Segundo nome
                  </label>
                  <input
                    type='text'
                    name='lastName'
                    id='lastName'
                    value={lastName}
                    placeholder='Seu segundo nome'
                    onChange={e => setLastName(e.target.value)}
                  />
                </Field>
              </FieldGroup>

              <Field>
                <label htmlFor='cpf'>Cpf</label>
                <InputMask
                  mask={'999.999.999-99'}
                  maskPlaceholder={''}
                  placeholder='Seu cpf'
                  type='text'
                  name='cpf'
                  id='cpf'
                  onChange={e => setCpf(e.target.value)}
                />
              </Field>

              <Field>
                <label htmlFor='email'>Email</label>
                {emails.map((email, index) => (
                  <InputContainer key={index}>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='exemplo@email.com'
                      onChange={e => {
                        var newEmail = e.target.value.toString();
                        var newEmails = emails;
                        newEmails[index] = newEmail;
                        setEmails(newEmails);
                      }}
                    />
                    {index > 0 && (
                      <DeleteInput
                        onClick={() => {
                          handleRemoveEmailInput(index);
                        }}
                        className='deleteInput'>
                        <BiTrash size={24} />
                      </DeleteInput>
                    )}
                  </InputContainer>
                ))}
                <Button
                  text='Add'
                  onPress={handleNewEmailInput}
                  isLink={false}
                  isShort
                />
              </Field>

              <Field>
                <label className='mandatory' htmlFor='phone'>
                  Número
                </label>
                {phones.map((phone, index) => (
                  <InputContainer key={index}>
                    <InputMask
                      mask={'(99) 99999-9999'}
                      maskPlaceholder={''}
                      placeholder='(12) 34567-8912'
                      type='text'
                      name='phone'
                      id='phone'
                      onChange={e => {
                        var newPhone = e.target.value.toString();
                        var newPhones = phones;
                        newPhones[index] = newPhone;
                        setPhones(newPhones);
                      }}
                    />
                    {index > 0 && (
                      <DeleteInput
                        onClick={() => {
                          handleRemovePhoneInput(index);
                        }}
                        className='deleteInput'>
                        <BiTrash size={24} />
                      </DeleteInput>
                    )}
                  </InputContainer>
                ))}
                <Button
                  text='Add'
                  onPress={handleNewPhoneInput}
                  isLink={false}
                  isShort
                />
              </Field>
            </Fieldset>
            <Button
              text='Cadastrar'
              onPress={handleCreateContact}
              isLink={false}
              isSubmitButton
            />
          </Form>
        </FormContainer>
      </Container>
      <Footer />
      <Toaster />
    </>
  );
};

export default Create;

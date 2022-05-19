import React, { FormEvent, useState, useContext } from 'react';
import { BiArrowBack, BiTrash } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import toast, { Toaster } from 'react-hot-toast';
import { ThemeContext } from 'styled-components';

import api from '../../services/api';
import verifyCpf from '../../utils/verifyCpf';

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
import Footer from '../../components/Footer';

type Contact = {
  firstName: string;
  lastName: string;
  cpf: string | null;
  emails: string[] | null;
  telephones: string[];
};

const Create = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [emails, setEmails] = useState<string[]>(['']);
  const [phones, setPhones] = useState<string[]>(['']);

  const { colors } = useContext(ThemeContext);
  const navigate = useNavigate();

  const showToast = (type: string, message: string) => {
    switch (type) {
      case 'error':
        toast.error(message, {
          position: 'top-right',
          duration: 2000,
        });
        break;
      case 'success':
        toast.success(message, {
          position: 'top-right',
          duration: 2000,
        });
        break;
      case 'alert':
        toast.success(message, {
          position: 'top-right',
          duration: 2000,
        });
        break;
      default:
        break;
    }
  };

  const isMandatoryFieldsFilled = (
    firstName: string,
    lastName: string,
    phones: string[]
  ) => {
    if (firstName === '') {
      showToast('error', 'Preencha todos os campos');
      return false;
    }

    if (lastName === '') {
      showToast('error', 'Preencha todos os campos');
      return false;
    }

    const invalidPhones = phones.filter(phone => phone.length !== 15);
    if (invalidPhones.length > 0) {
      showToast('error', 'Número inválido');
      return false;
    }
    return true;
  };

  const isDuplicated = (arr: string[]) => {
    const isDuplicated = arr.some(
      (item: string, index: number) => index !== arr.indexOf(item)
    );
    if (isDuplicated) {
      showToast('error', 'Campos repetidos!');
      return true;
    }
    return false;
  };

  const areEmailsValid = (emails: string[]) => {
    var regex = /\S+@\S+\.\S+/;
    var theresInvalid = emails.every(email => {
      return regex.test(email);
    });
    !theresInvalid && showToast('error', 'Email inválido');
    return theresInvalid;
  };

  const isCpfValid = (cpf: string) => {
    // 535.091.238-08
    const stringfiedCPF = cpf.replaceAll('.', '').replace('-', '');

    const isValid = verifyCpf(stringfiedCPF);
    !isValid && showToast('error', 'Cpf inválido');

    return isValid;
  };

  async function handleCreateContact(e: FormEvent) {
    e.preventDefault();
    console.clear();

    var isAllMandatoryFieldsFilled = isMandatoryFieldsFilled(
      firstName,
      lastName,
      phones
    );
    console.log('isAllMandatoryFieldsFilled', isAllMandatoryFieldsFilled);

    var hasPhoneDuplicated = isDuplicated(phones);
    console.log('hasPhoneDuplicated', hasPhoneDuplicated);

    var areAllEmailsValid =
      emails[0] !== '' ? areEmailsValid(emails) : true;
    console.log('areAllEmailsValid', areAllEmailsValid);

    var hasEmailDuplicated =
      emails[0] !== '' ? isDuplicated(emails) : false;
    console.log('hasEmailDuplicated', hasEmailDuplicated);

    var isCPFValid = cpf.length === 0 ? true : isCpfValid(cpf);
    console.log('isCPFValid', isCPFValid);

    if (
      isAllMandatoryFieldsFilled &&
      !hasPhoneDuplicated &&
      !hasEmailDuplicated &&
      areAllEmailsValid &&
      isCPFValid
    ) {
      const newContact: Contact = {
        firstName: firstName,
        lastName: lastName,
        cpf: cpf.length === 0 ? null : cpf,
        emails: emails[0] === '' ? null : emails,
        telephones: phones,
      };

      const response = await api.post('contact', { ...newContact });

      if (response.data.error)
        return showToast('error', response.data.error);

      showToast('success', response.data.success);
      console.log(response.data);
      navigate({ pathname: '/' });
    }
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
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: colors.success_light,
              color: colors.success_stronger,
              border: `3px solid ${colors.success_stronger}`,
              fontWeight: 600,
            },
            iconTheme: {
              primary: colors.success_stronger,
              secondary: colors.success_light,
            },
          },
          error: {
            style: {
              background: colors.danger_light,
              color: colors.danger_stronger,
              border: `3px solid ${colors.danger_stronger}`,
              fontWeight: 600,
            },
            iconTheme: {
              primary: colors.danger_stronger,
              secondary: colors.danger_light,
            },
          },
        }}
      />
    </>
  );
};

export default Create;

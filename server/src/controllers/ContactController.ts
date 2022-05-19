import { Request, Response } from 'express';
import { Not } from 'typeorm';
import { AppDataSource } from '../data-source';

import { Contact } from '../entities/Contact';
import { Telephone } from '../entities/Telephone';
import { Email } from '../entities/Email';

class ContactController {
  async save(req: Request, res: Response) {
    const contactRepository = AppDataSource.getRepository(Contact);
    const telephoneRepository = AppDataSource.getRepository(Telephone);
    const emailRepository = AppDataSource.getRepository(Email);

    const { firstName, lastName, cpf, telephones, emails } = req.body;

    if (!firstName || !lastName || telephones.length < 1)
      return res.json({ error: 'Preencha os campos obrigatórios' });

    if (cpf) {
      var contactExists = await contactRepository.findOne({
        where: { cpf },
      });
      if (contactExists) return res.json({ error: 'Cpf já cadastrado' });
    }

    const contact = contactRepository.create({
      firstName,
      lastName,
      cpf,
    });

    await contactRepository.save(contact);

    telephones.map(async (number: string) => {
      var newTelephone = telephoneRepository.create({
        number,
        contact,
      });
      await telephoneRepository.save(newTelephone);
    });

    if (emails)
      emails?.map(async (address: string) => {
        var newEmail = emailRepository.create({
          address,
          contact,
        });
        await emailRepository.save(newEmail);
      });

    return res.json({
      success: 'Contato criado com sucesso',
      contact,
    });
  }

  async update(req: Request, res: Response) {
    const contactRepository = AppDataSource.getRepository(Contact);
    const telephoneRepository = AppDataSource.getRepository(Telephone);
    const emailRepository = AppDataSource.getRepository(Email);

    const { id } = req.params;
    const { firstName, lastName, cpf, telephones, emails } = req.body;

    if (!firstName || !lastName)
      return res.json({ error: 'Preencha os campos obrigatórios' });

    var contact = await contactRepository.findOne({
      where: { id },
    });

    if (!contact) return res.json({ error: 'Algo deu errado' });

    if (cpf) {
      var cpfExists = await contactRepository.findOne({
        where: { cpf, id: Not(id) },
      });
      if (cpfExists) return res.json({ error: 'Cpf já cadastrado' });
    }

    const allEmails = await emailRepository.find({
      where: { contact: contact },
    });
    allEmails.map(async email => await emailRepository.delete(email));

    const allTelephones = await telephoneRepository.find({
      where: { contact: contact },
    });
    allTelephones.map(
      async phone => await telephoneRepository.delete(phone)
    );

    if (telephones)
      telephones.map(async (number: string) => {
        if (contact) {
          let newTelephone = telephoneRepository.create({
            number,
            contact,
          });
          await telephoneRepository.save(newTelephone);
        }
      });

    if (emails)
      emails.map(async (address: string) => {
        if (contact) {
          let newEmail = emailRepository.create({
            address,
            contact,
          });
          await emailRepository.save(newEmail);
        }
      });

    cpf === '' ? null : cpf;

    // @ts-ignore
    var updatedContact: Contact = {
      ...contact,
      firstName,
      lastName,
      cpf,
    };

    updatedContact = contactRepository.create(updatedContact);
    await contactRepository.save(updatedContact);

    return res.json({ success: 'Contato atualizado', updatedContact });
  }

  async all(req: Request, res: Response) {
    const contactRepository = AppDataSource.getRepository(Contact);
    const contacts = await contactRepository.find({
      relations: ['emails', 'telephones'],
    });
    return res.json(contacts);
  }

  async one(req: Request, res: Response) {
    const contactRepository = AppDataSource.getRepository(Contact);

    if (!req.params.id) return res.json({ message: 'Algo deu errado' });

    var contact = await contactRepository.findOne({
      where: { id: req.params.id },
      relations: ['emails', 'telephones'],
    });

    return res.json(contact);
  }

  async delete(req: Request, res: Response) {
    const contactRepository = AppDataSource.getRepository(Contact);

    if (!req.params.id) return res.json({ message: 'Algo deu errado' });

    var contact = await contactRepository.findOne({
      where: { id: req.params.id },
    });

    if (!contact) return res.json({ message: 'Algo deu errado' });

    await contactRepository.remove(contact);
    return res.json({ message: 'Contato deletado' });
  }
}

export default new ContactController();

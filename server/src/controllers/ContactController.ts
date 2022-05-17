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
      return res.json({ message: 'Preencha os campos obrigatórios' });

    if (cpf) {
      var contactExists = await contactRepository.findOne({
        where: { cpf },
      });
      if (contactExists) return res.json({ message: 'Cpf já cadastrado' });
    }

    const contact = contactRepository.create({
      firstName,
      lastName,
      cpf,
    });

    await contactRepository.save(contact);

    // var createdTelephones: string[] = [];
    telephones.map(async (number: string) => {
      var newTelephone = telephoneRepository.create({
        number,
        contact,
      });
      // createdTelephones.push(
      //   (await telephoneRepository.save(newTelephone)).number
      // );
    });

    // var createdEmails: string[] = [];
    if (emails.length > 0)
      emails.map(async (address: string) => {
        var newEmail = emailRepository.create({
          address,
          contact,
        });
        // createdEmails.push((await emailRepository.save(newEmail)).address);
      });

    return res.json(contact);
  }

  async update(req: Request, res: Response) {
    const contactRepository = AppDataSource.getRepository(Contact);
    const { id } = req.params;
    const { firstName, lastName, cpf } = req.body;

    if (!firstName || !lastName)
      return res.json({ message: 'Preencha os campos obrigatórios' });

    if (cpf) {
      var contactExists = await contactRepository.findOne({
        where: { cpf, id: Not(id) },
      });
      if (contactExists) return res.json({ message: 'Cpf já cadastrado' });
    }

    var updatedContact = {
      ...req.body,
      id,
    };

    updatedContact = contactRepository.create(updatedContact);
    await contactRepository.save(updatedContact);

    updatedContact = await contactRepository.findOne({
      where: { id },
    });

    return res.json({ updatedContact });
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

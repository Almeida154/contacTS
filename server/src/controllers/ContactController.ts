import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';

import { Contact } from '../entities/Contact';

class ContactController {
  async save(req: Request, res: Response) {
    const userRepository = AppDataSource.getRepository(Contact);
    const { firstName, lastName, cpf } = req.body;

    if (cpf) {
      var contactExists = await userRepository.findOne({
        where: { cpf },
      });
      if (contactExists)
        return res.json({ message: 'Cpf já cadastrado' });
    }

    const contact = userRepository.create({
      firstName,
      lastName,
      cpf,
    });

    await userRepository.save(contact);

    return res.json(contact);
  }

  async all(req: Request, res: Response) {
    return res.json({ message: 'ok' });
  }
}

export default new ContactController();

import { Request, Response } from 'express';

class ContactController {
  async all(req: Request, res: Response) {
    return res.json({
      message: 'Hello docker from server',
    });
  }
}

export default new ContactController();

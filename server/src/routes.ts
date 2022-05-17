import { Router } from 'express';

import ContactController from './controllers/ContactController';

const routes = Router();

routes.post('/contact', ContactController.save);
routes.get('/contacts', ContactController.all);

export default routes;

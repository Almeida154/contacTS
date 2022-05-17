import { Router } from 'express';

import ContactController from './controllers/ContactController';

const routes = Router();

routes.post('/contact', ContactController.save);
routes.put('/contact/update/:id', ContactController.update);
routes.get('/contacts', ContactController.all);
routes.get('/contact/:id', ContactController.one);
routes.delete('/contact/delete/:id', ContactController.delete);

export default routes;

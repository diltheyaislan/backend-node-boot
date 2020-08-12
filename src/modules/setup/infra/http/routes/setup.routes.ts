import { Router } from 'express';

import SetupController from '@modules/setup/infra/http/controllers/SetupController';

const setupRouter = Router();
const setupController = new SetupController();

setupRouter.post('/', setupController.create);

export default setupRouter;

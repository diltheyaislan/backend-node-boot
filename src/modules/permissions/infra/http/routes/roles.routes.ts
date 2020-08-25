import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import RolesController from '@modules/permissions/infra/http/controllers/RolesController';

const rolesRouter = Router();
const rolesController = new RolesController();

rolesRouter.use(ensureAuthenticated);

rolesRouter.get('/', rolesController.index);

rolesRouter.get('/:id', rolesController.show);

rolesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      label: Joi.string().required(),
      name: Joi.string().required(),
    },
  }),
  rolesController.create,
);

rolesRouter.patch(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  rolesController.update,
);

rolesRouter.delete('/:id', rolesController.delete);

rolesRouter.put(
  '/:id/permissions',
  celebrate({
    [Segments.BODY]: {
      permissions: Joi.array().required(),
    },
  }),
  rolesController.savePermissions,
);

export default rolesRouter;

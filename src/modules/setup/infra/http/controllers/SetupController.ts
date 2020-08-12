import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SetupService from '@modules/setup/services/SetupService';

export default class SetupController {
  public async create(
    _request: Request,
    response: Response,
  ): Promise<Response> {
    const createUser = container.resolve(SetupService);

    const setupResult = await createUser.execute();

    return response.json(setupResult);
  }
}

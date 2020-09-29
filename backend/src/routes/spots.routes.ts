import { Router } from 'express';

import CreateSpotService from '../services/CreateSpotService';

const spotRouter = Router();

spotRouter.post('/', async (request, response) => {
  const {
    owner_id,
    state,
    city,
    number,
    street,
    neighborhood,
    cep,
    complement,
    price,
    description,
  } = request.body;

  const createSpotService = new CreateSpotService();
  const spot = await createSpotService.execute({
    owner_id,
    state,
    city,
    street,
    neighborhood,
    cep,
    complement,
    number,
    price,
    description,
  });

  return response.status(200).json(spot);
});

export default spotRouter;
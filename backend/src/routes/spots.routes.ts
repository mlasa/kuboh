import { Router } from 'express';
import { getRepository } from 'typeorm';

import Spot from '../models/Spot';
import ensureAuthentication from '../middleware/ensureAuthentication';
import CreateSpotService from '../services/CreateSpotService';

const spotRouter = Router();

spotRouter.use(ensureAuthentication);

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

spotRouter.get('/', async (request, response) => {
  const spotRepository = getRepository(Spot);
  const allSpots = await spotRepository.find();
  if (allSpots) {
    allSpots.map(spot => delete spot.owner.password);
    return response.status(200).json(allSpots);
  }


});

export default spotRouter;

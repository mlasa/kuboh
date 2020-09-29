import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Spot from '../models/Spot';

interface Request {
  owner_id: string;
  state: string;
  city: string;
  street: string;
  neighborhood: string;
  cep: number;
  complement: string;
  number: number;
  price: number;
  description: string;
}

class CreateSpotService {
  public async execute({
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
  }: Request): Promise<Spot> {
    const spotRepository = getRepository(Spot);

    if (!state || !city || !complement || !street || !neighborhood || !cep) {
      throw new AppError(
        `Some of the required address information(state,  city, complement, street,
         neighborhood,cep) is missing`,
        400,
      );
    }
    if (!price) throw new AppError('Price is a needed information', 400);

    const spot = spotRepository.create({
      owner_id,
      localization: `${street},${neighborhood},${number},${city},${state},${cep},
      ${complement}`,
      price,
      description,
    });
    await spotRepository.save(spot);

    return spot;
  }
}
export default CreateSpotService;

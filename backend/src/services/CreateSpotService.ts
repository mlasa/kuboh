import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Spot from '../models/Spot';
import User from '../models/User';

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

    const userRepository = getRepository(User);
    const ownerExists = await userRepository.findOne({ where: { id: owner_id } });
    if (!ownerExists)
      throw new AppError('Owner not found, owner_id not valid');

    const spotRepository = getRepository(Spot);

    if (!state || !city || !complement || !street || !neighborhood || !cep) {
      throw new AppError(
        `Some of the required address information(state,  city, complement, street,
         neighborhood,cep) is missing`,
        400,
      );
    }

    if (!price) throw new AppError('Price is a required information', 400);


    const regexMoneyFormat = /^\d{1,}(\.\d{2})?$/;
    console.log('valor convertido pra string', price.toString())
    if (!regexMoneyFormat.test(price.toString())) {
      console.log('resultado do teste', regexMoneyFormat.test(price.toString()))
      throw new AppError('Price format invalid, valid shapes: 0 ou 0.00');
    }

    const spot = spotRepository.create({
      owner_id,
      localization: `${street},${neighborhood},${number},${city},${state},${cep},${complement}`,
      price,
      description,
    });
    await spotRepository.save(spot);

    return spot;
  }
}
export default CreateSpotService;

import { Router } from 'express';
import { getRepository } from 'typeorm';

import ensureAuthentication from '../middleware/ensureAuthentication';
import CreateBookingService from '../services/CreateBookingService';
import Booking from '../models/Booking'

const bookingsRouter = Router();


bookingsRouter.get('/', async (request, response) => {

  const bookingsRepository = getRepository(Booking);
  const bookings = await bookingsRepository.find();

  return response.status(200).json(bookings);
});

bookingsRouter.use(ensureAuthentication);

bookingsRouter.post('/', async (request, response) => {
  const { spot, checkin, checkout } = request.body;
  const guest = request.user.id;
  const createBookingService = new CreateBookingService();

  const booking = await createBookingService.execute({
    spot,
    checkin,
    checkout,
    guest
  });

  return response.status(200).json(booking);
});



export default bookingsRouter;

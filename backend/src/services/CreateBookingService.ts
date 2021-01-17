
import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import { isuuid } from 'uuid';

import Booking from '../models/Booking';
import Spot from '../models/Spot';
import { verifyFormatDate, isDateBefore } from '../utils/DateFormating';

interface BookingDTO {
  guest: string;
  spot: string;
  checkin: string;
  checkout: string;
}

class CreateBookingService {
  public async execute({
    guest,
    spot,
    checkin,
    checkout
  }: BookingDTO): Promise<Booking> {
    const bookingRepository = getRepository(Booking);

    const checkinFormated = verifyFormatDate(checkin);
    if (isDateBefore(checkinFormated))
      throw new AppError('Check in date must be a future date')
    const checkoutFormated = verifyFormatDate(checkout);
    if (isDateBefore(checkinFormated))
      throw new AppError('Check out date must be a future date')
    if (isDateBefore(checkoutFormated, checkinFormated))
      throw new AppError('Check-out date must be after than check-in date')


    const spotRepository = getRepository(Spot);

    const spotExists = await spotRepository.findOne({
      where: { id: spot },
    });
    if (!spotExists) {
      throw new AppError('Spot id not valid');
    }
    const booking = bookingRepository.create({
      guest_id: guest,
      spot_id: spot,
      status: 'waiting',
      check_in: checkinFormated,
      check_out: checkoutFormated,
    })
    await bookingRepository.save(booking);

    return booking;
  };
}
export default CreateBookingService;

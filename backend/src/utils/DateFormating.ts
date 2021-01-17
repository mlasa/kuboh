import { isLeapYear } from 'date-fns';
import AppError from '../errors/AppError';




const quantityOfDaysInMonth = (date: string): number => {
  const [day, month, year] = date.split('/');
  const newDate = new Date(Number(year), Number(month) - 1, Number(day));
  const newMonth = newDate.getUTCMonth() + 1;
  let quantityOfDaysInMonth = 0;


  switch (newMonth) {
    case 1:
      quantityOfDaysInMonth = 31;
      break;
    case 2:
      if (isLeapYear(newDate)) {
        quantityOfDaysInMonth = 29;
      }
      else {
        quantityOfDaysInMonth = 28;
      }
      break;
    case 3:
      quantityOfDaysInMonth = 31;
      break;
    case 4:
      quantityOfDaysInMonth = 30;
      break;
    case 5:
      quantityOfDaysInMonth = 31;
      break;
    case 6:
      quantityOfDaysInMonth = 30;
      break;
    case 7:
      quantityOfDaysInMonth = 31;
      break;
    case 8:
      quantityOfDaysInMonth = 31;
      break;
    case 9:
      quantityOfDaysInMonth = 30;
      break;
    case 10:
      quantityOfDaysInMonth = 31;
      break;
    case 11:
      quantityOfDaysInMonth = 30;
      break;
    case 12:
      quantityOfDaysInMonth = 31;
  }
  return quantityOfDaysInMonth;
}

export const verifyFormatDate = (date: string): Date => {
  if (!/(\d{2})\/(\d{2})\/(\d{4})/.test(date))
    throw new AppError('Date format invalid');

  const [day, month, year] = date.split('/');

  if (Number(month) < 1 || Number(month) > 12)
    throw new AppError('Month need to be between 1 and 12');

  if (Number(day) < 1 || Number(day) > 31) {
    throw new AppError('Day need to be at least 1 and be  less then 32');
  }
  const daysOfMonth = quantityOfDaysInMonth(date);

  if (Number(day) > daysOfMonth) {
    throw new AppError(`This month contain only ${daysOfMonth} days`);
  }

  const dateConverted = new Date(Number(year), Number(month) - 1, Number(day));

  return dateConverted;
};


export const isDateBefore = (d1: Date, d2: Date = new Date()): boolean => {

  let diff = d1.getTime() - d2.getTime();
  diff = diff / (1000 * 60 * 60 * 24);


  if (diff < 0) {
    return true;
  }
  else {
    return false;
  }
}

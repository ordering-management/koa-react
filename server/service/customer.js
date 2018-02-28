import db from '../db/models';
import loggerError from '../utils/logUtils';

export const getCustomer = async function () {
  try {
    var customers = await db.customer.findAll();
  } catch (error) {
    loggerError.error(error);
  }
  return customers;
}

export const addCustomer = async function (customer) {
  try {
    var result = await db.customer.create(customer);
    console.log(result);
    return result;
  } catch (error) {
    loggerError.error(error);
  }
}

export const getCustomerById = async function(id) {
  try {
    var result = await db.customer.findById(id);
    return result;
  } catch (error) {
    loggerError.error(error);
  }
}

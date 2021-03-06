import db from '../db/models';
import loggerError from '../utils/logUtils';

export const getOpportunity = async function () {
  try {
    var opportunitys = await db.opportunity.findAll();
    return opportunitys;
  } catch (error) {
    loggerError.error(error);
  }
}

export const addOpportunity = async function (opportunity) {
  try {
    var result = await db.opportunity.create(opportunity);
    return result;
  } catch (error) {
    loggerError.error(error);
  }
}

export const getOpportunityById = async function(id) {
  try {
    var result = await db.opportunity.findById(id);
    return result;
  } catch (error) {
    loggerError.error(error);
  }
}

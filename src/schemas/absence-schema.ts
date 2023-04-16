import Joi from 'joi';

export const absenceSchema = Joi.object({
  amount: Joi.number().required(),
  subjectId: Joi.number().required(),
});
import Joi from 'joi';

export const subjectSchema = Joi.object({
  name: Joi.string().required(),
  userId: Joi.number().required(),
  average: Joi.number().min(0).max(10).required()
});
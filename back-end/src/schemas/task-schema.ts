import Joi from 'joi';

export const taskSchema = Joi.object({
  name: Joi.string().required(),
  weekdayId: Joi.number().required(),
});

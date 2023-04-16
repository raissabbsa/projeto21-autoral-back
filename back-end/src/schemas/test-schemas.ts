import Joi from 'joi';

export const testSchema = Joi.object({
  name: Joi.string().required(),
  date: Joi.string().required(),
  subjectId: Joi.number().required()
});

export const gradeSchema = Joi.object({
  grade: Joi.number().min(0).max(10).required(),
});
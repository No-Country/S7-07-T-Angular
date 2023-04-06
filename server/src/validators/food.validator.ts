import { body, param } from 'express-validator';
import { validationGeneral as errorHandler } from './validationGeneral';

const createFoodValidator = [
  body('title').notEmpty().isString().withMessage('Title is required')
  .isLength({ min: 3, max: 80 }).withMessage('Title must be between 3 and 80 characters'),
  body('description').notEmpty().isString().withMessage('Description is required')
  .isLength({ min: 3, max: 255 }).withMessage('Description must be between 3 and 255 characters'),
  body('userId').notEmpty().isString().withMessage('userId is required'),
  body('calories').isInt(),
  body('mark').isString().optional(),
  body('macronutrients').notEmpty().isObject(),
  errorHandler,
];

const updateFoodValidator = [
  param('id').isString().notEmpty(),
  ...createFoodValidator,
  errorHandler,
];

const getFoodByIdValidator = [
  param('id').isString(),
  errorHandler,
];

const deleteFoodValidator = [
  param('id').isString(),
  errorHandler,
];

export default {
  createFoodValidator,
  updateFoodValidator,
  getFoodByIdValidator,
  deleteFoodValidator,
}
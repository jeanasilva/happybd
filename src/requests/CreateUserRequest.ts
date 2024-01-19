import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const createUserValidationRules = () => {
  return [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email must be valid'),
    body('birthday').notEmpty().withMessage('Birthday is required'),
  ];
}

export const validateCreateUser = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

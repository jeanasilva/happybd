import express from 'express';
import multer from 'multer';
import { UserController } from '../controllers/UserController';
import { createUserValidationRules, validateCreateUser } from '../requests/CreateUserRequest';

const upload = multer();
const router = express.Router();
const userController = new UserController();

router.post('/users', upload.none(), (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ error: err.message });
  }
  next(err);
}, createUserValidationRules(), validateCreateUser, userController.createUser);
router.get('/users', userController.getAllUsers);

export default router;

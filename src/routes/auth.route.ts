import { Router } from "express";
import { login, register } from "../controllers/auth.controller";
import * as validation from "../validation/auth.validation";
import { validationMiddleware } from "../middlewares/validation.middleware";
const route: Router = Router();

route.post('/login',validationMiddleware(validation.login),login);
route.post('/register',validationMiddleware(validation.register),register)
export default route;
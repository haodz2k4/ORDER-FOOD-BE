import { Router } from "express";
import { login, register } from "../controllers/auth.controller";

const route: Router = Router();

route.post('/login',login);
route.post('/register',register)
export default route;
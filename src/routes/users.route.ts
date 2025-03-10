import { Router } from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers/users.controller";
import { validateMiddleware } from "../middlewares/validation.middleware";
import * as validate from "../validation/users.validation";
const router = Router()
router
    .route("/")
    .get(validateMiddleware(validate.getUsers),getUsers)
    .post(validateMiddleware(validate.createUser),createUser)

router
    .route("/:id")
    .get(validateMiddleware(validate.getUserById),getUserById)
    .patch(validateMiddleware(validate.updateUser),updateUser)
    .delete(validateMiddleware(validate.deleteUser),deleteUser)


export default router



import { Router } from "express";
import * as validation from "../validation/users.validation";
import * as controller from "../controllers/users.controller";
import { validationMiddleware } from "../middlewares/validation.middleware";
const router = Router()
router
    .route("/")
    .get(validationMiddleware(validation.getUsers),controller.getUsers)
    .post(validationMiddleware(validation.createUser),controller.createUser)

router
    .route("/:id")
    .get(validationMiddleware(validation.getUserById),controller.getUserById)
    .patch(validationMiddleware(validation.updateUser),controller.updateUser)
    .delete(validationMiddleware(validation.deleteUser),controller.removeUser)


export default router


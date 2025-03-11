import { Router } from "express";
import { createUser, removeUser, getUserById, getUsers, updateUser } from "../controllers/users.controller";
const router = Router()
router
    .route("/")
    .get(getUsers)
    .post(createUser)

router
    .route("/:id")
    .get(getUserById)
    .patch(updateUser)
    .delete(removeUser)


export default router


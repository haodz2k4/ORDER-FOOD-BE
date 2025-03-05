import { Express } from "express"
import userRoute from "./users.route";

const VERSION = '/api/v1'
const AppRoute = (app: Express) => {
    app.use(`${VERSION}/users`,userRoute)
}

export default AppRoute
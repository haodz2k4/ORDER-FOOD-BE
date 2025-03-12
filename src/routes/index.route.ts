import { Express } from "express"
import userRoute from "./users.route";
import authRoute from "./auth.route";
const VERSION = '/api/v1'
const AppRoute = (app: Express) => {

    app.use(`${VERSION}/users`,userRoute);
    app.use(`${VERSION}/auth`,authRoute)
}

export default AppRoute
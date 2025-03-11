import express, {Express} from "express";
import dotenv from "dotenv";
dotenv.config()
import config from "./config/config";
import { getConnection } from "./config/database";
import AppRoute from "./routes/index.route";
import { loggerMiddleware } from "./middlewares/logger.middleware";
import { errorMiddleware } from "./middlewares/error.middleware";
import bodyParser from "body-parser";

const app: Express = express();



const App = () => {
    //Connect database
    getConnection()
    //Body parser
    app.use(bodyParser.json());
    //Logging
    app.use(loggerMiddleware)

    //Route 
    AppRoute(app)

    //Error middleware 
    app.use(errorMiddleware)
    const PORT = config.PORT;
    app.listen(PORT,() => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
}

export default App
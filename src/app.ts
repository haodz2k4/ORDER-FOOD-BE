import express, {Express} from "express";
import dotenv from "dotenv";
dotenv.config()
import config from "./config/config";
import { getConnection } from "./config/database";

const app: Express = express();



const App = () => {

    getConnection()

    const PORT = config.PORT;
    app.listen(PORT,() => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
}

export default App
import express, {Express} from "express";
import {config as configDotenv} from "dotenv";
import {config} from "./config/config";


const app: Express = express();



const App = () => {
    configDotenv()

    const PORT = config.PORT;
    app.listen(PORT,() => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
}

export default App
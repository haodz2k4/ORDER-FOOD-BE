import {connect} from "mongoose"
import config from "./config"


export const getConnection = async () => {
    try {
        await connect(config.MONGO_URL)
        console.log("Connected to mongodb")
    } catch (error) {
        console.error(error)
        console.log("Failed connect to mongodb")
    }

}
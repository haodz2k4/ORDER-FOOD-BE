import {hash} from "bcrypt"

export const hashPassword =async (text: string, saltRounds = 10) :Promise<string> => {
    return await hash(text,saltRounds)
}
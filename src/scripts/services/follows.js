import { baseUrl } from "../variables";
import { getUser } from "./user";

async function geFollowers() {
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
}

export { getUser }
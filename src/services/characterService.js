import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API = process.env.API;

export async function fetchFirstTwoCharacters() {
    const response = await axios.get(API);
    const characters = response.data.results.slice(0, 2);
    return characters;
}
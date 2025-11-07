import axios from "axios";

const API = process.env.API;

export async function fetchFirstTwoCharacters() {
    try {
        const response = await axios.get(API);
        const characters = response.data.results.slice(0, 2);
        return characters;
    } catch (error) {
        console.error("Error fetching characters:", error);
        throw error;
    }
}
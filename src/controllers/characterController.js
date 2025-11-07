import { fetchFirstTwoCharacters } from "../services/characterService.js";

export async function getFirstTwoCharacters(req, res) {
    try {
        const characters = await fetchFirstTwoCharacters();
        res.status(200).json(characters);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch characters" });
    }
}
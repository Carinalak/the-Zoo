import { Params } from "react-router-dom";
import { feedAnimal } from "../services/feedAnimalService";

interface IFeedAnimalLoader {
    params: Params<string>;
}

export const feedAnimalLoader = async ({ params }: IFeedAnimalLoader): Promise<void> => {
    const animalId = params.id;

    if (!animalId) {
        throw new Error("Animal ID is missing or undefined.");
    }

    try {
        await feedAnimal(animalId);
    } catch (error) {
        console.error("Failed to feed animal:", error);
    }
};


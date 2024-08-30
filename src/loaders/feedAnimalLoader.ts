import { Params } from "react-router-dom";

// Loader som hanterar matningen av ett djur
interface IFeedAnimalLoader {
    params: Params<string>;
}

export const feedAnimalLoader = async ({ params }: IFeedAnimalLoader): Promise<void> => {
    const animalId = params.id;

    const currentDateTime = new Date().toISOString();

    const storedAnimalData = localStorage.getItem(`animalData-${animalId}`);
    if (storedAnimalData) {
        const animal = JSON.parse(storedAnimalData);
        animal.lastFed = currentDateTime;

        localStorage.setItem(`animalData-${animalId}`, JSON.stringify(animal));
        localStorage.setItem(`lastFed-${animalId}`, currentDateTime);
    }
};

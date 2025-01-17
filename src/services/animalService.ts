import { IAnimals } from "../models/IAnimals";
import { IAnimalsExt } from "../models/IAnimalsExt";


// ----------------------------- HÄMTA ALLA DJUR ------------------------------------- //

export const getAnimals = async (): Promise<IAnimals[]> => {
    const storedAnimals = localStorage.getItem("animalsData");

if (storedAnimals) {
    return JSON.parse(storedAnimals);
}

const response = await fetch("https://animals.azurewebsites.net/api/animals");

//await new Promise((resolve) => setTimeout(resolve, 2700));

if (!response.ok) {
    throw new Error("Failed to fetch animals");
}

const result: IAnimals[] = await response.json();


localStorage.setItem("animalsData", JSON.stringify(result));

return result;
};

// ----------------------------- HÄMTA ETT DJUR ------------------------------------- //

export const getAnimalById = async (animalId: string): Promise<IAnimalsExt> => {
    const storedAnimal = localStorage.getItem(`animalData-${animalId}`);

    if (storedAnimal) {
        return JSON.parse(storedAnimal);
    }

    const response = await fetch("https://animals.azurewebsites.net/api/animals/" + animalId);

    if (!response.ok) {
        throw new Error("Failed to fetch animal");
    }

    const result: IAnimalsExt = await response.json();

    localStorage.setItem(`animalData-${animalId}`, JSON.stringify(result));

    return result;

};


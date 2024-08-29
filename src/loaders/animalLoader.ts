import { IAnimals } from "../models/IAnimals";

export const animalsLoader = async (): Promise<IAnimals[]> => {
    const response = await fetch("https://animals.azurewebsites.net/api/animals");
    
    if (!response.ok) {
        throw new Error("Failed to fetch animals");
    }
    
    const result: IAnimals[] = await response.json();
    return result;
};
animalsLoader();

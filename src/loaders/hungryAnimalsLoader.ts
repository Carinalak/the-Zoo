import { IAnimals } from "../models/IAnimals";

export const hungryAnimalsLoader = async (): Promise<IAnimals[]> => {
    const response = await fetch("https://animals.azurewebsites.net/api/animals");
    
    if (!response.ok) {
        throw new Error("Failed to fetch animals");
    }
    
    const animals: IAnimals[] = await response.json();
    
    const hungryAnimals = animals.filter(animal => {
        const lastFed = localStorage.getItem(`lastFed-${animal.id}`);
        
        if (!lastFed) return true; 

        const lastFedTime = new Date(lastFed).getTime();
        const currentTime = new Date().getTime();
        const hoursSinceFed = (currentTime - lastFedTime) / (1000 * 60 * 60);

        return hoursSinceFed >= 4;
    });

    return hungryAnimals;
    
};

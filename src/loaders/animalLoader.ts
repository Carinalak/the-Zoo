import { Params } from "react-router-dom";
import { IAnimals } from "../models/IAnimals";
import { IAnimalsExt } from "../models/IAnimalsExt";

export const animalsLoader = async (): Promise<IAnimals[]> => {
    const response = await fetch("https://animals.azurewebsites.net/api/animals");
    //await new Promise((resolve) => setTimeout(resolve, 2700));
    
    if (!response.ok) {
        throw new Error("Failed to fetch animals");
    }
    
    const result: IAnimals[] = await response.json();
    return result;
};


interface IAnimalLoader {
    params: Params<string>;
}

export const animalLoader = async ({params}: IAnimalLoader) => {

    const response = await fetch("https://animals.azurewebsites.net/api/animals/" + params.id);

    if (!response.ok) {
        throw new Error("Failed to fetch animal");
    }

    const result: IAnimalsExt = await response.json();

    return result;
};




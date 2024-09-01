import { Params } from "react-router-dom";
import { IAnimals } from "../models/IAnimals";
import { IAnimalsExt } from "../models/IAnimalsExt";
import { getAnimalById, getAnimals } from "../services/animalService";


// --------------------------------- LADDA ALLA DJUR ------------------------------- //

export const animalsLoader = async (): Promise<IAnimals[]> => {
    return getAnimals();
};

// ----------------------------- LADDA ETT DJUR ------------------------------------ //

interface IAnimalLoader {
    params: Params<string>;
}

export const animalLoader = async ({ params }: IAnimalLoader): Promise<IAnimalsExt> => {
    const animalId = params.id!;
    return getAnimalById(animalId);
};

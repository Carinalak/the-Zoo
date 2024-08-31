import { Params } from "react-router-dom";

interface IFeedAnimalLoader {
    params: Params<string>;
}

export const feedAnimalLoader = async ({ params }: IFeedAnimalLoader): Promise<void> => {
    const animalId = params.id;

    const currentDateTime = new Date().toISOString();
    const threeHoursInMillis = 3 * 60 * 60 * 1000; // 3 timmar i millisekunder


    const storedAnimalData = localStorage.getItem(`animalData-${animalId}`);
    const lastFedDate = localStorage.getItem(`lastFed-${animalId}`);
    const lastFedTime = lastFedDate ? new Date(lastFedDate).getTime() : 0;
    const currentTime = new Date().getTime();

    
    // Om det är mindre än 3 timmar sedan sist matning, avbryt
    if (currentTime - lastFedTime < threeHoursInMillis) {
        return; // Du kan returnera ett meddelande här om du vill att användaren ska veta att det är för tidigt att mata igen
    }

    if (storedAnimalData) {
        const animal = JSON.parse(storedAnimalData);
        animal.lastFed = currentDateTime;

        localStorage.setItem(`animalData-${animalId}`, JSON.stringify(animal));
        localStorage.setItem(`lastFed-${animalId}`, currentDateTime);
    }
};



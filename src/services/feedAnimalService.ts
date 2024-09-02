import { Fetcher } from "react-router-dom";

export const calculateFeedingStatus = (lastFed: string | null) => {
    const lastFedTime = lastFed ? new Date(lastFed).getTime() : 0;
    const currentTime = new Date().getTime();
    const threeHoursInMilliseconds = 3 * 60 * 60 * 1000;

    const isButtonDisabled = currentTime - lastFedTime < threeHoursInMilliseconds;
    const timeUntilNextFeed = threeHoursInMilliseconds - (currentTime - lastFedTime);
    const remainingHours = Math.floor(timeUntilNextFeed / (1000 * 60 * 60));
    const remainingMinutes = Math.floor((timeUntilNextFeed % (1000 * 60 * 60)) / (1000 * 60));

    return {
        isButtonDisabled,
        remainingHours,
        remainingMinutes
    };
};

export const handleFeedAnimal = async (animalId: string, fetch: Fetcher) => {
    try {
        const { isButtonDisabled, remainingHours, remainingMinutes } = calculateFeedingStatus(localStorage.getItem(`lastFed-${animalId}`));
        if (isButtonDisabled) {
            window.alert(`Djuret är inte hungrigt än! Du kan mata det om ${remainingHours} timmar och ${remainingMinutes} minuter.`);
            return;
        }

        await fetch.load(`/feed-animal/${animalId}`);
        window.alert(`Mmm vad gott! Mata djuret igen om tre timmar.`);
        window.location.reload();
    } catch (error) {
        console.error("Det gick inte att mata djuret:", error);
    }
};


export const feedAnimal = (animalId: string) => {
    const currentDateTime = new Date().toISOString();
    const threeHoursInMillis = 3 * 60 * 60 * 1000;

    const storedAnimalData = localStorage.getItem(`animalData-${animalId}`);
    const lastFedDate = localStorage.getItem(`lastFed-${animalId}`);
    const lastFedTime = lastFedDate ? new Date(lastFedDate).getTime() : 0;
    const currentTime = new Date().getTime();

    if (currentTime - lastFedTime < threeHoursInMillis) {
        throw new Error('Animal cannot be fed yet');
    }

    if (storedAnimalData) {
        const animal = JSON.parse(storedAnimalData);
        animal.lastFed = currentDateTime;

        localStorage.setItem(`animalData-${animalId}`, JSON.stringify(animal));
        localStorage.setItem(`lastFed-${animalId}`, currentDateTime);
    }
};

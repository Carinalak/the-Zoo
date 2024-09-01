export const getHungryWarning = (animalName: string, lastFed: string | null) => {
    if (!lastFed) {
        return `${animalName} är jättehungrig!`;
    }
    
    const lastFedTime = new Date(lastFed).getTime();
    const currentTime = new Date().getTime();
    const hoursSinceFed = (currentTime - lastFedTime) / (1000 * 60 * 60);

    if (hoursSinceFed < 3) {
        return `${animalName} är mätt!`;
    }

      if (hoursSinceFed >= 3 && hoursSinceFed < 4) {
        return `${animalName} är hungrig!`;
    }
    
    if (hoursSinceFed >= 4) {
        return `${animalName} är jättehungrig!`;
    }
    return null;
};
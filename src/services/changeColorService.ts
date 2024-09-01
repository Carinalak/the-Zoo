
export const getBackgroundColorClass = (lastFed: string | null) => {
    if (!lastFed) return "";

    const lastFedTime = new Date(lastFed).getTime();
    const currentTime = new Date().getTime();
    const hoursSinceFed = (currentTime - lastFedTime) / (1000 * 60 * 60);

    if (hoursSinceFed < 3) {
        return "fed-recently"; 
    } else if (hoursSinceFed >= 3 && hoursSinceFed < 4) {
        return "fed-three-hours";
    } else {
        return "fed-four-hours";
    }
};
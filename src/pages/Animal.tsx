import { useFetcher, useLoaderData } from "react-router-dom";
import { IAnimalsExt } from "../models/IAnimalsExt";
import { handleImageError } from "../assets/components/Placeholder";

const formatDateToLocal = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleString(undefined, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    }).replace(" ", ", ");
};

export const Animal = () => {
    const animal = useLoaderData() as IAnimalsExt;
    const fetcher = useFetcher();


    const lastFedTime = animal.lastFed ? new Date(animal.lastFed).getTime() : 0;
    const currentTime = new Date().getTime();
    const threeHoursInMilliseconds = 3 * 60 * 60 * 1000;
    const isButtonDisabled = currentTime - lastFedTime < threeHoursInMilliseconds;

    const timeUntilNextFeed = threeHoursInMilliseconds - (currentTime - lastFedTime);
    const remainingHours = Math.floor(timeUntilNextFeed / (1000 * 60 * 60));
    const remainingMinutes = Math.floor((timeUntilNextFeed % (1000 * 60 * 60)) / (1000 * 60));


    const handleFeedAnimal = () => {
        if (isButtonDisabled) {
            window.alert(`Djuret är inte hungrigt än! Du kan mata ${animal.name} om ${remainingHours} timmar och ${remainingMinutes} minuter.`);
            return;
        }


        fetcher.load(`/feed-animal/${animal.id}`);
        window.alert(`Mmm vad gott! Mata ${animal.name} igen om tre timmar.`);
        window.location.reload();
    };
/*
    if (!animal) {
        return <p>Inga djur hittades...</p>;
    }
*/
    return (
        <>
            <section className="main-container" key={animal.id}>
                <article className="animal-container" key={animal.id}>
                    <h1>{animal.name}</h1>
                    <h2>{animal.latinName}</h2>
                    <img
                        src={animal.imageUrl}
                        alt={animal.name}
                        className="animal-image-bigger"
                        onError={handleImageError}
                    />
                    <p className="animal-info">{animal.longDescription}</p>
                </article>
            </section>

            <section className="main-container">
                {animal.lastFed && (
                    <div>
                        <p>Senast matad: {formatDateToLocal(animal.lastFed)}</p>
                    </div>
                )}
                <button onClick={handleFeedAnimal} disabled={isButtonDisabled && false}>
                    Mata
                </button>
            </section>
        </>
    );
};

import { useFetcher, useLoaderData } from "react-router-dom";
import { IAnimalsExt } from "../models/IAnimalsExt";
import { handleImageError } from "../assets/components/Placeholder";
import { formatDateToLocal } from "../services/localTimeConverterService";
import { handleFeedAnimal } from "../services/feedAnimalService";

export const Animal = () => {
    const animal = useLoaderData() as IAnimalsExt;
    const fetcher = useFetcher();

   // const { isButtonDisabled, remainingHours, remainingMinutes } = calculateFeedingStatus(animal.lastFed);


    const handleFeedAnimalClick = () => {
        handleFeedAnimal(animal.id, fetcher);
    };
    /*
    const handleFeedAnimal = () => {
        if (isButtonDisabled) {
            window.alert(`Djuret är inte hungrigt än! Du kan mata ${animal.name} om ${remainingHours} timmar och ${remainingMinutes} minuter.`);
            return;
        }

        fetcher.load(`/feed-animal/${animal.id}`);
        window.alert(`Mmm vad gott! Mata ${animal.name} igen om tre timmar.`);
        window.location.reload();
    };

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
                <button onClick={handleFeedAnimalClick} disabled={false}>
                    Mata
                </button>
            </section>
        </>
    );
};

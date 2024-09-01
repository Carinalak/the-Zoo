import { useFetcher, useLoaderData } from "react-router-dom";
import { IAnimalsExt } from "../models/IAnimalsExt";
import { handleImageError } from "../assets/components/Placeholder";
import { formatDateToLocal } from "../services/localTimeConverterService";
import { handleFeedAnimal } from "../services/feedAnimalService";
import { getBackgroundColorClass } from "../services/changeColorService";

export const Animal = () => {
    const animal = useLoaderData() as IAnimalsExt;
    const fetcher = useFetcher();

    //const { isButtonDisabled, remainingHours, remainingMinutes } = calculateFeedingStatus(animal.lastFed);


    const handleFeedAnimalClick = () => {
        handleFeedAnimal(animal.id, fetcher);
    };

    return (
        <>
            <section key={animal.id}>
                <article className={`animal-container ${getBackgroundColorClass(animal.lastFed)}`} key={animal.id}>
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

            <section className="feed-time-container">
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

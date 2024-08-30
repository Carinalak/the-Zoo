import { useFetcher, useLoaderData} from "react-router-dom";
import { IAnimalsExt } from "../models/IAnimalsExt";
import { handleImageError } from "../assets/components/Placeholder";


export const Animal = () => {
    const animal = useLoaderData() as IAnimalsExt;
    const fetcher = useFetcher();

    
    const handleFeedAnimal = () => {
        fetcher.load(`/feed-animal/${animal.id}`);
    };

    if (!animal) {
        return <p>Inga djur hittades...</p>;
    }
    
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
                        <p>Senast matad: {animal.lastFed}</p>
                    </div>
                )}
        <button onClick={handleFeedAnimal}>Mata</button>
    </section>
     </>
)};
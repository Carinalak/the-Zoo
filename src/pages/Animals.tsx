import { Link, useLoaderData } from "react-router-dom";
import { IAnimals } from "../models/IAnimals";
import { handleImageError } from "../assets/components/Placeholder";


const getBackgroundColorClass = (lastFed: string | null) => {
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

const getHungryWarning = (animalName: string, lastFed: string | null) => {
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

export const Animals = () => {
    const animals = useLoaderData() as IAnimals[];

    const animalsWithLastFed = animals.map(animal => {
        const lastFed = localStorage.getItem(`lastFed-${animal.id}`);
        return { ...animal, lastFed };
    });

    return (
        <> 
            <section className="main-container">
                <h1>Djuren</h1>
                <article className="animals-display">
                    {animalsWithLastFed.map((animal) => (
                        <div className={`animals-container ${getBackgroundColorClass(animal.lastFed)}`} key={animal.id}>
                            <h2>{animal.name}</h2>

                            <Link to={`/animal/${animal.id}`}>
                                <img
                                    src={animal.imageUrl} 
                                    alt={animal.name}
                                    className="animal-image"
                                    onError={handleImageError}
                                />
                            </Link>
                          
                            {getHungryWarning(animal.name, animal.lastFed) && (
                                <span className="hungry-warning">
                                    {getHungryWarning(animal.name, animal.lastFed)}
                                </span>
                            )}
                        </div>
                    ))}
                </article>
            </section>
        </>
    );
};

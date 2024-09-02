import { Link, useLoaderData } from "react-router-dom";
import { IAnimals } from "../models/IAnimals";
import { handleImageError } from "../assets/components/Placeholder";
import { getHungryWarning } from "../helpers/animalHelpers";
import { getBackgroundColorClass } from "../services/changeColorService";


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
                            <span className="hungry-warning">
                            <Link to={`/animal/${animal.id}`}>{getHungryWarning(animal.name, animal.lastFed)}</Link>
                            </span>
                        </div>
                    ))}
                </article>
            </section>
        </>
    );
};

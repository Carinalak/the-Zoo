import { Link, useLoaderData } from "react-router-dom";
import { IAnimals } from "../models/IAnimals";


export const Animals = () => {
    const animals = useLoaderData() as IAnimals[];

    return (
        <>
            
            <section className="main-container">
                <h1>Djuren</h1>
                <article className="animals-display">
                    {animals.map((animal) => (
                        <div className="animal-container" key={animal.id}>
                            <h2>{animal.name}</h2>

                            <Link to={`/animal/${animal.id}`}>
                            <img
                                src={animal.imageUrl} 
                                alt={animal.name}
                                className="animal-image"
                                />
                            </Link>
                        </div>
                    ))}
                </article>
            </section>
        </>
    );
};
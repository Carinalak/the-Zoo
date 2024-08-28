import { useLoaderData } from "react-router-dom";
import { IAnimals } from "../models/IAnimals";

export const Animals = () => {
    const animals = useLoaderData() as IAnimals[];

    return (
        <>
            <h1>Djuren</h1>
            <section>
                {animals.map((animal) => (
                    <div key={animal.id}>
                        <h2>{animal.Name}</h2>
                        <img src={animal.ImageUrl} alt={animal.Name} />
                    </div>
                ))}
            </section>
        </>
    );
};
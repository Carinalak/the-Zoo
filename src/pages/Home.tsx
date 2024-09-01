import { useLoaderData } from "react-router-dom";
import { IAnimals } from "../models/IAnimals";

export const Home = () => {
    const hungryAnimals = useLoaderData() as IAnimals[];

    return (
        <>
            <section className="main-container">
                <h1>Home</h1>
                <article className="home-display">
                    <div>
                        <p>Välkommen till vårt Zoo! Här inne kan du mata djuren.</p>
                        <div>
                            <h3>Dessa djur är hungriga just nu:</h3>
                            {hungryAnimals.length > 0 ? (
                                <ul>
                                    {hungryAnimals.map(animal => (
                                        <li key={animal.id}>
                                            {animal.name}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>Inga djur är hungriga just nu!</p>
                            )}
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
};

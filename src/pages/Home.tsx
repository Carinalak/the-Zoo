import { Link, useLoaderData } from "react-router-dom";
import { IAnimals } from "../models/IAnimals";

export const Home = () => {
    const hungryAnimals = useLoaderData() as IAnimals[];

    return (
        <>
            <section className="main-container">
                <h1>Hem</h1>
                <article className="home-display">
                    <div>
                        <p>Välkommen till vårt Zoo! Här inne kan du mata djuren. Antingen kan du gå in på 
                            länken "djuren" i menyn högst upp för att besöka alla djur, och se vilka som är mätta och 
                            vilka som behöver mat, eller så kan du klicka på ett av djuren som är listade här nere, som alla 
                            är hungriga.
                        </p>
                        <div>
                            <h3>Dessa djur är hungriga just nu:</h3>
                            
                            {hungryAnimals.length > 0 ? (
                                <div className="hungry-name-box">
                                <ul className="hungry-names-list">
                                    {hungryAnimals.map(animal => (
                                        <li className="hungry-name" key={animal.id}>
                                            <Link to={`/animal/${animal.id}`}>
                                                {animal.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
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

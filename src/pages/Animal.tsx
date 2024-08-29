import { useLoaderData} from "react-router-dom";
import { IAnimalsExt } from "../models/IAnimalsExt";


export const Animal = () => {
    const animal = useLoaderData() as IAnimalsExt;

    if (!animal) {
        return <p>Inga djur hittades...</p>;
    }
    
    return (
        <>
    <section className="animal" key={animal.id}>
    
            <div className="animal-container" key={animal.id}>
                <h2>{animal.name}</h2>
                <h3>{animal.latinName}</h3>
                <img
                    src={animal.imageUrl} 
                    alt={animal.name}
                    className="animal-image"
                    />
                    <p>{animal.longDescription}</p>
            </div>

                
     </section>
     </>
)};
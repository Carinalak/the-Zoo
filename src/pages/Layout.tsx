import { NavLink, Outlet } from "react-router-dom"

export const Layout = () => {
    return <>
        <header>
            <section className="navigation-container">
            <h1>The Zoo</h1>
                <nav>
                
                <ul>
                    <li>
                        <NavLink to={"/"}>Hem</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/animals"}>Djuren</NavLink>
                    </li>
                </ul>
            </nav>
        </section>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
        <footer></footer>
    </>
}
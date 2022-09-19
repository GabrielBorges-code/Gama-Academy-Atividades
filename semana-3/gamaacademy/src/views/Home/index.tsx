import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "./style";

const Home: React.FC = () => {

    const [isLoad, setIsLoad] = useState(true);

    return (
        <Container>
            {isLoad ? (
                <div>
                    <p>carregando...</p>
                </div>
            ) : (
                <div>
                    <h1>Home</h1>
                    <Link to="/contact">Acessar página de contatos</Link>
                </div>
            )}
            <div className="button-container">
                <button onClick={ () => setIsLoad(!isLoad) }>Clique aqui</button>

            </div>
        </Container>

    );
}

export default Home;
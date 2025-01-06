import React, { useState } from 'react';
import './Tombola.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Tombola = () => {
    const [numeri, setNumeri] = useState([...Array(90).keys()].map(n => n + 1));
    const [estratti, setEstratti] = useState([]);
    const [ultimoEstratto, setUltimoEstratto] = useState(null);

    const estraiNumero = () => {
        if (numeri.length > 0) {
            const indice = Math.floor(Math.random() * numeri.length);
            const numero = numeri[indice];
            setNumeri(numeri.filter(n => n !== numero));
            setEstratti([...estratti, numero]);
            setUltimoEstratto(numero);
        }
    };

    const terminaGioco = () => {
        setNumeri([]);
        setEstratti([]);
        setUltimoEstratto(null);
    };

    return (
        <body>



            <Container className="mt-4">
                <h1 className="titolo">Tombola</h1>
                <div className="tabellone">
                    {Array(9).fill(0).map((_, riga) =>
                        <Row key={riga} className="mb-2">
                            {Array(10).fill(0).map((_, colonna) => {
                                const numero = riga * 10 + colonna + 1;
                                return (
                                    <Col key={colonna} className={`numero ${estratti.includes(numero) ? 'estratto' : ''}`}>
                                        {numero}
                                    </Col>
                                );
                            })}
                        </Row>
                    )}
                </div>
                <div className="numero-estratto">
                    {ultimoEstratto && <div>{ultimoEstratto}</div>}
                </div>
                <div className="bottoni">
                    <Button onClick={estraiNumero} className="me-2">Estrai Numero</Button>
                    <Button onClick={terminaGioco} variant="danger">Termina Gioco</Button>
                </div>
            </Container>

        </body>
    );
};

export default Tombola;

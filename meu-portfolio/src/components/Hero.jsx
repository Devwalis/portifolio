
import { useState } from 'react';

 function Hero(){
    const [mostrarProjetos, setMostrarProjetos] = useState(false);


    return(
        <section className="hero"> 
        <h1>Olá! Meu nome é</h1>
        <h2>Walisson Oliveira</h2>

        <p>
         Desenvolvedor de software certificado técnico em desenvolvimento de sistemas. 
         Desenvolvo web sites interativos e automatizados para diferentes áreas de negócio.
        </p>
        <button onClick={() => alert('Redirecionar para Sobre')}>Sobre mim</button>
        <button onClick={() => setMostrarProjetos(!mostrarProjetos)}>Sobre mim</button>

        {mostrarProjetos && <p></p>}

        </section>
    );
}
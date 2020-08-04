import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/62337593?s=460&u=5d39faf678bc8f8ebf40e9d9b53fd95939133538&v=4" alt="Renan"/>
            <div>
                <strong>Renan Albuquerque</strong>
                <span>Programação</span>
            </div>
        </header>

        <p>
            Entusiasta das melhores de tecnologias
            <br/>
            Apaixonado por programação web e expert em node, react e react nattive.
        </p>

        <footer>
            <p>
                Preco por hora <strong> R$ 80 reais</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;
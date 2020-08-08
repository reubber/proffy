import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem () {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars2.githubusercontent.com/u/16036604?s=460&u=0719ee6fa805deafb905ed3af1ab717b9e0d3bf9&v=4" alt="reubber"/>
      <div>
        <strong>Reubber Sousa</strong>
        <span>TI TECNICAN</span>
      </div>
    </header>

    <p>
        Entusiasta das melhores tecnologias de informatica avançada.<br /><br />
        Apaixonado por explodir fontes de laboratorios e mudar wallpapers dos computadores de lá.
    </p>

    <footer>
      <p>
        Preço/hora:
        <strong>R$ 500,00 conto </strong>
      </p>
      <button type='button'>
        <img src={whatsappIcon} alt="whatsupp"/>
        entrar em contato
      </button>
    </footer>
  </article>
  )
}

export default TeacherItem
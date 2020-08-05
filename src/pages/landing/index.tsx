import React from 'react'

import landingImg from '../../assets/images/landing.svg'
import logoImg from '../../assets/images/logo.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

function Landing() {
    return <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={logoImg} alt="logomarca da proffy"/>
                <h2>Sua plataforma de estudos online</h2>
            </div>

            <img 
                src={landingImg}
                alt="Plataforma de estudos"
                className="hero-image"
            />

            <div className="buttons-container">
                <a href="##" className="study">
                    <img src={studyIcon} alt="imagem do icone estudo"/>
                    Estudar
                </a>

                <a href="##" className="give-classes">
                    <img src={giveClassesIcon} alt="imagem do icone classes"/>
                    Dar aulas
                </a>
            </div>

            <span className="total-connections">
                total de 200 conexoes já feitas <img src={purpleHeartIcon} alt="mini coração roxo"/>
            </span>
        </div>
    </div>

}

export default Landing
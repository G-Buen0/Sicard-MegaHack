import React from 'react';
import './style.scss';
import logo from '../../assets/img/brand/logo.svg';


function Card(props) {
  const { 
    state, 
    title, 
    titlePlus, 
    color, 
    sectionTitle1, 
    sectionParagraph1, 
    sectionTitle2, 
    sectionParagraph2, 
    sectionTitle3, 
    sectionParagraph3, 
    files
  } = props

  return (
    <div className="CardTemplate">
      <header className="card__header">
        <img src={logo} className="card__header-logo" alt="logo" />
      </header>

      <section className="card__part1 row">
        <div className="col-6">
          <p className="productCondition">{ state }</p>
          <h1 className="productTitle">{ title } <span>{ titlePlus }</span></h1>
          <div className="productColors">
            <p className="productColors-label">Cor</p>
            <div className="colorBarDescription row">
              <div className="color col-6"><span></span></div>
              <div className="colorDescription col-6"><p className="container">{ color }</p></div>
            </div>
          </div>
        </div>
        { !! files.length > 0 && (
          <div className="col-6">
            <img src={files[0].preview} className="imgProduct" alt="Imagem 1" />
          </div>
          )
        }
      </section>
      
      <section className="card__part2 row">
        <div className="container card__part2-text">
          <h2 className="sectionTitle">{ sectionTitle1 }</h2>
          <p className="sectionParagraph">{ sectionParagraph1 }</p>
        </div>
        
        {  files.length > 1 && (
          <div className="container row card__pat2-img">
            <img src={files[1].preview} className="imgProduct" alt="Imagem 2" />
          </div>
        )}

      </section>

      <section className="card__part3 row">
        <div className="container col-6 card__part3-text">
          <h2 className="sectionTitle">{ sectionTitle2 }</h2>
          <p className="sectionParagraph">{ sectionParagraph2 }</p>
        </div>
        
        {  files.length > 2 && (
          <div className="">
            <img src={files[2].preview} className="imgProduct" alt="Imagem 3" />
             
          </div>
        )}

      </section>

      <section className="card__part4 row">
        {  files.length > 3 && (
          <div className="">
            <img src={files[3].preview} className="imgProduct" alt="Imagem 4" />
            
          </div>
        )}

        <div className="container col card__part4-text">
          <h2 className="sectionTitle">{ sectionTitle3 }</h2>
          <p className="sectionParagraph">{ sectionParagraph3 }</p>
        </div>
       
      </section>

      <section className="toVirtualAssistant row">
        <div className="container">
          <button className="assistantButton btn btn-success">Tem alguma dúvida? Fale com a gente!</button>
        </div>
      </section>

      <footer className="card__footer">
        <div className="credits"><p>Imagens meramente ilustrativas. Consulte o site e saiba mais</p></div>
        <p>Todas as informações divulgadas são de responsabilidade do fabricante/fornecedor. Verifique com os fabricantes do produto e de seus componentes eventuais limitações à utilização de todos os recursos e funcionalidades. Imagens Meramente Ilustrativas.</p>
      </footer>
    </div>
  );
}

export default Card;
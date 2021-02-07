import React from 'react';
import '../../App.css';
import Button from '../Button';
import './style.css';
import oxchef from '../../assets/Oxchef_No_Margin.png'

const Landing = ({ handleShowStory }) => (
  <div className={'landing__container'}>
    <div className={'oxchef__container'}>
      <img
        alt='Illustrated standing ox posing with its arms crossed wearing a chef uniform and a fancy, colorful hat.'
        className={'oxchef__img'}
        src={oxchef}
      />
    </div>
    <div className={'header__container'}>
      <section className={'header__section'}>
        <h1 className={'title__container'}>
          <span className={'title__children'}>
            <span>Tikoy</span>
            <span aria-hidden='true'>Tikoy</span>
            <span aria-hidden='true'>Tikoy</span>
          </span>
        </h1>
        <h1 className={'title__container'}>
          <span className={'title__children'}>
            <span>Recipe</span>
            <span aria-hidden='true'>Recipe</span>
            <span aria-hidden='true'>Recipe</span>
          </span>
        </h1>
        <p>
          How to make Filipino-style Nian Gao
            </p>
      </section>
      <div className={'landing__btns'}>
        <Button handleClick={handleShowStory}>
          What is Tikoy?
        </Button>
        <Button>
          <a href='#recipe'>Get Started!</a>
        </Button>
      </div>
    </div>
  </div>
);

export default Landing;

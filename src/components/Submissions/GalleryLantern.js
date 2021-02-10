import React from 'react';
import Lantern from '../../assets/Lamp_1_Submission_.png';
import TikoyOreo from '../../assets/Step_8_Coating_Oreo.png';
import TikoyPeanut from '../../assets/Step_8_Coating_Peanut.png';
import TikoyChocolate from '../../assets/Step_8_Tikoy_Chocolate.png';
import TikoyPb from '../../assets/Step_8_Tikoy_PB.png';
import TikoyUbe from '../../assets/Step_8_Tikoy_Ube.png';
import { PEANUTS, OREOS, CHOCOLATE, UBE, PB } from '../Tutorial';

const GalleryLantern = ({ text, filling, coating }) => {
  const fillingSrc = {
    [CHOCOLATE]: TikoyChocolate,
    [UBE]: TikoyUbe,
    [PB]: TikoyPb,
  };

  const coatingSrc = {
    [PEANUTS]: TikoyPeanut,
    [OREOS]: TikoyOreo,
  };

  console.log(PEANUTS, OREOS, CHOCOLATE, UBE, PB)

  return (
    <div className={'lantern__container'}>
      <img className={'asset lantern__asset'} src={Lantern} alt={text} />
      <div className={'submission_copy__container'}>
        <p className={'submission__copy'}>{text}</p>
      </div>
      <img className={'asset gallery__tikoy'} src={fillingSrc[filling]} alt={`tikoy filled with ${filling}`} />
      <img className={'asset gallery__tikoy'} src={coatingSrc[coating]} alt={`tikoy coated with ${coating}`} />
    </div>
  );
}

export default GalleryLantern;

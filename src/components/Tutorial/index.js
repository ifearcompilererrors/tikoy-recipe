import React, { useState } from 'react';

import Oxchef from '../../assets/Oxchef_No_Margin.png';
import PackagedTikoy from '../../assets/Packaged_Tikoy.png';
import Steamer from '../../assets/Step_1_Steamer.png';
import SteamerPanGif from '../../assets/Step_1_Steamer_Animation.gif';
import SteamerCoverGif from '../../assets/Step_1_Steamer_Cover_Animation.gif';
import Steam from '../../assets/Step_2_Steam_Animation.gif';
import Coating from '../../assets/Step_2_Choose_Coating.png';
import Filling from '../../assets/Step_3_Filling.png';
import Abaniko from '../../assets/Step_4_Abaniko_Fan.png';
import AbanikoFan from '../../assets/Step_4_Abaniko_Fan_Animation.gif';
import UnrolledTikoy from '../../assets/Step_4_Rolled_Out_Tikoy.png';
import TikoySteam from '../../assets/Step_4_Tikoy_Steam_Animation.gif';
import RollingPinStatic from '../../assets/Step_5_Rolling_Pin.png';
import Pb from '../../assets/Step_5_Peanut_Butter.png';
import Ube from '../../assets/Step_5_Ube_Halaya.png';
import Chocolate from '../../assets/Step_5_Chocolate_Spread.png';
import RollingPinGif from '../../assets/Step_5_Rolling_Pin_Animation.gif';
import ChocolateFillingGif from '../../assets/Step_5_Filling_Animation_Chocolate.gif';
import UbeFillingGif from '../../assets/Step_5_Filling_Animation_Ube.gif';
import PbFillingGif from '../../assets/Step_5_Filling_Animation_PB.gif';
import UnrolledChocolate from '../../assets/Step_6_Unrolled_Tikoy_Chocolate.png';
import UnrolledUbe from '../../assets/Step_6_Unrolled_Tikoy_Ube.png';
import UnrolledPb from '../../assets/Step_6_Unrolled_Tikoy_PB.png';
import FoldChocolate from '../../assets/Step_6_Rolling_Tikoy_Chocolate_Animation.gif';
import FoldUbe from '../../assets/Step_6_Rolling_Tikoy_Ube_Animation.gif';
import FoldPb from '../../assets/Step_6_Rolling_Tikoy_PB_Animation.gif';
import CutChocolate from '../../assets/Step_6_Cut_Animation_Chocolate.gif';
import CutUbe from '../../assets/Step_6_Cut_Animation_Ube.gif';
import CutPb from '../../assets/Step_6_Cut_Animation_PB.gif';
import PiecesChocolate from '../../assets/Step_6_Pieces_Animation_Chocolate.gif';
import PiecesUbe from '../../assets/Step_6_Pieces_Animation_Ube.gif';
import PiecesPb from '../../assets/Step_6_Pieces_Animation_PB.gif';
import PlateOreos from '../../assets/Step_7_Plate_Oreos.png';
import PlatePeanuts from '../../assets/Step_7_Plate_Peanuts.png';
import PlatterChocolate from '../../assets/Step_7_Platter_Chocolate.png';
import PlatterPb from '../../assets/Step_7_Platter_PB.png';
import PlatterUbe from '../../assets/Step_7_Platter_Ube.png';
import CoatOreos from '../../assets/Step_7_Coat_Animation_Oreos.gif';
import CoatPeanuts from '../../assets/Step_7_Coat_Animation_Peanuts.gif';
import CoatChocolate from '../../assets/Step_7_Coat_Animation_Chocolate.gif';
import CoatUbe from '../../assets/Step_7_Coat_Animation_Ube.gif';
import CoatPb from '../../assets/Step_7_Coat_Animation_PB.gif';
import Oxhead from '../../assets/Step_8_Oxchef.png';
import TikoyOreo from '../../assets/Step_8_Coating_Oreo.png';
import TikoyPeanut from '../../assets/Step_8_Coating_Peanut.png';
import TikoyChocolate from '../../assets/Step_8_Tikoy_Chocolate.png';
import TikoyPb from '../../assets/Step_8_Tikoy_PB.png';
import TikoyUbe from '../../assets/Step_8_Tikoy_Ube.png';
import TadaGif from '../../assets/Step_8_Animation.gif';

import Button from '../Button';
import instructions from './instructions.json';
import './style.css';

const PEANUTS = 'peanuts';
const OREOS = 'oreos';
const CHOCOLATE = 'chocolate';
const UBE = 'ube';
const PB = 'peanut butter';

const InstructionsContainer = ({ step, coating, filling }) => (
  <div className={'instructions__container'}>
    <div className={'instructions__bubble instructions__copy'}>
      <p id='instructions-copy' className={'instructions__copy'} dangerouslySetInnerHTML={{ __html: instructions[step] }}></p>
    </div>
    {step > 1 && step < 8 && (<div className={'instructions__bubble custom_choice__container instructions__copy'}>
      <p id='instructions-copy'>Your chosen ingredients are:</p>
      {step > 1 && <p>Coating: <b className={'custom_choice'}>{coating}</b></p>}
      {step > 2 && <p>Filling: <b className={'custom_choice'}>{filling}</b></p>}
    </div>)}
  </div>
);

const Illustration = ({ className, alt, src }) => (
  <img alt={alt} className={`asset ${className}`} src={src} />
);

const Step = ({ step, tikoy, handleGetNextStep, handleFinish, handleUpdateCustom }) => {
  const coating = {
    [OREOS]: { id: OREOS, plate: PlateOreos, coat: CoatOreos, finale: TikoyOreo},
    [PEANUTS]: { id: PEANUTS, plate: PlatePeanuts, coat: CoatPeanuts, finale: TikoyPeanut},
  }

  const filling = {
    [CHOCOLATE]: {
      id: CHOCOLATE,
      static: Chocolate, gif: ChocolateFillingGif,
      unroll: UnrolledChocolate, fold: FoldChocolate, cut: CutChocolate, pieces: PiecesChocolate,
      platter: PlatterChocolate, coat: CoatChocolate,
      finale: TikoyChocolate},
    [UBE]: {
      id: UBE,
      static: Ube, gif: UbeFillingGif,
      unroll: UnrolledUbe, fold: FoldUbe, cut: CutUbe, pieces: PiecesUbe,
      platter: PlatterUbe, coat: CoatUbe,
      finale: TikoyUbe},
    [PB]: {
      id: PB,
      static: Pb, gif: PbFillingGif,
      unroll: UnrolledPb, fold: FoldPb, cut: CutPb, pieces: PiecesPb,
      platter: PlatterPb, coat: CoatPb,
      finale: TikoyPb},
  };

  const [state, setState] = useState({
    coating: tikoy?.coating,
    filling: tikoy?.filling,
    
    step1: Steamer,
    step2col2: Coating,
    step3col2: Filling,
    step4col1: TikoySteam,
    step4col2: Abaniko,
    step5col2: RollingPinStatic,
    step6: filling[UBE].unroll,
    step7col1: filling[UBE].platter,
    step7col2: coating[OREOS].plate,
    step7col2filling: null,
    step7col2coat: null,
    step8filling: filling[UBE].finale,
    step8coating: coating[OREOS].finale,
  });

  const handleSetCoating = ({ coatingId }) => {
    setState({ ...state, coating: coating[coatingId] });
    handleUpdateCustom({ coating: coating[coatingId], filling: state.filling });
  };

  const handleSetFilling = ({ fillingId }) => {
    setState({ ...state, filling: filling[fillingId], step6: filling[fillingId].unroll, step7col1: filling[fillingId].platter });
    handleUpdateCustom({ coating: state.coating, filling: filling[fillingId] });
  };

  const handleCool = () => {
    setState({ ...state, step4col2: AbanikoFan });
    setTimeout(() => setState({ ...state, step4col1: UnrolledTikoy }), 4000);
    setTimeout(() => setState({ ...state, step4col1: UnrolledTikoy, step4col2: Abaniko }), 5000);
  }

  return (
    <>
    {step === 0 && (
      <div id={'step-0'} className={'step__container'}>
        <div className={'illustrations__container'}>
          <Illustration src={PackagedTikoy} />
        </div>
        <div className={'step__buttons'}>
          <Button handleClick={() => handleGetNextStep()}>
            Start!
          </Button>
        </div>
        </div>)}
      {step === 1 && (
        <div id={'step-1'} className={'step__container'}>
          <div className={'illustrations__container'}>
            <Illustration src={state.step1} />
          </div>
          <div className={'step__buttons'}>
            <Button handleClick={() => setState({ ...state, step1: SteamerPanGif })}>
              Add Pan
            </Button>
            <Button handleClick={() => setState({ ...state, step1: SteamerCoverGif })}>
              Cover Pot
            </Button>
            <Button handleClick={() => handleGetNextStep()}>
              Next
            </Button>
          </div>
        </div>)}
      {step === 2 && (
        <div id={'step-2'} className={'step__container'}>
          <div className={'illustrations__container'}>
            <div className={'step2__steamer_container'}>
              <Illustration src={Steam} />
            </div>
            <div className={'step2_3__ingredients_container'}>
              <Illustration className={'step2__coating'} src={state.step2col2} />
            </div>
          </div>
          <div className={'step__buttons step2__buttons'}>
            <Button handleClick={() => handleSetCoating({ coatingId: PEANUTS })}>
              Peanuts
            </Button>
            <Button handleClick={() => handleSetCoating({ coatingId: OREOS })}>
              Oreos
            </Button>
            <Button disabled={!state.coating} handleClick={() => handleGetNextStep()}>
              Next
            </Button>
          </div>
        </div>)}
      {step === 3 && (
        <div id={'step-3'} className={'step__container'}>
          <div className={'illustrations__container'}>
            <div className={'step2__steamer_container'}>
              <Illustration src={Steam} />
            </div>
            <div className={'step2_3__ingredients_container'}>
              <Illustration className={'step3__filling'} src={state.step3col2} />
            </div>
          </div>
          <div className={'step__buttons'}>
            <Button
             handleClick={() => handleSetFilling({ fillingId: PB })}
            >
              Peanut Butter
            </Button>
            <Button
             handleClick={() => handleSetFilling({ fillingId: UBE })}
            >
              Ube
            </Button>
            <Button
             handleClick={() => handleSetFilling({ fillingId: CHOCOLATE })}
            >
              Chocolate
            </Button>
            <Button disabled={!state.filling} handleClick={() => handleGetNextStep()}>
              Next
            </Button>
          </div>
        </div>)}
      {step === 4 && (
        <div id={'step-4'} className={'step__container'}>
          <div className={'illustrations__container'}>
            <div className={'step4__asset_container'}>
              <Illustration className={'step4__tikoy'} src={state.step4col1} />
            </div>
            <div className={'step4__asset_container'}>
              <Illustration src={state.step4col2} />
            </div>
          </div>
          <div className={'step__buttons'}>
            <Button handleClick={handleCool}>
              Cool
            </Button>
            <Button handleClick={() => handleGetNextStep()}>
              Next
            </Button>
          </div>
        </div>)}
      {step === 5 && (
        <div id={'step-5'} className={'step__container'}>
          <div className={'illustrations__container'}>
            <div className={'step5__filling_container'}>
              <Illustration src={state.filling.static} />
            </div>
            <div className={'step5__tikoy_container'}>
              <Illustration className={'step5__tikoy'} src={state.step5col2} />
            </div>
          </div>
          <div className={'step__buttons'}>
            <Button handleClick={() => setState({ ...state, step5col2: RollingPinGif })}>
              Roll
            </Button>
            <Button handleClick={() => setState({ ...state, step5col2: state.filling.gif })}>
              Spread
            </Button>
            <Button handleClick={handleGetNextStep}>
              Next
            </Button>
          </div>
        </div>)}
      {step === 6 && (
        <div id={'step-6'} className={'step__container'}>
          <div className={'illustrations__container'}>
            <Illustration className={'step6__asset'} src={state.step6} />
          </div>
          <div className={'step__buttons'}>
            <Button handleClick={() => setState({ ...state, step6: state.filling.fold })}>
              Fold
            </Button>
            <Button handleClick={() => setState({ ...state, step6: state.filling.cut })}>
              Separate
            </Button>
            <Button handleClick={() => setState({ ...state, step6: state.filling.pieces })}>
              Cut
            </Button>
            <Button handleClick={handleGetNextStep}>
              Next
            </Button>
          </div>
        </div>)}
      {step === 7 && (
        <div id={'step-7'} className={'step__container'}>
          <div className={'illustrations__container'}>
            <div className={'step7__platter'}>
              <Illustration className={'step7__platter_asset'} src={state.filling.platter} />
            </div>
            <div className={'step7__plate_container'}>
              <Illustration className={'step7__plate_asset'} src={state.coating.plate} />
              {state.step7col2filling && <Illustration className={'step7__plate_asset'} src={state.step7col2filling} />}
              {state.step7col2coat && <Illustration className={'step7__plate_asset'} src={state.step7col2coat} />}
            </div>
          </div>
          <div className={'step__buttons'}>
            <Button handleClick={() => setState({ ...state, step7col2filling: state.filling.coat, step7col2coat: state.coating.coat, })}>
              Coat
            </Button>
            <Button handleClick={() => handleFinish({ filling: state.filling, coating: state.coating })}>
              Finish
            </Button>
          </div>
        </div>)}
      {step === 8 && (
        <div className={'step8__container'}>
          <div className={'step8__speech_bubble'}>
            <InstructionsContainer step={step} />
          </div>
          <Illustration className={'step8__asset'} src={state.filling.finale} />
          <Illustration className={'step8__asset'} src={state.coating.finale} />
          <Illustration className={'step8__asset'} src={TadaGif} />
        </div>
      )}
    </>
  );
}

const TutorialContainer = () => {
  const [state, setState] = useState({ step: 0, filling: null, coating: null });

  return (
    <div id='recipe'>
      {state.step < 8 && (
        <>
          <div className={'tutorial__container'}>
            <div className={'tutorial__oxpen'}>
              <InstructionsContainer step={state.step} filling={state.filling?.id} coating={state.coating?.id} />
              <div className='tutorial__oxchef_container'>
                <Illustration alt='ox chef' className={'tutorial__oxchef_img'} src={Oxchef} />
              </div>
            </div>
            <div className={'interactive__container'}>
              <Step
                step={state.step}
                handleGetNextStep={() => setState((s) => ({ ...state, step: s.step+1 }))}
                handleFinish={({ filling, coating }) => setState({ ...state, step: 8, filling, coating })}
                handleUpdateCustom={({ filling, coating }) => setState({ ...state, filling, coating })}
              />
            </div>
          </div>
        </>)}
      {state.step === 8 && (
        <div className={'finish__container'}>
          <div className={'oxhead__container'}>
            <Illustration className={'oxhead'} src={Oxhead} />
          </div>
          <Step step={state.step} tikoy={{ filling: state.filling, coating: state.coating }} />
        </div>
        )}
    </div>
  );
}

export default TutorialContainer;

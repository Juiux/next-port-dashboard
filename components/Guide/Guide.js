import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useMousetrap from 'react-hook-mousetrap';

import { ANIME_DURATION, ANIME_DELAY_PE } from '../Common/Animation';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import NextController from './NextController';
import './Guide.scss';

const Guide = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [transOut, setTransOut] = useState(false);
  const [exit, setExit] = useState(false);

  useMousetrap('enter', () => {
    onContinue();
  });

  const onContinue = () => {
    if (step < 4) {
      setTransOut(true);
      setTimeout(() => {
        setTransOut(false);
        setStep(step + 1);
      }, 6 * ANIME_DELAY_PE + ANIME_DURATION);
    } else {
      setExit(true);
      setTransOut(true);
      setTimeout(() => {
        navigate('/onboarding');
      }, 7 * ANIME_DELAY_PE + ANIME_DURATION);
    }
  };

  return (
    <div className="onboarding">
      {step === 1 && <StepOne transOut={transOut} />}
      {step === 2 && <StepTwo transOut={transOut} />}
      {step === 3 && <StepThree transOut={transOut} />}
      {step === 4 && <StepFour transOut={transOut} />}
      <NextController
        onContinue={onContinue}
        step={step}
        transOut={exit}
        goToStep={(value) => {
          setStep(value);
        }}
      />
    </div>
  );
};

export default Guide;

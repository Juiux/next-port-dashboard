import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Common/Button';
import Animation from '../Common/Animation';

import logoSmall from '../../assets/images/logo-small.svg';
import enter from '../../assets/images/enter.svg';
import './NextController.scss';

const NextController = ({ step = 1, onContinue, goToStep, transOut }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Animation transOut={transOut} index={6} type="slide-down">
      <div className="nextController">
        {step < 4 && (
          <div className="dots">
            <div
              className={classNames(['dot', step === 1 && 'dot--active'])}
              onClick={() => goToStep(1)}
              aria-hidden="true"
            />
            <div
              className={classNames(['dot', step === 2 && 'dot--active'])}
              onClick={() => goToStep(2)}
              aria-hidden="true"
            />
            <div
              className={classNames(['dot', step === 3 && 'dot--active'])}
              onClick={() => goToStep(3)}
              aria-hidden="true"
            />
          </div>
        )}

        <Button className="continueBtn" onClick={onContinue}>
          {t('common.continue')}
        </Button>
        <div className="mt-3 d-flex justify-content-center text-center enter_box">
          <p>{t('common.OR PRESS ENTER')}</p>
          <img src={enter} alt="enter" />
        </div>
      </div>
      <img src={logoSmall} alt="logoSmall" className="logoSmall" />
      <div
        className="bottom__text"
        onClick={() => navigate('/onboarding/ethernetworksetup')}
        aria-hidden="true"
      >
        {step < 3 && <h6>{t('common.Skip')}</h6>}
      </div>
    </Animation>
  );
};

NextController.propTypes = {
  step: PropTypes.number.isRequired,
  onContinue: PropTypes.func.isRequired,
  goToStep: PropTypes.func.isRequired,
};

export default NextController;

import React from 'react';
import { useTranslation } from 'react-i18next';
import GradientText from '../Common/GradientText';
import Animation from '../Common/Animation';
import checkbox from '../../assets/images/checkbox.svg';
import dollar from '../../assets/images/dollar.svg';
import './StepTwo.scss';

const StepTwo = ({ transOut }) => {
  const { t } = useTranslation();
  return (
    <div className="steptwo">
      <Animation transOut={transOut} type="fade" index={1}>
        <div className="background" />
      </Animation>
      <div className="title_box">
        <Animation transOut={transOut} type="slide-down" index={2}>
          <div>
            <img src={dollar} alt="dollar" />
          </div>
          <GradientText className="title">
            {t('onboarding.How does MASQ benefit me')}
          </GradientText>
        </Animation>
        <Animation transOut={transOut} type="slide-down" index={3}>
          <div className="d-flex mt-3">
            <img src={checkbox} alt="checkbox" />
            <p
              className="description ms-3"
              dangerouslySetInnerHTML={{
                __html: t('onboarding.The most secure'),
              }}
            />
          </div>
          <div className="d-flex mt-3">
            <img src={checkbox} alt="checkbox" />
            <p
              className="description ms-3"
              dangerouslySetInnerHTML={{
                __html: t('onboarding.Earn cryptocurrency'),
              }}
            />
          </div>
          <div className="d-flex mt-3">
            <img src={checkbox} alt="checkbox" />
            <p
              className="description ms-3"
              dangerouslySetInnerHTML={{ __html: t('onboarding.Give those') }}
            />
          </div>
          <div className="d-flex mt-3">
            <img src={checkbox} alt="checkbox" />
            <p
              className="description ms-3"
              dangerouslySetInnerHTML={{
                __html: t('onboarding.Access content'),
              }}
            />
          </div>
        </Animation>
      </div>
    </div>
  );
};

export default StepTwo;

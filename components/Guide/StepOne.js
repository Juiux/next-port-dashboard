import React from 'react';
import { useTranslation } from 'react-i18next';
import GradientText from '../Common/GradientText';
import Animation from '../Common/Animation';
import magic from '../../assets/images/magic.svg';
import './StepOne.scss';

const StepOne = ({ transOut }) => {
  const { t } = useTranslation();
  return (
    <div className="stepone">
      <Animation transOut={transOut} type="fade" index={1}>
        <div className="background" />
      </Animation>
      <div className="title_box">
        <Animation transOut={transOut} type="slide-down" index={2}>
          <div>
            <img src={magic} alt="magic" />
          </div>
          <GradientText className="title">
            {t('onboarding.The Uncensorable Web. Powered by You.')}
          </GradientText>
        </Animation>
        <Animation transOut={transOut} type="slide-down" index={3}>
          <p
            className="description"
            dangerouslySetInnerHTML={{
              __html: t('onboarding.description_one'),
            }}
          />
        </Animation>
      </div>
    </div>
  );
};

export default StepOne;

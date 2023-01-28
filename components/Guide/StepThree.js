import React from 'react';
import { useTranslation } from 'react-i18next';
import GradientText from '../Common/GradientText';
import Animation from '../Common/Animation';
import marvel from '../../assets/images/marvel.svg';
import './StepThree.scss';

const StepThree = ({ transOut }) => {
  const { t } = useTranslation();
  return (
    <div className="stepthree">
      <Animation transOut={transOut} type="fade" index={1}>
        <div className="background" />
      </Animation>
      <div className="title_box">
        <Animation transOut={transOut} type="slide-down" index={2}>
          <div>
            <img src={marvel} alt="marvel" />
          </div>
          <GradientText className="title">
            {t('onboarding.How MASQ Works')}
          </GradientText>
        </Animation>
        <Animation transOut={transOut} type="slide-down" index={3}>
          <p
            className="description mt-1"
            dangerouslySetInnerHTML={{
              __html: t('onboarding.When you run MASQ'),
            }}
          />
          <p
            className="description mt-3"
            dangerouslySetInnerHTML={{
              __html: t('onboarding.Automatically'),
            }}
          />
          <p
            className="description mt-3"
            dangerouslySetInnerHTML={{ __html: t('onboarding.Spend MASQ') }}
          />
        </Animation>
      </div>
    </div>
  );
};

export default StepThree;

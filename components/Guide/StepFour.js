import React from 'react';
import { useTranslation } from 'react-i18next';
import walletIcon from '../../assets/images/wallet-icon.svg';
import ethLogo from '../../assets/images/eth-logo.svg';
import mainLogo from '../../assets/images/mainlogo.svg';
import GradientText from '../Common/GradientText';
import Animation from '../Common/Animation';
import './StepFour.scss';

const StepFour = ({ transOut }) => {
  const { t } = useTranslation();
  return (
    <div className="stepfour">
      <div>
        <Animation transOut={transOut} type="slide-down" index={0}>
          <GradientText className="title text-center">
            {t('onboarding.Set up MASQ in 3 easy steps')}
          </GradientText>
        </Animation>
        <Animation transOut={transOut} type="slide-down" index={1}>
          <h6
            className="text-center"
            dangerouslySetInnerHTML={{
              __html: t('onboarding.Enjoy the experience'),
            }}
          />
        </Animation>
        <div className="stepfour__cardContianer">
          <Animation
            transOut={transOut}
            type="fade"
            index={2}
            className="position-absolute w-100 h-100"
          >
            <div className="background" />
          </Animation>
          <Animation transOut={transOut} type="fade" index={3}>
            <div className="stepfour__card">
              <div className="stepfour__card-ball">1</div>
              <div className="stepfour__card-header">
                <img src={walletIcon} alt="walletIcon" />
              </div>
              <div className="stepfour__card-footer">
                <p>{t('onboarding.WALLET AND PASSWORD SETUP')}</p>
              </div>
            </div>
          </Animation>

          <Animation transOut={transOut} type="fade" index={4}>
            <div className="stepfour__card">
              <div className="stepfour__card-ball">2</div>
              <div className="stepfour__card-header">
                <img src={ethLogo} alt="ethLogo" />
              </div>
              <div className="stepfour__card-footer">
                <p
                  dangerouslySetInnerHTML={{
                    __html: t('onboarding.CONNECT TO BLOCKCHAIN'),
                  }}
                />
              </div>
            </div>
          </Animation>

          <Animation transOut={transOut} type="fade" index={5}>
            <div className="stepfour__card">
              <div className="stepfour__card-ball">3</div>
              <div className="stepfour__card-header">
                <img src={mainLogo} alt="walletIcon" />
              </div>
              <div className="stepfour__card-footer">
                <p
                  dangerouslySetInnerHTML={{
                    __html: t('onboarding.CONNECT TO MASQ'),
                  }}
                />
              </div>
            </div>
          </Animation>
        </div>
      </div>
    </div>
  );
};

export default StepFour;

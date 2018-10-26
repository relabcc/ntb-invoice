import React from 'react';
import { compose } from 'redux';

import subtitle from './sub-title.svg';
import mobilesubtitle from './mobilesubtitle.svg';
import application from './application.svg';
import verification from './verification.svg';
import show from './show.svg';
import connect from './connect.svg';
import won from './won.svg';
import Step from './Step';
import Title from './Title';
import Picture from './Picture';

import Box from '../../components/Box';
import Flex from '../../components/Flex';
import DoubleLayerButton from '../../components/DoubleLayerButton';
import Container from '../../components/Container';
import BackgroundImage from '../../components/BackgroundImage';
import withLayout from '../../hoc/withLayout';
import Link from '../../components/Link';
import withResponsive from '../../hoc/withResponsive';

const projects = [
  {
    img: application,
    sub: '申請手機條碼',
    descrip: '至電子發票整合服務平台，點選左側「手機條碼申請處」輸入手機號碼和Email，以及圖形上之驗證碼',
  },
  {
    img: verification,
    sub: '驗證並列印',
    descrip: '手機收到驗證碼簡訊後，於登入畫面輸入手機號碼和驗證碼進行列印，再至填寫的Email收取驗證信，才能開啟「驗證碼變更」、「中獎通知」功能',
  },
  {
    img: show,
    sub: '消費時出示',
    descrip: '將列印的手機條碼於消費時向店家出示供其掃描，即可以手機條碼儲存雲端發票',
  },
  {
    img: connect,
    sub: '載具歸戶與設定金融帳戶',
    descrip: '於登入後點選「歸戶」設定，即可添加「信用卡」、「悠遊卡」等載具。點選「設定領獎資料」，即可設定領獎之金融帳戶。',
  },
  {
    img: won,
    sub: '幸運中獎',
    descrip: '電子發票整合服務平台主動email通知，並自動匯款至已設定之金融帳戶',
  },
]

const share = 'https://www.facebook.com/sharer/sharer.php?u=https://e-invoice.relab.cc/'
const apply = 'https://www.einvoice.nat.gov.tw/APMEMBERVAN/GeneralCarrier/generalCarrier!apply'

const Row = ({ project, even, isMobile, index }) => {
  const pic = <Picture width={!isMobile ? 1 / 2 : 1} img={project.img} mb={['1em', 0]} />;
  const content =
    <Step
      textAlign={isMobile ? 'center' : 'auto'}
      width={!isMobile ? 1 / 2 : 1}
      mr={[0, even ? '0' : '3em']}
      ml={[0, even ? '3em' : '0']}
      step={index +1}
      sub={project.sub}
      descrip={project.descrip}
      justifyContent={isMobile && 'center'}
    />;
  return (
    <Flex alignItems="center" py="2em" flexWrap={isMobile ? 'wrap' : 'nowrap'}>
      {(even || isMobile) ? pic : null}
      {content}
      {(!even && !isMobile) ? pic : null}
    </Flex>
  );
}

const ActionButton = (props) => (
  <DoubleLayerButton
    is={Link}
    px="3em"
    mx="0.5em"
    width={['18em', '13em']}
    {...props}
  />
);

const index = ({ browser }) => {
  const isMobile = browser.lessThan.sm;
  return (
    <Container>
      <Box px={['6%', '20%']} pb={['1.5em','3em']} pt="3em">
        <Title />
      </Box>
      <Box px="10%">
        <BackgroundImage src={isMobile ? mobilesubtitle : subtitle} ratio={isMobile ? 522.74 / 606.76 : 296.94 / 763.55} />
      </Box>
      <Box pt={['0.25em','3em']} pb={['1em','3em']} px={['6%', '8%']} borderBottom="2px solid">
        {projects.map((project, index) => (
          <Row
            key={index}
            project={project}
            index={index}
            even={index % 2 === 0}
            isMobile={isMobile}
          />
        ))}
      </Box>
      <Flex justifyContent="center" textAlign="center" py="3em" flexWrap="wrap">
        <ActionButton href={apply} mb={['1em', 0]}>
          申請手機條碼
        </ActionButton>
        <ActionButton href={share}>
          分享測驗
        </ActionButton>
      </Flex>
    </Container>
  );
};

export default compose(withLayout, withResponsive)(index);

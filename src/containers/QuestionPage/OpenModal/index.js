import React from 'react';
import styled from 'styled-components';


import fashion from './fashion.svg';
import tradition from './tradition.svg';
import map from './map.svg';
import invoice from './invoice.svg';
import gift from './gift.svg';
import barcode from './barcode.svg';

import Modal from '../../../components/Modal';
import Box from '../../../components/Box';
import Text from '../../../components/Text';
import BackgroundImage from '../../../components/BackgroundImage';
import Flex from '../../../components/Flex';
import Button from '../../../components/Button';
import Link from '../../../components/Link';
import Tooltip from '../../../components/Tooltip';

const BoxSE = styled(Box)`
  @media (max-width: 321px) {
    font-size: 1em;
  }
`;

const projects = [
  {
    text: (
      <Text>
        <b>自108年1月1日起</b><br />
        擴大兌獎服務據點至
        <Tooltip overlay="四大超商、美廉社、全聯、第一銀行、彰化銀行、全國農業金庫、農漁會信用部及信用合作社等">
          金融機構與四大超商
        </Tooltip>
        等，郵局不再提供兌獎服務。
      </Text>
    ),
    src: map
  },
  {
    text: <Text><b>自108年1月1日起</b><br />新增使用行動裝置下載財政部兌獎行動應用程式，即時兌領雲端發票中獎獎金服務。</Text>,
    src: invoice
  },
  {
    text: '統一發票獎中獎號碼人人可以兌，但只有雲端發票才具有專屬獎項哦。',
    src: gift
  },
  {
    text: '只要申請手機條碼並將載具歸戶，從此你也可以無紙一身輕！',
    src: barcode
  }
]

const share = 'https://www.facebook.com/sharer/sharer.php?u=https://e-invoice.relab.cc/&q4'


const OpenModal = ({ isOpen, isCorrect, pageId, isLast, qId, ...props }) => (
  <Modal
    isOpen={isOpen}
    {...props}
  >
    <Box width={['80vw', 'unset']} textAlign="center" py={['1em', '3em']}>
      <Box px={['20%', '30%']}>
        <BackgroundImage src={isCorrect ? fashion : tradition} ratio={207 / 259} />
      </Box>
      <BoxSE fontWeight="bold" color="coffee" fontSize={['1.2em', '1.5em']} my="0.8em">
        {isCorrect ? (
          <Text fontFamily="JinXuan-Fresh" letterSpacing="0.25em">你的發票觀很跟得上時代</Text>
        ) : (
          <Text fontFamily="JinXuan-Fresh" letterSpacing="0.25em">你的發票觀還在上個時代</Text>
        )}
      </BoxSE>
      <Box py="0.25em" borderTop="2px solid" borderBottom="2px solid" borderColor="coffee" mx={['5%', '10%']} my="1.5em">
        <Flex
          borderTop="1.2px solid"
          borderBottom="1.2px solid"
          borderColor="coffee"
          py="1.5em"
          alignItems="center"
        >
          <Box width={[1 / 4, 1 / 5]} mr="1em">
            <BackgroundImage src={projects[qId].src} ratio={1} />
          </Box>
          <Box width={[3 / 4, 4 / 5]} textAlign="left" lineHeight="1.5">
            {projects[qId].text}
          </Box>
        </Flex>
      </Box>
      <Flex justifyContent="center" flexWrap="wrap">
        {pageId > 2 && (
          <Button
            is={Link}
            to="/tutorial"
            px={['1em', '3em']}
            mx="0.25em"
            mb={['1em', '0']}
            width={['15em', 'auto']}
            flexWrap="wrap"
          >
            {isLast ? '申請條碼教學' : '跳過測驗，直接看教學'}
          </Button>
        )}
        <Button
          is={Link}
          to={!isLast && `/question/${pageId + 1}`}
          href={isLast && share}
          px={['1em', '3em']}
          mx="0.25em"
          width={['15em', 'auto']}
        >
          {isLast ? '分享測驗' : '下一題'}
        </Button>
      </Flex>
    </Box>
  </Modal>
)

export default OpenModal;

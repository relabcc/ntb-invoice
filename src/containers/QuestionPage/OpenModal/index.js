import React from 'react';
import { navigate } from 'gatsby';

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

const projects = [
  {
    text: '自108年1月1日起\n擴大兌獎服務據點至金融機構與四大超商等，郵局不再提供兌獎服務。',
    src: map
  },
  {
    text: '自108年1月1日起\n新增使用行動裝置下載財政部兌獎行動應用程式，即時兌領電子發票中獎獎金服務。',
    src: invoice
  },
  {
    text: '統一發票獎中獎號碼人人可以兌，但只有雲端發票才具有專屬獎項哦。',
    src: gift
  },
  {
    text: '只要申請手機條碼並將載具規戶，從此你也可以無紙一身輕！',
    src: barcode
  }
]

const share = 'http://www.facebook.com/sharer/sharer.php?u=https://e-invoice.relab.cc/&t=雲端發票知多少'


const OpenModal = ({ isOpen, isCorrect, pageId, isLast, qId, ...props }) => (
  <Modal
    isOpen={isOpen}
    {...props}
  >
    <Box textAlign="center" py="3em">
      <Box px="30%">
        <BackgroundImage src={isCorrect ? fashion : tradition} ratio={207 / 259} />
      </Box>
      <Box fontWeight="bold" color="coffee" fontSize={['1em', '1.5em']} my="1.5em">
        {isCorrect ? (
          <Text fontFamily="JinXuan-Fresh" letterSpacing="0.25em">你的發票觀很跟得上時代</Text>
        ) : (
          <Text fontFamily="JinXuan-Fresh" letterSpacing="0.25em">你的發票觀還在上個時代</Text>
        )}
      </Box>
      <Box py="0.25em" borderTop="2px solid" borderBottom="2px solid" borderColor="coffee" mx={['5%', '10%']} my="1em">
        <Flex
          borderTop="1.2px solid"
          borderBottom="1.2px solid"
          borderColor="coffee"
          p="1.5em"
          alignItems="center"
        >
          <Box width={['12em', '6em']} mr="1em">
            <BackgroundImage src={projects[qId].src} ratio={1} />
          </Box>
          <Box textAlign="left" whiteSpace="pre-wrap">
            {projects[qId].text}
          </Box>
        </Flex>
      </Box>
      <Flex justifyContent="center" flexWrap="wrap">
        {pageId > 2 && (
          <Button
            is={Link}
            to="/tutorial"
            px="3em"
            mx="0.25em"
            width={['15em', 'auto']}
          >
            {isLast ? '申請條碼教學' : '如何使用雲端發票'}
          </Button>
        )}
        <Button
          is={Link}
          to={!isLast && `/question/${pageId + 1}`}
          href={isLast && share}
          px="3em"
          mx="0.25em"
          mb={['1em', '0']}
          width={['15em', 'auto']}
        >
          {isLast ? '分享測驗' : '下一題'}
        </Button>
      </Flex>
    </Box>
  </Modal>
)

export default OpenModal;

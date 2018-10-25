import React from 'react'

import HomeIndex from '../containers/HomeIndex'
import Container from '../components/Container'
import withLayout from '../hoc/withLayout';
import VerticalCenter from '../components/VerticalCenter';

const IndexPage = () => (
  <Container height="100vh">
    <VerticalCenter>
      <HomeIndex />
    </VerticalCenter>
  </Container>
)

export default withLayout(IndexPage)

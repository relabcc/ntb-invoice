import React from 'react'

import HomeIndex from '../containers/HomeIndex'
import Container from '../components/Container'
import withLayout from '../hoc/withLayout';

const IndexPage = () => (
  <Container>
    <HomeIndex />
  </Container>
)

export default withLayout(IndexPage)

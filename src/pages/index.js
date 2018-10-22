import React from 'react'
import { compose } from 'redux';

import HomeIndex from '../containers/HomeIndex'
import Container from '../components/Container'
import withLayout from '../hoc/withLayout';
import withResponsive from '../hoc/withResponsive';

const IndexPage = ({ browser }) => (
  <Container>
    <HomeIndex />
  </Container>
)

export default compose(withLayout, withResponsive)(IndexPage)

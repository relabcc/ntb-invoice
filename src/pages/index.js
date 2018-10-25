import React from 'react'

import HomeIndex from '../containers/HomeIndex'
import Layout from '../containers/Layout'
import Container from '../components/Container'
import VerticalCenter from '../components/VerticalCenter';

const IndexPage = () => (
  <Layout>
    <Container height="100vh">
      <VerticalCenter>
        <HomeIndex />
      </VerticalCenter>
    </Container>
  </Layout>
)

export default (IndexPage)

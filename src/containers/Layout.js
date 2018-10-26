import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Provider } from 'react-redux';

import createStore from '../stores/createStore';
import ThemeProvider from '../components/ThemeProvider';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            description
          }
        }
      }
    `}
    render={({ site: { siteMetadata: { title, description } } }) => (
      <Provider store={createStore()}>
        <ThemeProvider>
          <div>
            <Helmet
              title={title}
              meta={[
                { name: 'description', content: description },
              ]}
            >
              <html lang="zh-Hant-TW" />
              <meta property="og:url" content="https://e-invoice.relab.cc" />
              <meta property="og:image" content="https://e-invoice.relab.cc/fb.png" />
              <meta property="og:title" content={title} />
              <meta property="og:description" content={description} />
            </Helmet>
            {children}
          </div>
        </ThemeProvider>
      </Provider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

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
            title
          }
        }
      }
    `}
    render={(data) => (
      <Provider store={createStore()}>
        <ThemeProvider>
          <div>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: '統一發票發行至今超過了一甲子，我們都習慣它，也對它又愛又恨！不過，時代在進步，你的發票觀跟得上時代嗎？' },
              ]}
            >
              <html lang="zh-Hant-TW" />
              <meta property="og:url" content="https://e-invoice.relab.cc" />
              <meta property="og:image" content="https://e-invoice.relab.cc/fb.png" />
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

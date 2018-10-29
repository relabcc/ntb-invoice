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
              <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
              <link rel="manifest" href="/site.webmanifest" />
              <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
              <meta name="msapplication-TileColor" content="#da532c" />
              <meta name="theme-color" content="#ffffff" />
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

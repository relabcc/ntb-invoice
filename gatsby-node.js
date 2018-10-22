/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const merge = require('lodash/merge');
const questions = require('./src/containers/QuestionPage/questions.json')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve) => {
    questions.forEach((q, index) => {
      const base = 'question/';
      const id = index + 1;
      createPage({
        path: `${base}${id}`,
        component: path.resolve('./src/containers/QuestionPage/index.js'),
        context: merge({ id, isLast: id === questions.length }, q),
      });
    });
    resolve();
  })
};

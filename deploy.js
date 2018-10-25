const fs = require('fs');
const ghpages = require('gh-pages');

fs.writeFile('./public/CNAME', 'e-invoice.relab.cc', (err) => {
  if (!err) {
    ghpages.publish('./public');
  }
});

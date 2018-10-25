const glob = require('glob');
const fs = require('fs');

const font = `'PingFang TC','HeiTi TC','Microsoft JhengHei',sans-serif`;
// const fontEng = (weight) => `Dosis,sans-serif" font-weight="${weight}"`;

const replaceMap = [
  'PingFangTC-Light, PingFangTC Light-B5pc-H',
  'PingFangTC-Thin, PingFangTC Thin-B5pc-H',
  'PingFangTC-Regular, PingFangTC Regular-B5pc-H',
  'PingFangTC-Medium, PingFangTC Medium-B5pc-H',
  'PingFangTC-Semibold, PingFangTC Semibold-B5pc-H',
];


const replacer = (match, pre, fm, post) => {
  if (replaceMap.includes(fm)) return pre + font + post;
  // const engWeight = replaceMapEng[fm];
  // if (engWeight) return pre + fontEng(engWeight);
  return match;
};

const transfromText = (src) => new Promise((res, rej) => {
  fs.readFile(src, (readErr, data) => {
    if (readErr) rej(readErr);
    const svgCode = data.toString();
    fs.writeFile(src, svgCode.replace(/(font-family=")([^"]+)(")/g, replacer), (writeErr) => {
      if (writeErr) rej(writeErr);
      res();
    });
  });
});

const handleGlob = (err, list) => {
  Promise.all(list.map(transfromText)).then(process.exit);
};

glob('./src/**/*.svg', handleGlob);

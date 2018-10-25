const Fontmin = require('fontmin');
const path = require('path');
const question = require('../containers/QuestionPage/questions.json')

const fontMinGen = (src, text) => [
  new Fontmin()
    .src(src)
    .use(Fontmin.otf2ttf())
    .use(Fontmin.glyph({text}))
    .dest(path.resolve(__dirname, './minified')),
  new Fontmin()
    .src(src)
    .use(Fontmin.otf2ttf())
    .use(Fontmin.glyph({text}))
    .use(Fontmin.ttf2woff())
    .dest(path.resolve(__dirname, './minified'))
];

const texts = [
  '使用雲端發票教學',
  '四個情境題',
  '看看你的『發票觀』跟不跟得上時代',
  '你的發票觀很跟得上時代',
  '你的發票觀還在上個時代',
  ...question.map(({ title }) => title),
].join('');

const textsWithoutThreePeriod = Array.from(texts).filter((char) => char !== '…').join('');

const fontminMedium = fontMinGen(
  path.resolve(__dirname, './source/jf-jinxuan-fresh2.2-medium.otf'),
  textsWithoutThreePeriod
);
const fontminRegular = fontMinGen(
  path.resolve(__dirname, './source/jf-jinxuan-fresh2.2-regular.otf'),
  textsWithoutThreePeriod
);

Promise.all([...fontminMedium, ...fontminRegular].map(task => new Promise((res, rej) => {
  task.run(err => {
    if (err) {
      console.error(err);
      rej(err);
    }
    res();
  });
}))).then(process.exit);

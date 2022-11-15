// Updates README.md with current year's progress.

const fs = require('fs');

const year = new Date().getFullYear();
const yearStart = new Date(`${year}-01-01T00:00:00+00:00`).getTime();
const yearEnd = new Date(`${year}-12-31T23:59:59+00:00`).getTime();
const progress = (Date.now() - yearStart) / (yearEnd - yearStart);

const progressBar = (function () {
  const progressBarSize = 30;
  const progressBarPosition = parseInt(progress * progressBarSize);

  const bar =
    '◽️'.repeat(progressBarPosition - 1) +
    '👾' +
    '◽️'.repeat(progressBarSize - progressBarPosition);

  return `<!--YEAR_START-->${bar} ${(progress * 100).toFixed(
    2,
  )}% complete<!--YEAR_END-->`;
})();

let readme = fs.readFileSync('./README.md', { encoding: 'utf8' });

const regex = /<!--YEAR_START-->.*<!--YEAR_END-->/i;
readme = readme.replace(regex, progressBar);

console.log(readme);

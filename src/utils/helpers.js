import memoize from './memoize';

const hexToRgb = hex =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => `#${r}${r}${g}${g}${b}${b}`
    )
    .substring(1)
    .match(/.{2}/g)
    .map(num => parseInt(num, 16));

const checkWithYIQ = rgbList => {
  const [r, g, b] = rgbList;

  return (r * 299 + g * 587 + b * 114) / 1000 <= 128;
};

export const isDarkColor = memoize(enteredColor => {
  if (enteredColor.includes('#')) {
    return checkWithYIQ(hexToRgb(enteredColor));
  }

  return checkWithYIQ(enteredColor.replace(/[^\d,]/g, '').split(','));
});

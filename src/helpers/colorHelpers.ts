export const checkRGBValidity = (num: number): boolean => {
  if (typeof num !== 'number') {
    throw new TypeError('num must be a number');
  }
  return (num >= 0 && num <= 255);
};

export const isInteger = (value: number): boolean => typeof value === 'number'
    // eslint-disable-next-line no-restricted-globals
    && isFinite(value)
    && Math.floor(value) === value;

export const componentToHex = (rgbVal: number): string => {
  if (typeof rgbVal !== 'number') {
    throw new TypeError('rgbVal must be a number');
  }
  if (rgbVal < 0 || rgbVal > 255 || !isInteger(rgbVal)) {
    throw new Error('rgbVal must be an integer between 0 and 255, inclusive');
  }
  const hex = rgbVal.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

export const convertRGBToHex = (r: number, g: number, b: number): string => `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;

export const convertHexToRGB = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result === null) {
    throw new Error('not a valid hex');
  }
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : {
    r: 255,
    g: 255,
    b: 255,
  };
};
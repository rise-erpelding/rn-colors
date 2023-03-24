import { convertHexToRGB, convertRGBToHex } from "./colorHelpers";
import { makeStops } from "./makeStops";
import { RGBColor } from "../types";

export const makeRow = (length: number, startColor: string, endColor: string) => {
  const row = new Array(length);
  const startColorRGB = convertHexToRGB(startColor);
  const endColorRGB = convertHexToRGB(endColor);

  const rStops = makeStops(length, startColorRGB.r, endColorRGB.r);
  const gStops = makeStops(length, startColorRGB.g, endColorRGB.g);
  const bStops = makeStops(length, startColorRGB.b, endColorRGB.b);

  for (let i = 0; i < row.length; i += 1) {
    row[i] = convertRGBToHex(rStops[i], gStops[i], bStops[i]);
  }
  // return row.map((value, i) => convertRGBToHex(rStops[i], gStops[i], bStops[i]));
  return row;
};
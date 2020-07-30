/*
 * icons helper
 */

import { browser } from 'webextension-polyfill-ts';

const imagesDir = '../data/images/';
const imagesList = {
  16: '',
  32: '',
  64: '',
  128: '',
  1024: '',
};

export default function setDefault() {
  const iconPrefix = 'search_period_';

  Object.keys(imagesList).forEach((size) => {
    Object.assign(imagesList, { [size]: `${imagesDir}${iconPrefix}` });
  });

  return browser.browserAction.setIcon({
    path: imagesList,
  });
}

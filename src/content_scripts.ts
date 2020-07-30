/**
 * index of content_scripts
 */

import { STORAGE_KEYS } from './const/index';
import { getStorage, setStorage, clearStorage } from './helpers/storage';

// TODO: make to be variable
const historyLengthMax = 64;
const currentUrlParams = new URLSearchParams(window.location.search);
const params = {}; // TODO: define types
currentUrlParams.forEach((value, key) => {
  Object.assign(params, { [key]: value });
});

// execute in content_scripts matches pages
(async () => {
  // get and set history
  try {
    const history: Array<any> = await getStorage(STORAGE_KEYS.history) || [];
    if (history.length >= historyLengthMax) history.shift();
    history.push(params);
    await setStorage(STORAGE_KEYS.history, history);
  } catch (error) {
    clearStorage();
  }
})();

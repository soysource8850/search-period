/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

/**
 * storage helper
 */

import { browser } from 'webextension-polyfill-ts';

export async function setStorage(storageKey: string, params: any) {
  await browser.storage.local
    .set({ [storageKey]: params })
    .then(() => true)
    .catch((error) => {
      console.error(error);
      console.error(`storageKey: ${storageKey}`);
      console.error(`params: ${params}`);
      return false;
    });
}

export async function getStorage(storageKey: string) {
  const storageItem = await browser.storage.local
    .get(storageKey)
    .then((data) => data[storageKey])
    .catch((error) => {
      console.error(error);
      console.error(`storageKey: ${storageKey}`);
      return false;
    });

  return storageItem;
}

export async function clearStorage() {
  await browser.storage.local
    .clear()
    .then(() => true)
    .catch((error) => {
      console.error(error);
      return false;
    });
}

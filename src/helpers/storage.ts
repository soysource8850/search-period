/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

/*
 * ストレージ制御ヘルパー
 */
import { browser } from 'webextension-polyfill-ts';

class Storage {
  static async setStorage(storageKey: string, params: any) {
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

  static async getStorage(storageKey: string) {
    await browser.storage.local
      .get(storageKey)
      .then((data) => data[storageKey])
      .catch((error) => {
        console.error(error);
        console.error(`storageKey: ${storageKey}`);
        return false;
      });
  }

  static async clearStorage() {
    await browser.storage.local
      .clear()
      .then(() => true)
      .catch((error) => {
        console.error(error);
        return false;
      });
  }
}

export default new Storage();

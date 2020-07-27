/*
 * ストレージ制御ヘルパー
 */
import { browser } from 'webextension-polyfill-ts';

class Storage {
  async setStorage(storageKey: string, params: any) {
    return await browser.storage.local
      .set({ [storageKey]: params })
      .then(() => {
        return true;
      })
      .catch(error => {
        console.error(error);
        console.info(`storageKey: ${storageKey}`);
        console.info(`params: ${params}`);
        return false;
      });
  }

  async getStorage(storageKey: string) {
    return await browser.storage.local
      .get(storageKey)
      .then(data => {
        return data[storageKey];
      })
      .catch(error => {
        console.error(error);
        console.info(`storageKey: ${storageKey}`);
        return false;
      });
  }

  async clearStorage() {
    return await browser.storage.local
      .clear()
      .then(() => {
        return true;
      })
      .catch(error => {
        console.error(error);
        return false;
      });
  }
}

export default new Storage();

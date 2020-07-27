/*
 * エクステンション全般で利用する軽量メソッド用ヘルパー
 */
import { browser } from 'webextension-polyfill-ts';

class Util {

  // 4msが最小値 https://developer.mozilla.org/ja/docs/Web/API/WindowTimers/setTimeout
  async sleep(interval = 1000) {
    if (interval < 4) {
      interval = 4;
    }
    await new Promise(resolve => setTimeout(resolve, interval));
  }

  async notifyToBrowser(id = '', options: CreateNotificationOptions) {
    return await browser.notifications.create(id, options)
      .catch(error => {
        throw new Error(error);
      });
  }
}

export default new Util();

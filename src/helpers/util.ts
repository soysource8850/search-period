/*
 * エクステンション全般で利用する軽量メソッド用ヘルパー
 */
import { browser } from 'webextension-polyfill-ts';

class Util {
  // 4msが最小値 https://developer.mozilla.org/ja/docs/Web/API/WindowTimers/setTimeout
  static async sleep(interval = 1000) {
    await new Promise((resolve) => setTimeout(resolve, interval));
  }

  static async notifyToBrowser(id = '', options: CreateNotificationOptions) {
    await browser.notifications.create(id, options)
      .catch((error) => {
        throw new Error(error);
      });
  }
}

export default new Util();

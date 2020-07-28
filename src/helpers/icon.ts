/*
 * エクステンションアイコン制御ヘルパー
 */
import { browser } from 'webextension-polyfill-ts';

class Icon {
  static setDefault() {
    return browser.browserAction.setIcon({
      path: {

      },
    });
  }

  static setExecution() {
    return browser.browserAction.setIcon({
      path: {

      },
    });
  }
}

export default new Icon();

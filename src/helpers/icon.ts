/*
 * エクステンションアイコン制御ヘルパー
 */
import { browser } from 'webextension-polyfill-ts';

class Icon {

  setDefault() {
    return browser.browserAction.setIcon({
      path: {

      },
    });
  }

  setExecution() {
    return browser.browserAction.setIcon({
      path: {

      },
    });
  }
}

export default new Icon();

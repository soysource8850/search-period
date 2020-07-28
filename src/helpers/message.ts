/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

/*
 * popup, background, content_script 間のメッセージヘルパー
 */
import { browser } from 'webextension-polyfill-ts';

class Message {
  static addEventHandlers(handlers: {[key: string]: (param: any) => any }) {
    browser.runtime.onMessage.addListener((request) => {
      if (request.command && handlers[request.command]) {
        return handlers[request.command](request.param);
      }
      return true;
    });
  }

  static sendMessage(command: string, param = {}) {
    return browser.runtime.sendMessage({ command, param });
  }

  static async sendMessageToContentScript(command: string, param = {}) {
    await browser.tabs.query({ active: true })
      .then((tabs: any) => {
        const tab = tabs.pop();
        return browser.tabs.sendMessage(tab.id, { command, param });
      })
      .catch(() => {
        console.error('missing active tab.');
        return false;
      });
  }
}

export default new Message();

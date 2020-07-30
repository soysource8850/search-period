/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

/**
 * message helper
 * popup, background, content_scripts
 */

import { browser } from 'webextension-polyfill-ts';

export function addEventHandlers(handlers: {[key: string]: (param: any) => any }) {
  browser.runtime.onMessage.addListener((request) => {
    if (request.command && handlers[request.command]) {
      return handlers[request.command](request.param);
    }
    return true;
  });
}

export function sendMessage(command: string, param = {}) {
  return browser.runtime.sendMessage({ command, param });
}

export async function sendMessageToContentScript(command: string, param = {}) {
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

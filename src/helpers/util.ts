/**
 * utility
 */

import { browser } from 'webextension-polyfill-ts';

export async function sleep(interval = 1000) {
  await new Promise((resolve) => setTimeout(resolve, interval));
}

export async function notifyToBrowser(id = '', options: CreateNotificationOptions) {
  await browser.notifications.create(id, options)
    .catch((error) => {
      throw new Error(error);
    });
}

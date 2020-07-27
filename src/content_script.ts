/*
 * manifest.json で登録される開いているページで実行される処理
 */
import Message from './helpers/message';

const currentURL = window.location.href;

const handlers = {};
Message.addEventHandlers(handlers);

(async () => {
  console.log('test');
})();
